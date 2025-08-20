import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Brain, TrendingUp, Book, Music, Plane } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Обо <span className="text-gradient-turquoise">мне</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text content */}
            <div className="space-y-6 animate-fade-in-left">
              <p className="text-lg leading-relaxed">
                Переосмысливаю карьеру и ищу новые пути развития. Имея богатый опыт главного бухгалтера, 
                сейчас активно изучаю <span className="text-turquoise font-semibold">нейросети и ИИ-технологии</span>.
              </p>
              
              <p className="text-lg leading-relaxed">
                Инвестирую в <span className="text-gold font-semibold">криптовалюту</span>, особенно верю в будущее Bitcoin. 
                Стремлюсь найти новые источники заработка для достижения финансовой свободы.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Calculator className="h-5 w-5 text-turquoise" />
                  <span className="text-sm">15+ лет в бухгалтерии</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="h-5 w-5 text-gold" />
                  <span className="text-sm">Изучаю нейросети</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-turquoise" />
                  <span className="text-sm">Криптоинвестор</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Book className="h-5 w-5 text-gold" />
                  <span className="text-sm">Психология, книги</span>
                </div>
              </div>
            </div>

            {/* Office photo */}
            <div className="relative animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-turquoise/20 to-gold/20 rounded-2xl transform rotate-2 scale-105" />
                <div className="relative bg-white rounded-2xl p-2 shadow-elegant">
                  <img
                    src="/lovable-uploads/ade02222-d1e8-4e35-ba40-96789a206263.png"
                    alt="Анжела Крицкая в офисе"
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Interests row */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-lift border-0 shadow-elegant bg-gradient-to-br from-turquoise/10 to-turquoise/5">
              <CardContent className="p-6 text-center">
                <Music className="h-8 w-8 mx-auto mb-4 text-turquoise" />
                <h3 className="font-semibold mb-2">Музыка</h3>
                <p className="text-sm text-muted-foreground">Джаз, рок, k-pop</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border-0 shadow-elegant bg-gradient-to-br from-gold/10 to-gold/5">
              <CardContent className="p-6 text-center">
                <Book className="h-8 w-8 mx-auto mb-4 text-gold" />
                <h3 className="font-semibold mb-2">Книги</h3>
                <p className="text-sm text-muted-foreground">Мураками, психология</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border-0 shadow-elegant bg-gradient-to-br from-turquoise/10 to-turquoise/5">
              <CardContent className="p-6 text-center">
                <Plane className="h-8 w-8 mx-auto mb-4 text-turquoise" />
                <h3 className="font-semibold mb-2">Путешествия</h3>
                <p className="text-sm text-muted-foreground">Европа, планирую Азию</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;