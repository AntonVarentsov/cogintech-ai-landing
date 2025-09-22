import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, FileText, Shield, Calendar } from "lucide-react";

const AutomationTasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Создание и Управление Коррозионными Контурами",
      icon: Cog,
      timeSavings: "75-85%",
      whatWeAutomate: [
        "Устранение 90% времени на ручное извлечение и подготовку данных",
        "Автоматическое создание коррозионных контуров на основе ваших правил",
        "Автоматическое обнаружение и отметка выбросов",
        "Автоматическое построение трендов с доверительными интервалами"
      ],
      whatEngineersNo: "Проверка и принятие окончательных решений"
    },
    {
      id: 2,
      title: "Анализ и Интерпретация Отчётов о Контроле",
      icon: FileText,
      timeSavings: "60-70%",
      whatWeAutomate: [
        "Автоматическое извлечение 80-90% данных",
        "Автоматический анализ фотографий и обнаружение дефектов",
        "Автоматическое обнаружение и отметка аномалий",
        "Маркеры качества: Автоматическое обнаружение неполных/несогласованных данных"
      ],
      whatEngineersNo: "Принятие решений и сложные оценки"
    },
    {
      id: 3,
      title: "Подготовка Данных для Риск-Ориентированного Контроля",
      icon: Shield,
      timeSavings: "50-60%",
      whatWeAutomate: [
        "Автоматическое извлечение данных из множественных источников",
        "ИИ-извлечение из PDF/бумажных документов",
        "ИИ механизмов повреждения для первичного скрининга",
        "Автоматическая проверка согласованности и обнаружение пробелов"
      ],
      whatEngineersNo: "Применение инженерного суждения, сложная оценка механизмов повреждения"
    },
    {
      id: 4,
      title: "Подготовка и Планирование Контрольных Пакетов",
      icon: Calendar,
      timeSavings: "50-60%",
      whatWeAutomate: [
        "Компиляция чертежей – поиск актуальных P&ID, изометрических схем, чертежей оборудования",
        "История предыдущих ремонтов – изучение записей о техобслуживании для понимания истории модификаций",
        "Выбор методов контроля",
        "Распределение ресурсов – планирование бригад с учётом требований к квалификации"
      ],
      whatEngineersNo: "Проверка и принятие окончательных решений"
    }
  ];

  return (
    <section id="automation-tasks" className="py-20 bg-gradient-to-br from-background via-background to-cogintech-blue/5 border-t border-gray-200/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cogintech-blue to-cogintech-orange bg-clip-text text-transparent">
Типичные Инженерные Задачи, Которые Вы Можете Автоматизировать
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
Посмотрите, как CogInTech Integrity AI превращает трудоёмкую ручную обработку данных в автоматизированные рабочие процессы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tasks.map((task) => {
            const IconComponent = task.icon;
            return (
              <Card key={task.id} className="p-6 hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-cogintech-blue/10">
                    <IconComponent className="w-6 h-6 text-cogintech-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{task.title}</h3>
                    <Badge variant="secondary" className="bg-cogintech-orange/10 text-cogintech-orange border-cogintech-orange/20">
                      Экономия времени: {task.timeSavings}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Что Мы Автоматизируем:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {task.whatWeAutomate.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-cogintech-blue rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Что Делают Инженеры:</h4>
                    <p className="text-sm text-muted-foreground italic">{task.whatEngineersNo}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AutomationTasks;