import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, Send, MapPin, Clock } from "lucide-react";

const Contacts = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Telegram",
      subtitle: "Предпочтительный способ связи",
      description: "Быстрые сообщения и обмен файлами",
      action: "Написать в Telegram",
      href: "https://t.me/your_telegram", // Replace with actual telegram
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      buttonClass: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      subtitle: "Для голосовых сообщений",
      description: "Удобно для быстрого общения",
      action: "Открыть WhatsApp",
      href: "https://wa.me/your_number", // Replace with actual WhatsApp
      color: "bg-gradient-to-br from-green-500 to-green-600",
      buttonClass: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      subtitle: "Для деловой переписки",
      description: "Подробные предложения и документы",
      action: "Написать email",
      href: "mailto:angela.kritskaya@example.com", // Replace with actual email
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      buttonClass: "bg-purple-500 hover:bg-purple-600"
    }
  ];

  const availabilityInfo = [
    {
      icon: Clock,
      title: "Рабочие часы",
      info: "Пн-Пт: 9:00 - 18:00 (MSK)"
    },
    {
      icon: MapPin,
      title: "Локация",
      info: "Москва, Россия"
    },
    {
      icon: Send,
      title: "Ответ",
      info: "Обычно отвечаю в течение 2-4 часов"
    }
  ];

  return (
    <section id="contacts" className="section-padding bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient-turquoise">Контакты</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Готова обсудить сотрудничество, поделиться опытом или просто пообщаться о технологиях и будущем
            </p>
          </div>

          {/* Contact methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="hover-lift border-0 shadow-elegant bg-white/90 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${method.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-turquoise font-medium mb-2">{method.subtitle}</p>
                  <p className="text-sm text-muted-foreground mb-6">{method.description}</p>
                  
                  <Button 
                    className={`w-full ${method.buttonClass} text-white shadow-lg hover-lift`}
                    onClick={() => window.open(method.href, '_blank')}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Availability info */}
          <Card className="border-0 shadow-elegant bg-white/90 backdrop-blur-sm mb-12 animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Информация о доступности</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {availabilityInfo.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-turquoise rounded-xl flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.info}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to action */}
          <div className="text-center animate-fade-in">
            <Card className="border-0 shadow-elegant bg-gradient-to-r from-turquoise/20 to-gold/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4">
                  Давайте <span className="text-gradient-gold">сотрудничать!</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Интересны проекты в области финансов, технологий и образования. 
                  Открыта для консультаций по бухгалтерии, обсуждения инвестиций в криптовалюту и изучения ИИ-решений.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg"
                    className="bg-turquoise hover:bg-turquoise-dark text-white shadow-turquoise hover-lift"
                    onClick={() => window.open('https://t.me/your_telegram', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Написать сейчас
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-gold-foreground hover-lift"
                    onClick={() => window.open('mailto:angela.kritskaya@example.com', '_blank')}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Отправить email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;