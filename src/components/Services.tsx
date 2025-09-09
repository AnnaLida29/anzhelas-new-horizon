import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, TrendingUp, Sparkles, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: PenTool,
      title: "Тексты для лендингов",
      subtitle: "(длинных сайтов на одну страницу)",
      description: [
        "Увеличиваю конверсию сайта за счет грамотной структуры текста.",
        "Упрощаю сложные вещи, делая текст понятным и логичным."
      ]
    },
    {
      icon: TrendingUp,
      title: "SEO-оптимизированные статьи",
      description: [
        "Делаю статьи интересными и полезными для читателей.",
        "Увеличиваю время просмотра страницы."
      ]
    },
    {
      icon: Sparkles,
      title: "Посты и сценарии для соцсетей",
      description: [
        "Создаю вовлекающий контент, который получают лайки, репосты и комментарии.",
        "Подстраиваюсь под стиль и платформу вашей аудитории (Instagram, VK, Telegram и др.)."
      ]
    },
    {
      icon: Zap,
      title: "Коммерческие предложения",
      description: [
        "Создаю предложения, которые убеждают и закрывают сделки.",
        "Использую психологию продаж и выгодные формулировки."
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-elegant">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-20 h-20 bg-turquoise rounded-full animate-float" />
        <div className="absolute bottom-10 left-20 w-16 h-16 bg-gold rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-turquoise">Мои</span>{" "}
            <span className="text-gradient-gold">услуги</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Копирайтер с опытом в создании текстов, которые продают и привлекают
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover-lift border-0 bg-white/80 backdrop-blur-sm shadow-elegant hover:shadow-turquoise transition-all duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`relative w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 ${
                      index === 0 ? 'bg-gradient-to-br from-turquoise via-turquoise-dark to-gold animate-pulse' :
                      index === 1 ? 'bg-gradient-to-br from-gold via-turquoise to-turquoise-dark' :
                      index === 2 ? 'bg-gradient-to-br from-turquoise-dark via-gold to-turquoise' :
                      'bg-gradient-to-br from-gold via-turquoise-dark to-turquoise animate-pulse'
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.2}s`,
                      boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.2), 0 5px 20px rgba(0,0,0,0.1)'
                    }}>
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Icon with multiple animations */}
                      <IconComponent className={`h-10 w-10 text-white relative z-10 transition-all duration-300 ${
                        index === 0 ? 'group-hover:animate-bounce' :
                        index === 1 ? 'group-hover:scale-125' :
                        index === 2 ? 'group-hover:animate-spin' :
                        'group-hover:animate-pulse'
                      }`} />
                      
                      {/* Floating particles effect */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-turquoise rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                  {service.subtitle && (
                    <p className="text-sm text-muted-foreground italic">
                      {service.subtitle}
                    </p>
                  )}
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    {service.description.map((desc, idx) => (
                      <p key={idx} className="text-muted-foreground leading-relaxed">
                        {desc}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;