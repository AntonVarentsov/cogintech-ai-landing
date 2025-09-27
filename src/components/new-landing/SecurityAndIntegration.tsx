import { Shield, Users, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const SecurityAndIntegration = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100/80 border-t border-gray-200/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
Безопасность, конфиденциальность и IT (MVP)
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
Мы серьёзно относимся к защите данных. Ниже представлено, что доступно сегодня, что включено в пилотной версии и что планируется в нашей дорожной карте.
          </p>
        </div>

        {/* Now / Pilot / Next Structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Available Now */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-foreground">Доступно сейчас (MVP)</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Шифрование при передаче (TLS)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Безопасный облачный хостинг (управляемый провайдером)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Контроль доступа (на аккаунт), журналы активности (базовые)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Удаление данных по запросу</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Мы не обучаем базовые модели на ваших данных</span>
              </li>
            </ul>
          </div>

          {/* Available in Pilot */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-cogintech-teal/20 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Users className="w-6 h-6 text-cogintech-teal" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-foreground">Доступно в пилоте</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-teal rounded-full mt-2"></div>
                <span>Приватные проектные пространства и доступ на основе ролей (RBAC)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-teal rounded-full mt-2"></div>
                <span>Направляемая загрузка данных (без капитального ремонта IT)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-teal rounded-full mt-2"></div>
                <span>Опциональное СН и СОД перед любым обменом данными</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-teal rounded-full mt-2"></div>
                <span>Опция резидентности данных в ЕС (в зависимости от настройки пилота)</span>
              </li>
            </ul>
          </div>

          {/* Planned Next */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-cogintech-blue/20 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Server className="w-6 h-6 text-cogintech-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-foreground">Планируется дальше (дорожная карта)</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-blue rounded-full mt-2"></div>
                <span>SSO (SAML/OIDC) и детализированный RBAC</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-blue rounded-full mt-2"></div>
                <span>Аудиторские журналы и политики хранения</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-blue rounded-full mt-2"></div>
                <span>Опция развёртывания на локальных серверах / VPC</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-blue rounded-full mt-2"></div>
                <span>Коннекторы: SharePoint, SAP/Maximo, AVEVA, REST API</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Security Standards - Updated */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-bold mb-6 text-center text-foreground">Подход к каркасу безопасности</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-orange rounded-full mt-2"></div>
                <span>Разработано для соответствия практикам SOC 2 Type II</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-orange rounded-full mt-2"></div>
                <span>Соответствует контролям ISO/IEC 27001</span>
              </li>
            </ul>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-orange rounded-full mt-2"></div>
                <span>Готовые к GDPR функции обработки данных</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-orange rounded-full mt-2"></div>
                <span>Архитектура API-first для безопасных интеграций</span>
              </li>
            </ul>
          </div>
          <p className="text-sm text-foreground/60 italic mt-6 text-center">Планируемые сертификации в дорожной карте.</p>
        </div>

        {/* Mini-FAQ */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold mb-6 text-center text-foreground">Краткие вопросы о безопасности и IT</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Готово ли это к промышленному использованию?</h4>
                <p className="text-sm text-foreground/70">Мы находимся в стадии MVP с ограниченным количеством ранних пользователей. Начните с демо или песочницы; направляемый пилот занимает ~2 недели.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Можно ли тестировать без передачи конфиденциальных данных?</h4>
                <p className="text-sm text-foreground/70">Да. Используйте нашу песочницу с образцами данных. Для пилотов мы подписываем СН/СОД и изолируем ваше проектное пространство.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Храните ли вы наши данные или используете их для обучения моделей?</h4>
                <p className="text-sm text-foreground/70">Нет. Ваши данные остаются в вашем тенанте; мы не используем их для обучения базовых моделей.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Как насчёт локальных серверов или приватного облака?</h4>
                <p className="text-sm text-foreground/70">Планируется. Во время пилота мы оцениваем ограничения развёртывания и согласовываем путь (VPC / локальные серверы).</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Как работают интеграции?</h4>
                <p className="text-sm text-foreground/70">Подход API-first. Коннекторы SharePoint / SAP / Maximo / AVEVA находятся в дорожной карте; во время пилота мы обеспечиваем направляемый экспорт/импорт.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              size="lg"
              className="border-cogintech-blue text-cogintech-blue hover:bg-cogintech-blue/5 font-medium px-8 py-6"
              onClick={() => window.open('/security-note', '_blank')}
            >
Прочитать 1-страничную заметку о безопасности
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-cogintech-teal text-cogintech-teal hover:bg-cogintech-teal/5 font-medium px-8 py-6"
              onClick={() => document.getElementById('ask-question')?.scrollIntoView({ behavior: 'smooth' })}
            >
Задать вопрос о безопасности
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAndIntegration;