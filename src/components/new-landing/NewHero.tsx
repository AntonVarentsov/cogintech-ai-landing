import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewHero = () => {
  return <section className="py-8 sm:py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-background via-background to-cogintech-teal/5">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cogintech-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cogintech-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="px-3 py-1 bg-cogintech-teal/10 text-cogintech-teal text-sm font-medium rounded-full border border-cogintech-teal/20">
                  MVP · Ограниченное количество мест для ранних пользователей в этом квартале
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight lg:text-5xl text-cogintech-blue">
Удвойте продуктивность инженерной команды с помощью ИИ
              </h1>
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight lg:text-5xl text-cogintech-teal">
Пусть инженеры занимаются делом, </p>а не поиском
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cogintech-orange" 
                size="lg" 
                className="font-medium px-8 py-6"
                onClick={() => document.getElementById('book-demo')?.scrollIntoView({
                  behavior: 'smooth'
                })}
              >
                Запланировать демо
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>


          </div>
          
          <div className="space-y-2 lg:space-y-2">
            {/* Desktop version */}
            <div className="hidden lg:block relative aspect-[2/1] rounded-xl overflow-hidden bg-gradient-to-br from-background via-background to-cogintech-teal/5 border border-gray-200/50 shadow-sm" style={{ height: '300px', width: '650px' }}>
              <img src="/lovable-uploads/8779f590-9e4c-43b9-abf7-8e951aa8db60.png" alt="Хаос документов → Структурированная база данных → ИИ-ассистент" className="w-full h-full object-contain" style={{
                objectPosition: 'center',
                transform: 'scale(0.9)'
              }} />
            </div>
            <p className="hidden lg:block text-lg text-foreground/80 text-center">
              <span className="font-semibold">Превращаем разрозненные файлы (PDF, чертежи, Excel) в структурированную базу и даём ИИ-инструменты для поиска, анализа и выпусков клиентских отчётов.</span>
            </p>
          </div>
        </div>
        
        {/* Mobile version - full width */}
        <div className="lg:hidden mt-8 -mx-4">
          <div className="w-full h-64 bg-gradient-to-br from-background via-background to-cogintech-teal/5">
            <img src="/lovable-uploads/8779f590-9e4c-43b9-abf7-8e951aa8db60.png" alt="Хаос документов → Структурированная база данных → ИИ-ассистент" className="w-full h-full object-contain" style={{
              objectPosition: 'center',
              transform: 'scale(1.0)'
            }} />
          </div>
          <div className="px-4 sm:px-6 mt-4">
            <p className="text-lg text-foreground/80 text-center">
              <span className="font-semibold">Превращаем разрозненные файлы (PDF, чертежи, Excel) в структурированную базу и даём ИИ-инструменты для поиска, анализа и выпусков клиентских отчётов.</span>
            </p>
          </div>
        </div>
        
        {/* Benefits grid */}
        <div className="mt-8 sm:mt-20 space-y-2 sm:space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 -mx-1 sm:mx-0">
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl p-3 sm:p-4 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-xl sm:text-2xl font-bold text-cogintech-teal mb-1">в 10 раз быстрее</div>
              <div className="text-xs sm:text-sm font-medium text-foreground/70">поиск информации</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl p-3 sm:p-4 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-xl sm:text-2xl font-bold text-cogintech-orange mb-1">на 95% меньше</div>
              <div className="text-xs sm:text-sm font-medium text-foreground/70">ошибок</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl p-3 sm:p-4 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-xl sm:text-2xl font-bold text-cogintech-blue mb-1">без изменений</div>
              <div className="text-xs sm:text-sm font-medium text-foreground/70">в существующей инфраструктуре</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 -mx-1 sm:mx-0">
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl p-3 sm:p-4 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-xl sm:text-2xl font-bold text-cogintech-teal mb-1">нуль</div>
              <div className="text-xs sm:text-sm font-medium text-foreground/70">ручной подготовки данных</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl p-3 sm:p-4 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-xl sm:text-2xl font-bold text-cogintech-orange mb-1">на 30% меньше времени</div>
              <div className="text-xs sm:text-sm font-medium text-foreground/70">на повторяющиеся задачи</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl p-3 sm:p-4 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-xl sm:text-2xl font-bold text-cogintech-blue mb-1">обучение</div>
              <div className="text-xs sm:text-sm font-medium text-foreground/70">не требуется</div>
            </div>
          </div>
        </div>
      </div>

    </section>;
};
export default NewHero;