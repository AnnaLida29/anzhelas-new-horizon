import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, Send, MapPin, Clock } from "lucide-react";
const Contacts = () => {
  const contactMethods = [{
    icon: MessageCircle,
    title: "Telegram",
    description: "Предпочтительный способ связи",
    action: "Написать в Telegram",
    href: "https://t.me/your_telegram",
    // Replace with actual telegram
    buttonClass: "bg-blue-500 hover:bg-blue-600"
  }, {
    icon: Phone,
    title: "WhatsApp",
    description: "Для голосовых сообщений",
    action: "Открыть WhatsApp",
    href: "https://wa.me/your_number",
    // Replace with actual WhatsApp
    buttonClass: "bg-green-500 hover:bg-green-600"
  }, {
    icon: Mail,
    title: "Email",
    description: "Для деловой переписки",
    action: "Написать email",
    href: "mailto:angela.kritskaya@example.com",
    // Replace with actual email
    buttonClass: "bg-purple-500 hover:bg-purple-600"
  }];
  const availabilityInfo = [{
    icon: Clock,
    title: "Рабочие часы",
    info: "Пн-Пт: 9:00 - 18:00 (MSK)"
  }, {
    icon: MapPin,
    title: "Локация",
    info: "Москва, Россия"
  }, {
    icon: Send,
    title: "Ответ",
    info: "Обычно отвечаю в течение 2-4 часов"
  }];
  return <section id="contacts" className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient-turquoise">Контакты</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Готова обсудить сотрудничество и новые возможности
            </p>
          </div>

          {/* Contact methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactMethods.map((method, index) => <Card key={index} className="hover-lift border-0 shadow-elegant bg-white/90 backdrop-blur-sm animate-scale-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-turquoise rounded-xl flex items-center justify-center">
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  
                  <Button className={`w-full ${method.buttonClass} text-white shadow-lg hover-lift`} onClick={() => window.open(method.href, '_blank')}>
                    {method.action}
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          {/* Call to action */}
          <div className="text-center animate-fade-in">
            <Card className="border-0 shadow-elegant bg-gradient-to-r from-turquoise/20 to-gold/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Давайте <span className="text-gradient-gold">сотрудничать!</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">Открыта для обсуждения инвестиций и изучения ИИ-решений</p>
                
                <Button size="lg" className="bg-turquoise hover:bg-turquoise-dark text-white shadow-turquoise hover-lift" onClick={() => window.open('https://t.me/your_telegram', '_blank')}>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Написать сейчас
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contacts;