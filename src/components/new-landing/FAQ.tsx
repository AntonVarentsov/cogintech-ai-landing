import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "Сколько времени занимает развёртывание?",
      answer: "Обычно развёртывание занимает 2-4 недели для облачных установок и 4-6 недель для локальных. Это включает миграцию данных, системную интеграцию и обучение команды."
    },
    {
      question: "Кто владеет данными и аналитикой?",
      answer: "Вы сохраняете полное право собственности на все ваши данные и аналитику. Мы предоставляем ИИ-платформу и инструменты, но все результаты и результаты анализа принадлежат вашей организации."
    },
    {
      question: "Какую поддержку вы предоставляете?",
      answer: "Все клиенты получают круглосуточную техническую поддержку, выделенного менеджера по успеху клиентов, ежеквартальные бизнес-обзоры и доступ к нашей инженерной команде для кастомных интеграций."
    },
    {
      question: "Можете ли вы интегрироваться с нашими существующими системами?",
      answer: "Да, наша платформа включает комплексные REST API и готовые коннекторы для распространённых систем, таких как SAP, Maximo и другие CMMS платформы. Кастомные интеграции включены во все планы."
    },
    {
      question: "Что включено в песочницу?",
      answer: "Песочница включает образцы данных о целостности, полный доступ к ИИ-инструментам анализа, функционал панели управления и возможности управления документами. Она работает только на чтение для защиты целостности образцов данных."
    },
    {
      question: "Как вы обеспечиваете безопасность данных?",
      answer: "Мы используем шифрование корпоративного уровня (AES-256), процессы соответствия SOC-2 и предлагаем гибкие варианты развёртывания, включая локальную установку для максимального контроля безопасности."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-background via-background to-cogintech-teal/5 border-t border-gray-200/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
Часто Задаваемые Вопросы
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
Общие вопросы от инженеров по целостности и лиц, принимающих IT-решения.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div id="demo-form" className="text-center mt-12">
          <p className="text-foreground/70 mb-4">Остались вопросы?</p>
          <Button 
            variant="cogintech-orange"
            size="lg"
            className="font-medium px-8 py-6"
            onClick={() => {
              document.getElementById('book-demo')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
Забронировать 15-минутный демо-звонок
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;