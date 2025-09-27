import { Search, Timer, Target, Copy } from "lucide-react";

const PainAmplifier = () => {
  const painPoints = [
    {
      icon: Search,
      title: "Бесконечный поиск документов",
      description: "Инженеры тратят до 30% своего времени на поиск по PDF, таблицам и папкам."
    },
    {
      icon: Timer,
      title: "Долгая подготовка отчетов",
      description: "Отчёты готовятся неделями, что замедляет принятие важных решений."
    },
    {
      icon: Target,
      title: "Нестабильное качество",
      description: "Разнородная документация мешает гарантировать единый стандарт качества и соответствие требованиям."
    },
    {
      icon: Copy,
      title: "Ручная обработка данных",
      description: "Копирование между системами и ручная подготовка данных поглощают часы ценного инженерного времени."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100/80 border-t border-gray-200/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
Почему инженерные команды теряют время и эффективность
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
Четыре критических пробела съедают продуктивность вашей инженерной команды
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-cogintech-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <point.icon className="h-8 w-8 text-cogintech-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-foreground/70">{point.description}</p>
            </div>
          ))}
        </div>
        
        {/* Pull quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-lg italic text-foreground/60">
"Мы тратим часы просто на поиск старых отчётов."
            <footer className="mt-2 text-sm text-foreground/50">— Владелец сервисной компании</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default PainAmplifier;