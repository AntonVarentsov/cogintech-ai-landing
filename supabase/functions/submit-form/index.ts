import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Bitrix24 CRM integration
async function createBitrix24Contact(formData: any, formType: string) {
  const bitrix24WebhookUrl = Deno.env.get('BITRIX24_WEBHOOK_URL');
  
  console.log('🔗 Bitrix24 Webhook URL configured:', bitrix24WebhookUrl ? 'YES' : 'NO');
  console.log('📝 Form type:', formType);
  console.log('📋 Form data keys:', Object.keys(formData));
  
  if (!bitrix24WebhookUrl) {
    console.log('❌ Bitrix24 Webhook URL not configured, skipping Bitrix24 integration');
    return null;
  }

  try {
    let companyId = null;
    
    // Determine source based on form type
    const getSourceInfo = (formType: string) => {
      switch (formType) {
        case 'contact':
          return {
            sourceId: 'CONSULTATION',
            sourceDescription: 'Website consultation form',
            formName: 'Consultation Request Form'
          };
        case 'lead':
          return {
            sourceId: 'WEBSITE',
            sourceDescription: 'Website Book Demo Request Form',
            formName: 'Book Demo Request Form'
          };
        case 'sandbox':
          return {
            sourceId: 'WEBSITE',
            sourceDescription: 'Access Sandbox',
            formName: 'Access Sandbox Environment'
          };
        case 'api-subscription':
          return {
            sourceId: 'WEBSITE',
            sourceDescription: 'API news subscription',
            formName: 'API Documentation Updates'
          };
        case 'newsletter':
          return {
            sourceId: 'WEBSITE',
            sourceDescription: 'Website Newsletter Subscription',
            formName: 'AI Engineering Tools Newsletter'
          };
        default:
          return {
            sourceId: 'WEB',
            sourceDescription: 'Website form submission',
            formName: 'Website Contact Form'
          };
      }
    };

    const sourceInfo = getSourceInfo(formType);
    
    // Create company if provided
    if (formData.company && formData.company.trim() !== '') {
      const companyData = {
        fields: {
          TITLE: formData.company,
          COMPANY_TYPE: 'CUSTOMER',
          SOURCE_ID: sourceInfo.sourceId,
          SOURCE_DESCRIPTION: sourceInfo.sourceDescription
        }
      };

      console.log('Creating Bitrix24 company with data:', JSON.stringify(companyData, null, 2));

      const companyResponse = await fetch(`${bitrix24WebhookUrl}/crm.company.add.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyData),
      });

      if (companyResponse.ok) {
        const companyResult = await companyResponse.json();
        companyId = companyResult.result;
        console.log('Bitrix24 company created:', companyId);
      } else {
        console.error('Bitrix24 company creation failed:', await companyResponse.text());
      }
    }

    // Create contact in Bitrix24 using proper field mapping
    const formMessage = formData.comments || formData.message || '';
    const finalMessage = formMessage || `Отправлено через ${sourceInfo.formName}`;
    
    // Handle newsletter subscription differently
    if (formType === 'newsletter') {
      const contactData = {
        FIELDS: {
          TITLE: `Newsletter Subscriber - ${formData.email}`,
          NAME: formData.email.split('@')[0], // Use email prefix as name for newsletter
          EMAIL: [{ VALUE: formData.email, VALUE_TYPE: 'WORK' }],
          SOURCE_ID: sourceInfo.sourceId,
          SOURCE_DESCRIPTION: sourceInfo.sourceDescription,
          POST: 'Newsletter Subscriber'
        },
        REQUEST_MESSAGE: `Newsletter subscription: ${formData.newsletterType || 'AI Engineering Tools Updates'}`,
        REQUEST_FORM: sourceInfo.formName
      };
      
      console.log('Creating Bitrix24 newsletter contact with data:', JSON.stringify(contactData, null, 2));
      
      const contactResponse = await fetch(`${bitrix24WebhookUrl}/crm.contact.add.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      console.log('Bitrix24 newsletter contact response status:', contactResponse.status);
      console.log('Bitrix24 newsletter contact response headers:', Object.fromEntries(contactResponse.headers.entries()));

      if (contactResponse.ok) {
        const contactResult = await contactResponse.json();
        console.log('Bitrix24 newsletter contact full response:', JSON.stringify(contactResult, null, 2));
        
        // Проверяем есть ли ошибки в ответе Bitrix24
        if (contactResult.error) {
          console.error('Bitrix24 API returned error:', contactResult.error);
          console.error('Bitrix24 error description:', contactResult.error_description);
          return null;
        }
        
        if (contactResult.result) {
          console.log('✅ Bitrix24 newsletter contact successfully created with ID:', contactResult.result);
          return { contact: contactResult.result, lead: null, company: null };
        } else {
          console.error('❌ Bitrix24 response OK but no result ID returned:', contactResult);
          return null;
        }
      } else {
        const errorText = await contactResponse.text();
        console.error('❌ Bitrix24 newsletter contact creation failed:', {
          status: contactResponse.status,
          statusText: contactResponse.statusText,
          body: errorText
        });
        return null;
      }
    }
    
    const contactData = {
      FIELDS: {
        TITLE: `Новый лид - ${formData.name || 'Без имени'}`,
        NAME: formData.name?.split(' ')[0] || formData.name || '',
        LAST_NAME: formData.name?.split(' ').slice(1).join(' ') || '',
        EMAIL: [{ VALUE: formData.email, VALUE_TYPE: 'WORK' }],
        PHONE: formData.phone ? [{ VALUE: formData.phone, VALUE_TYPE: 'WORK' }] : [],
        COMPANY_ID: companyId || undefined,
        POST: formData.role || '',
        SOURCE_ID: sourceInfo.sourceId,
        SOURCE_DESCRIPTION: sourceInfo.sourceDescription
      },
      REQUEST_MESSAGE: finalMessage,
      REQUEST_FORM: sourceInfo.formName
    };

    console.log('Creating Bitrix24 contact with data:', JSON.stringify(contactData, null, 2));

    const contactResponse = await fetch(`${bitrix24WebhookUrl}/crm.contact.add.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    console.log('Bitrix24 contact creation response status:', contactResponse.status);

    if (!contactResponse.ok) {
      const errorText = await contactResponse.text();
      console.error('Bitrix24 contact creation error response:', errorText);
      throw new Error(`Bitrix24 contact creation failed: ${contactResponse.status} - ${errorText}`);
    }

    const contactResult = await contactResponse.json();
    console.log('Bitrix24 contact created:', contactResult.result);

    // Create a lead/deal for this contact
    const leadData = {
      fields: {
        TITLE: `Website Lead - ${formData.name} (${formData.company || 'No Company'})`,
        CONTACT_ID: contactResult.result,
        COMPANY_ID: companyId || undefined,
        SOURCE_ID: sourceInfo.sourceId,
        SOURCE_DESCRIPTION: sourceInfo.sourceDescription,
        STATUS_ID: 'NEW',
        COMMENTS: finalMessage,
        OPPORTUNITY: 0
      }
    };

    const leadResponse = await fetch(`${bitrix24WebhookUrl}/crm.lead.add.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    if (leadResponse.ok) {
      const leadResult = await leadResponse.json();
      console.log('Bitrix24 lead created:', leadResult.result);
      return { contact: contactResult.result, lead: leadResult.result, company: companyId };
    } else {
      console.error('Bitrix24 lead creation failed:', await leadResponse.text());
      return { contact: contactResult.result, lead: null, company: companyId };
    }

  } catch (error) {
    console.error('Bitrix24 integration error:', error);
    return null;
  }
}

interface FormSubmission {
  formType: 'contact' | 'lead' | 'sandbox' | 'api-subscription' | 'newsletter';
  csrfToken: string;
  formData: any;
  honeypot: string;
  fillTime: number;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const clientIP = (req.headers.get('x-forwarded-for') || 
                     req.headers.get('x-real-ip') || 
                     'unknown').split(',')[0].trim(); // Берем только первый IP
    const userAgent = req.headers.get('user-agent') || '';

    const submission: FormSubmission = await req.json();
    
    console.log('Form submission received:', {
      formType: submission.formType,
      ip: clientIP,
      fillTime: submission.fillTime
    });

    // Проверяем rate limiting (максимум 5 отправок в час с одного IP)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const { data: recentSubmissions, error: rateLimitError } = await supabase
      .from('form_submissions_log')
      .select('id')
      .eq('ip_address', clientIP)
      .gte('created_at', oneHourAgo.toISOString());

    if (rateLimitError) {
      console.error('Rate limit check error:', rateLimitError);
    }

    if (recentSubmissions && recentSubmissions.length >= 5) {
      console.log('Rate limit exceeded for IP:', clientIP);
      return new Response(
        JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 429,
        }
      );
    }

    // Проверяем CSRF токен
    const { data: csrfTokenData, error: csrfError } = await supabase
      .from('csrf_tokens')
      .select('id, expires_at, used')
      .eq('token', submission.csrfToken)
      .single();

    if (csrfError || !csrfTokenData || csrfTokenData.used || 
        new Date(csrfTokenData.expires_at) < new Date()) {
      console.log('Invalid CSRF token for IP:', clientIP);
      return new Response(
        JSON.stringify({ error: 'Invalid or expired security token' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 403,
        }
      );
    }

    // Отмечаем токен как использованный
    await supabase
      .from('csrf_tokens')
      .update({ used: true })
      .eq('token', submission.csrfToken);

    // Анализируем подозрительность
    const suspiciousReasons: string[] = [];
    let isSuspicious = false;

    // Проверка honeypot
    if (submission.honeypot && submission.honeypot.trim() !== '') {
      suspiciousReasons.push('honeypot_filled');
      isSuspicious = true;
    }

    // Проверка времени заполнения (слишком быстро = бот)
    if (submission.fillTime < 5000) { // меньше 5 секунд
      suspiciousReasons.push('too_fast_submission');
      isSuspicious = true;
    }

    // Проверка слишком долгого заполнения (возможно покинул страницу)
    if (submission.fillTime > 30 * 60 * 1000) { // больше 30 минут
      suspiciousReasons.push('too_slow_submission');
    }

    // Простая проверка на спам в тексте
    const formDataStr = JSON.stringify(submission.formData).toLowerCase();
    const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations'];
    if (spamKeywords.some(keyword => formDataStr.includes(keyword))) {
      suspiciousReasons.push('spam_keywords');
      isSuspicious = true;
    }

    // MX валидация email на сервере
    if (submission.formData.email) {
      try {
        const emailDomain = submission.formData.email.split('@')[1];
        if (emailDomain) {
          // Простая проверка на часто используемые одноразовые email домены
          const disposableEmailDomains = [
            '10minutemail.com', 'tempmail.org', 'guerrillamail.com',
            'mailinator.com', 'throwaway.email'
          ];
          if (disposableEmailDomains.includes(emailDomain.toLowerCase())) {
            suspiciousReasons.push('disposable_email');
            isSuspicious = true;
          }
        }
      } catch (error) {
        console.error('Email validation error:', error);
      }
    }

    // Логируем отправку
    const { error: logError } = await supabase
      .from('form_submissions_log')
      .insert({
        ip_address: clientIP,
        user_agent: userAgent,
        form_type: submission.formType,
        submission_data: submission.formData,
        is_suspicious: isSuspicious,
        suspicious_reasons: suspiciousReasons
      });

    if (logError) {
      console.error('Error logging submission:', logError);
    }

    // Если подозрительно, не обрабатываем
    if (isSuspicious) {
      console.log('Suspicious submission detected:', suspiciousReasons);
      return new Response(
        JSON.stringify({ error: 'Submission rejected due to security concerns' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 422,
        }
      );
    }

    // Bitrix24 CRM integration
    const bitrix24Result = await createBitrix24Contact(submission.formData, submission.formType);
    
    console.log('Valid form submission processed:', submission.formType);
    if (bitrix24Result) {
      console.log('Bitrix24 integration successful:', {
        contactId: bitrix24Result.contact,
        leadId: bitrix24Result.lead
      });
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully',
        bitrix24Integrated: !!bitrix24Result
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error in submit-form function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});