import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Brain, TrendingUp, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Calculator,
      title: "Опытный бухгалтер",
      description: "15+ лет в области бухгалтерского учета и финансов",
      color: "text-turquoise"
    },
    {
      icon: Brain,
      title: "Изучаю нейросети",
      description: "Активно осваиваю технологии искусственного интеллекта",
      color: "text-gold"
    },
    {
      icon: TrendingUp,
      title: "Криптоинвестор",
      description: "Верю в будущее Bitcoin и блокчейн-технологий",
      color: "text-turquoise"
    },
    {
      icon: Target,
      title: "Стремлюсь к свободе",
      description: "Планирую уйти из найма для сохранения здоровья и достойной жизни",
      color: "text-gold"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Обо <span className="text-gradient-turquoise">мне</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Профессиональный путь от традиционной бухгалтерии к изучению современных технологий
            </p>
          </div>

          {/* Main story */}
          <div className="mb-16 animate-fade-in">
            <Card className="glass-effect border-0 shadow-elegant">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Нахожусь на интересном этапе жизни — переосмысливаю карьеру и ищу новые пути развития. 
                    Имея богатый опыт работы главным бухгалтером, сейчас активно изучаю <span className="text-turquoise font-semibold">нейросети и технологии искусственного интеллекта</span>.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Параллельно инвестирую в <span className="text-gold font-semibold">криптовалюту</span>, особенно верю в будущее Bitcoin. 
                    Для меня это не просто инвестиции, а способ подготовиться к изменяющемуся миру финансов.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Моя главная цель — найти новые источники заработка, чтобы в будущем уйти из найма. 
                    Хочу сохранить достойный уровень жизни, здоровье и обрести больше свободы для реализации своих планов.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="hover-lift border-0 shadow-elegant bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-md`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;