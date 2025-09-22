import { Zap, Target, Clock, Shield } from "lucide-react";

const ValueMetrics = () => {
  const metrics = [
    {
      value: "10×",
      label: "БЫСТРЕЕ",
      subtitle: "в 10 раз Быстрее Поиск Информации",
      description: "Находите нужную информацию среди тысяч технических документов за секунды, а не часы.",
      icon: Zap
    },
    {
      value: "0%",
      label: "РУЧНОЙ РАБОТЫ",
      subtitle: "Никакого Времени на Подготовку Данных",
      description: "Забудьте о Ctrl-C и Ctrl-V. Наш ИИ автоматически извлекает и структурирует данные из ваших документов.",
      icon: Target
    },
    {
      value: "30%",
      label: "ЭКОНОМИЯ ВРЕМЕНИ",
      subtitle: "на 30% Меньше Времени на Повторяющиеся Задачи",
      description: "Автоматизируйте рутинные инженерные задачи и сосредоточьтесь на высокоценной работе, которая продвигает ваши проекты.",
      icon: Clock
    },
    {
      value: "95%",
      label: "МЕНЬШЕ ОШИБОК",
      subtitle: "на 95% Меньше Ошибок",
      description: "Автоматизированные процессы КК/КК обеспечивают высокую точность и исключают человеческие ошибки при обработке данных.",
      icon: Shield
    }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-background via-background to-cogintech-teal/5 border-t border-gray-200/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
Результаты, Которых Вы Можете Достичь с CogInTech
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
CogInTech Integrity AI обеспечивает измеримые улучшения продуктивности и точности инженерных команд
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-4">
               <div className="w-12 h-12 bg-cogintech-teal/20 rounded-lg flex items-center justify-center">
                 <metric.icon className="h-6 w-6 text-cogintech-teal" />
               </div>
             </div>
             <div className="text-4xl font-bold text-cogintech-blue mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-orange-500 mb-3 uppercase tracking-wide">
                {metric.label}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {metric.subtitle}
              </h3>
              <p className="text-sm text-foreground/70">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Benchmarks link */}
        <div className="text-center mt-8">
          <a href="#alternatives" className="text-sm text-cogintech-blue hover:text-cogintech-blue/80 underline">
Посмотрите, как мы рассчитываем эти показатели
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValueMetrics;