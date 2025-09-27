import React from "react";
import { Upload, Brain, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 via-cogintech-light/10 to-gray-100/60 border-t border-gray-200/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
Как это работает?
          </h2>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto">
От сырых проектных данных до готовых отчётов для клиентов за рекордное время
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-card/50 backdrop-blur-sm border border-cogintech-blue/20 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-br from-cogintech-blue to-cogintech-blue/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cogintech-teal rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Загрузка и подключение</h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Разместите все файлы проекта (PDF, Excel, чертежи) в одном безопасном месте. Без перестройки ИТ-ландшафта.
              </p>
            </div>
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <ArrowRight className="w-8 h-8 text-cogintech-teal" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-card/50 backdrop-blur-sm border border-cogintech-teal/20 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-br from-cogintech-blue to-cogintech-blue/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cogintech-teal rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">ИИ упорядочивает и анализирует</h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Автоклассификация, извлечение сущностей, связывание и подготовка к использованию.
              </p>
            </div>
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <ArrowRight className="w-8 h-8 text-cogintech-teal" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="bg-card/50 backdrop-blur-sm border border-cogintech-blue/20 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-br from-cogintech-blue to-cogintech-blue/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cogintech-teal rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Поиск, вопросы и отчёты</h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Быстрый поиск документов. Ответы на понятном языке. Отчёты одним кликом.
              </p>
            </div>
          </div>
        </div>

        {/* Video Demo Section */}
        <div className="bg-gradient-to-br from-cogintech-blue/10 to-cogintech-teal/10 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Посмотрите в действии</h3>
            <p className="text-lg text-foreground/70">
              Посмотрите, как ваша команда может превращать сложные файлы в готовые отчёты
            </p>
          </div>
          
            <div className="relative max-w-4xl mx-auto">
            <video 
              className="w-full h-auto rounded-xl shadow-lg"
              controls
              preload="metadata"
              poster="/lovable-uploads/dashboard.png"
            >
              <source src="/lovable-uploads/AI_assistant.mp4" type="video/mp4" />
Ваш браузер не поддерживает видео.
            </video>
            <p className="text-center text-sm text-foreground/60 mt-4">2-минутная экскурсия по продукту (звук не требуется)</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            variant="cogintech-teal"
            size="lg"
            className="px-12 py-4 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            onClick={() => {
              const element = document.getElementById('book-demo');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Запланировать демо →
          </Button>
          <p className="text-sm text-foreground/60 mt-2 mb-2">
Настройка не требуется • Образцы данных включены
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;