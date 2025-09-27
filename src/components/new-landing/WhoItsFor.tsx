import { Building, Users, Server } from "lucide-react";

const WhoItsFor = () => {
  const audiences = [
    {
      icon: Building,
      title: "Владельцы сервисных компаний",
      benefit: "Увеличение маржи",
      description: "Стандартизируйте результаты и сокращайте накладные расходы по проектам с помощью ИИ-отчётности."
    },
    {
      icon: Users,
      title: "Руководители инженерных отделов",
      benefit: "Ускорение поставки",
      description: "Сократите время подготовки отчётов, автоматизируя рабочие процессы извлечения данных и анализа."
    },
    {
      icon: Server,
      title: "IT и цифровая трансформация",
      benefit: "Стандартизация качества",
      description: "Внедряйте ИИ-инструменты без нарушения существующих систем или компрометации безопасности данных."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100/80 border-t border-gray-200/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
Создано для команд инженерных услуг
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
Независимо от того, управляете ли вы проектами, руководите командами или занимаетесь инфраструктурой — 
            получите инструменты, необходимые для достижения лучших результатов быстрее.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-200/50">
                <div className="w-16 h-16 bg-cogintech-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-cogintech-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{audience.title}</h3>
                <div className="text-lg font-semibold text-cogintech-orange mb-3">{audience.benefit}</div>
                <p className="text-foreground/70">{audience.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;