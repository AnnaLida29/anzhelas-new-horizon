import { Card, CardContent } from "@/components/ui/card";
import { Target, GraduationCap, Plane } from "lucide-react";

const Plans = () => {
  return (
    <section id="plans" className="section-padding bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Мои <span className="text-gradient-gold">планы</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Working photo */}
            <div className="relative animate-fade-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-turquoise/20 rounded-2xl transform -rotate-2 scale-105" />
                <div className="relative bg-white rounded-2xl p-2 shadow-elegant">
                  <img
                    src="/lovable-uploads/b12681d8-3e16-4591-8b05-dd3c6cfa9d68.png"
                    alt="Анжела Крицкая за работой"
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Plans content */}
            <div className="space-y-8 animate-fade-in-right">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-turquoise shadow-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Изучение нейросетей</h3>
                    <p className="text-muted-foreground">Освоение AI-инструментов для создания новых источников дохода</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-gold shadow-lg">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Финансовая свобода</h3>
                    <p className="text-muted-foreground">Переход к независимой деятельности и достойному уровню жизни</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-turquoise shadow-lg">
                    <Plane className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Путешествия в Азию</h3>
                    <p className="text-muted-foreground">Исследование новых культур, особенно мечтаю посетить Японию</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <Card className="border-0 shadow-elegant bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4 text-center">Ближайшие цели</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Освоить AI-инструменты</span>
                      <span className="text-xs text-turquoise font-medium">2024</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Создать первые AI-проекты</span>
                      <span className="text-xs text-gold font-medium">2025</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Достичь финансовой свободы</span>
                      <span className="text-xs text-turquoise font-medium">2026-2027</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;