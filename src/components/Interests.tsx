import { Card, CardContent } from "@/components/ui/card";
import { Book, Music, Plane, Users, Heart, Lightbulb } from "lucide-react";

const Interests = () => {
  const interests = [
    {
      icon: Book,
      title: "Книги и психология",
      items: [
        "Харуки Мураками",
        "«Чёрный лебедь» Н. Талеба", 
        "Лекции Татьяны Черниговской",
        "Моргулан Сейсембай",
        "Ирина Хакамада"
      ],
      gradient: "from-turquoise/20 to-blue-400/20"
    },
    {
      icon: Music,
      title: "Музыкальные предпочтения",
      items: [
        "Джаз: Этта Джеймс",
        "Рок: Bon Jovi",
        "Поп: Гарри Стайлз",
        "K-pop: BTS",
        "Мечтаю на концерт Стинга или Леди Гаги"
      ],
      gradient: "from-gold/20 to-yellow-400/20"
    },
    {
      icon: Plane,
      title: "Путешествия",
      items: [
        "Побывала в Европе",
        "Изучила Скандинавию",
        "Планирую поездку в Азию",
        "Мечтаю посетить Японию",
        "Открыта новым культурам"
      ],
      gradient: "from-turquoise/20 to-teal-400/20"
    }
  ];

  const inspirationSources = [
    {
      icon: Lightbulb,
      name: "Татьяна Черниговская",
      field: "Нейролингвистика",
      description: "Лекции о работе мозга и сознания"
    },
    {
      icon: Users,
      name: "Моргулан Сейсембай",
      field: "Психология развития",
      description: "Методики личностного роста"
    },
    {
      icon: Heart,
      name: "Ирина Хакамада",
      field: "Бизнес-психология",
      description: "Философия успеха и самореализации"
    }
  ];

  return (
    <section id="interests" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Интересы и <span className="text-gradient-gold">вдохновение</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              То, что питает мой ум, душу и вдохновляет на новые свершения
            </p>
          </div>

          {/* Main interests grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {interests.map((category, index) => (
              <Card 
                key={index}
                className={`hover-lift border-0 shadow-elegant bg-gradient-to-br ${category.gradient} backdrop-blur-sm animate-scale-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-md">
                      <category.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="text-muted-foreground leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-turquoise before:font-bold"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Inspiration sources */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">
              Источники <span className="text-gradient-turquoise">вдохновения</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {inspirationSources.map((source, index) => (
                <Card 
                  key={index}
                  className="hover-lift border-0 shadow-elegant bg-gradient-to-br from-white to-gray-50 animate-fade-in-left"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-turquoise rounded-xl flex items-center justify-center">
                      <source.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{source.name}</h4>
                    <p className="text-turquoise font-medium mb-2">{source.field}</p>
                    <p className="text-sm text-muted-foreground">{source.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quote section */}
          <div className="text-center animate-fade-in">
            <Card className="max-w-3xl mx-auto border-0 shadow-elegant bg-gradient-to-r from-turquoise/10 to-gold/10">
              <CardContent className="p-8">
                <blockquote className="text-2xl font-light italic text-primary leading-relaxed">
                  "Чтение книг «на подумать» и изучение психологии помогают мне лучше понимать себя и мир вокруг. 
                  Музыка вдохновляет, а путешествия расширяют горизонты."
                </blockquote>
                <div className="mt-6 text-muted-foreground font-medium">— Анжела Крицкая</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;