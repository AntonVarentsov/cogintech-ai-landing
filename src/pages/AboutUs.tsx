
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="О Cogintech - ИИ для Целостности Оборудования в Нефтегазовой Отрасли | Cogintech"
        description="Cogintech революционизирует целостность оборудования в нефтегазовой отрасли с помощью ИИ. 95%+ точность в НК-анализе, 30% снижение затрат. Пионеры ИИ-инспекций с 2018 года."
        keywords="ИИ целостность оборудования, ИИ-инспекция нефть газ, автоматизация промышленного НК, ИИ управление оборудованием, компания Cogintech, ИИ решения нефть газ"
        ogTitle="О Cogintech - ИИ для Целостности Оборудования в Нефтегазовой Отрасли"
        ogDescription="Cogintech революционизирует целостность оборудования в нефтегазовой отрасли с помощью ИИ. 95%+ точность, 30% снижение затрат с 2018 года."
        ogImage="/lovable-uploads/22fc09d7-63fe-4527-885a-d78c38ec2e86.png"
      />
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-64 md:h-80 bg-gradient-to-r from-cogintech-blue to-cogintech-orange flex items-center">
          <div className="absolute inset-0">
            <img 
              src="/plant.png" 
              alt="Промышленный Завод" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">О Нас</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Пионеры будущего целостности промышленного оборудования через искусственный интеллект
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                Cognitive Industrial Technologies (Cogintech) — это пионерская компания, сосредоточенная на революционизации управления целостностью оборудования в нефтегазовой отрасли с помощью искусственного интеллекта.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Наша Миссия</h2>
              <p className="mb-6">
                Наша миссия — трансформировать то, как мониторится, анализируется и обслуживается промышленное оборудование. Мы стремимся снизить затраты, повысить безопасность и продлить срок службы активов благодаря интеллектуальным технологиям, основанным на данных.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Наше Видение</h2>
              <p className="mb-6">
                Мы представляем будущее, в котором промышленные операции станут более безопасными, эффективными и устойчивыми благодаря силе искусственного интеллекта и машинного обучения.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Наши Ценности</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Инновации</h3>
                  <p>Мы постоянно расширяем границы возможного в промышленных технологиях.</p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Надёжность</h3>
                  <p>Наши решения созданы для доверия в самых сложных промышленных условиях.</p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
                  <p>Мы ставим благополучие людей и окружающей среды на первое место во всём, что мы делаем.</p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Сотрудничество</h3>
                  <p>Мы тесно сотрудничаем с нашими клиентами, чтобы разрабатывать решения, которые соответствуют их специфическим потребностям.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
