import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Plane, Target, ArrowRight } from "lucide-react";

const Plans = () => {
  const shortTermPlans = [
    {
      icon: GraduationCap,
      title: "Углубленное изучение нейросетей",
      description: "Освоение современных AI-инструментов, изучение машинного обучения и практическое применение в работе",
      timeline: "Ближайшие 6-12 месяцев",
      color: "turquoise"
    },
    {
      icon: Briefcase,
      title: "Поиск новых источников дохода",
      description: "Применение знаний в области AI для создания дополнительных источников заработка",
      timeline: "В течение года",
      color: "gold"
    }
  ];

  const longTermPlans = [
    {
      icon: Target,
      title: "Переход к свободной деятельности",
      description: "Уход из найма для сохранения здоровья и достижения финансовой независимости",
      timeline: "2-3 года",
      color: "turquoise"
    },
    {
      icon: Plane,
      title: "Путешествия в Азию и Японию",
      description: "Исследование новых культур, изучение азиатского подхода к технологиям и жизни",
      timeline: "Ближайшие 2-5 лет",
      color: "gold"
    }
  ];

  const milestones = [
    { year: "2024", goal: "Освоить базовые AI-инструменты", status: "В процессе" },
    { year: "2025", goal: "Создать первые проекты с ИИ", status: "Планируется" },
    { year: "2026", goal: "Достичь финансовой стабильности", status: "Цель" },
    { year: "2027", goal: "Полная финансовая свобода", status: "Мечта" }
  ];

  return (
    <section id="plans" className="section-padding bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Мои <span className="text-gradient-turquoise">планы</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Стратегический путь к свободе, новым знаниям и возможностям
            </p>
          </div>

          {/* Near-term plans */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">
              <span className="text-gradient-gold">Ближайшие планы</span>
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {shortTermPlans.map((plan, index) => (
                <Card 
                  key={index}
                  className="hover-lift border-0 shadow-elegant bg-white/90 backdrop-blur-sm animate-fade-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className={`p-4 rounded-2xl ${plan.color === 'turquoise' ? 'bg-gradient-turquoise' : 'bg-gradient-gold'} shadow-lg`}>
                        <plan.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold mb-3">{plan.title}</h4>
                        <p className="text-muted-foreground leading-relaxed mb-4">{plan.description}</p>
                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                          plan.color === 'turquoise' ? 'bg-turquoise/10 text-turquoise' : 'bg-gold/10 text-gold'
                        }`}>
                          <span>{plan.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Long-term vision */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">
              <span className="text-gradient-turquoise">Долгосрочная перспектива</span>
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {longTermPlans.map((plan, index) => (
                <Card 
                  key={index}
                  className="hover-lift border-0 shadow-elegant bg-white/90 backdrop-blur-sm animate-fade-in-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className={`p-4 rounded-2xl ${plan.color === 'turquoise' ? 'bg-gradient-turquoise' : 'bg-gradient-gold'} shadow-lg`}>
                        <plan.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold mb-3">{plan.title}</h4>
                        <p className="text-muted-foreground leading-relaxed mb-4">{plan.description}</p>
                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                          plan.color === 'turquoise' ? 'bg-turquoise/10 text-turquoise' : 'bg-gold/10 text-gold'
                        }`}>
                          <span>{plan.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline milestones */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-center mb-12">
              Дорожная <span className="text-gradient-gold">карта</span>
            </h3>
            
            <Card className="border-0 shadow-elegant bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-6 group hover:bg-gray-50/50 rounded-xl p-4 transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-turquoise to-gold rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {milestone.year}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-1">{milestone.goal}</h4>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          milestone.status === 'В процессе' ? 'bg-turquoise/10 text-turquoise' :
                          milestone.status === 'Планируется' ? 'bg-gold/10 text-gold' :
                          milestone.status === 'Цель' ? 'bg-blue-500/10 text-blue-600' :
                          'bg-purple-500/10 text-purple-600'
                        }`}>
                          {milestone.status}
                        </div>
                      </div>
                      
                      {index < milestones.length - 1 && (
                        <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-turquoise transition-colors" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Motivational quote */}
          <div className="text-center mt-16 animate-fade-in">
            <Card className="max-w-4xl mx-auto border-0 shadow-elegant bg-gradient-to-r from-turquoise/10 to-gold/10">
              <CardContent className="p-8">
                <blockquote className="text-2xl font-light italic text-primary leading-relaxed mb-4">
                  "Возраст — это не препятствие для изучения нового. В 50+ я открываю для себя мир технологий и планирую будущее, 
                  которое даст мне свободу и возможность жить так, как я хочу."
                </blockquote>
                <div className="text-muted-foreground font-medium">— Моя философия развития</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;