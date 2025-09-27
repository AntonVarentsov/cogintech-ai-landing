import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSecureForm } from "@/hooks/useSecureForm";
import { useEmailValidation } from "@/hooks/useEmailValidation";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const BookDemo = () => {
  const { toast } = useToast();
  const { validateEmail } = useEmailValidation();
  const { csrfToken, isSubmitting, honeypot, setHoneypot, submitForm } = useSecureForm({ formType: 'contact' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: ''
  });
  
  const [agreements, setAgreements] = useState({
    privacyPolicy: false,
    termsOfService: false
  });
  
  const [emailValidation, setEmailValidation] = useState<{isValid: boolean, error?: string}>({ isValid: true });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Валидация email в реальном времени
    if (name === 'email' && value) {
      const validation = await validateEmail(value);
      setEmailValidation(validation);
    } else if (name === 'email' && !value) {
      setEmailValidation({ isValid: true });
    }
  };
  
  const handleAgreementChange = (field: 'privacyPolicy' | 'termsOfService') => (checked: boolean) => {
    setAgreements(prev => ({
      ...prev,
      [field]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Проверяем валидность email перед отправкой
    if (!emailValidation.isValid) {
      toast({
        title: "Invalid Email",
        description: emailValidation.error || "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    const success = await submitForm(formData);
    
    if (success) {
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        role: ''
      });
      
      // Reset agreements
      setAgreements({
        privacyPolicy: false,
        termsOfService: false
      });
      setEmailValidation({ isValid: true });
    }
  };
  
  const isFormValid = agreements.privacyPolicy && agreements.termsOfService;

  return (
    <section id="book-demo" className="py-16 bg-cogintech-dark">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
Забронировать 15-минутное демо
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
Посмотрите, как Cogintech может трансформировать ваш процесс инспекции всего за 15 минут
            </p>
          </div>
          
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl text-white">Запланируйте ваше демо</CardTitle>
              <CardDescription className="text-white/70">
                Получите персонализированную демонстрацию нашей ИИ-платформы анализа
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field - скрытое поле для защиты от ботов */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
                  <label htmlFor="website-demo">Веб-сайт (не заполняйте это поле)</label>
                  <input
                    type="text"
                    id="website-demo"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="demo-name" className="text-white">
Полное имя <span className="text-red-400">*</span>
                    </Label>
                    <Input 
                      id="demo-name" 
                      name="name"
                      type="text" 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-cogintech-teal"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="demo-email" className="text-white">
Рабочий email <span className="text-red-400">*</span>
                    </Label>
                    <Input 
                      id="demo-email" 
                      name="email"
                      type="email" 
                      placeholder="ваш.email@компания.ru"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-cogintech-teal ${
                        !emailValidation.isValid ? 'border-red-500' : ''
                      }`}
                    />
                    {!emailValidation.isValid && emailValidation.error && (
                      <p className="text-red-400 text-sm">{emailValidation.error}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="demo-company" className="text-white">Название компании</Label>
                    <Input 
                      id="demo-company" 
                      name="company"
                      type="text" 
                      placeholder="Ваша компания"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-cogintech-teal"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="demo-role" className="text-white">Ваша должность</Label>
                    <Input 
                      id="demo-role" 
                      name="role"
                      type="text" 
                      placeholder="напр., Инженер по целостности"
                      value={formData.role}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-cogintech-teal"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="privacy-policy-demo"
                      checked={agreements.privacyPolicy}
                      onCheckedChange={handleAgreementChange('privacyPolicy')}
                      className="mt-1"
                    />
                    <label htmlFor="privacy-policy-demo" className="text-sm text-white/80 leading-relaxed">
                      Я соглашаюсь с{' '}
                      <Link 
                        to="/privacy-policy" 
                        className="text-cogintech-teal hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Политикой конфиденциальности
                      </Link>
                    </label>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="terms-of-service-demo"
                      checked={agreements.termsOfService}
                      onCheckedChange={handleAgreementChange('termsOfService')}
                      className="mt-1"
                    />
                    <label htmlFor="terms-of-service-demo" className="text-sm text-white/80 leading-relaxed">
                      Я соглашаюсь с{' '}
                      <Link 
                        to="/terms-of-service" 
                        className="text-cogintech-teal hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Условиями обслуживания
                      </Link>
                    </label>
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-cogintech-orange hover:bg-cogintech-orange/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting || !isFormValid || !emailValidation.isValid || !csrfToken}
                >
                  {isSubmitting ? "Бронирование демо..." : "Забронировать 15-минутное демо"}
                </Button>
                
                {/* CSRF токен (скрытое поле) */}
                <input type="hidden" name="csrf_token" value={csrfToken} />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;