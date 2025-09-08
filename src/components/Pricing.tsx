import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote } from "lucide-react";

const Pricing = () => {
  const pricingItems = [
    {
      service: "СЕО статья (до 3000 знаков)",
      rublePrice: "от 600 ₽",
      bynPrice: "21 б.р."
    },
    {
      service: "Одностраничный сайт",
      rublePrice: "от 9400 ₽", 
      bynPrice: "340 б.р."
    },
    {
      service: "Разработка коммерческого предложения",
      rublePrice: "от 9400 ₽",
      bynPrice: "340 б.р."
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 w-24 h-24 bg-gold rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-16 right-16 w-16 h-16 bg-turquoise rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Мои</span>{" "}
            <span className="text-gradient-turquoise">цены</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Прозрачное ценообразование для качественных текстов
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-elegant">
            <CardHeader className="text-center border-b border-border/50">
              <CardTitle className="text-2xl font-bold text-foreground">
                Стоимость услуг
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {pricingItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-xl bg-gradient-to-r from-background to-secondary/30 hover:from-turquoise-light/10 hover:to-gold/10 transition-all duration-300 hover-lift"
                  >
                    <div className="flex-1 mb-3 sm:mb-0">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {item.service}
                      </h3>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                      <div className="flex items-center gap-2 text-lg font-bold">
                        <div className="w-8 h-8 bg-gradient-to-br from-turquoise to-turquoise-dark rounded-lg flex items-center justify-center">
                          <Banknote className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-foreground">{item.rublePrice}</span>
                      </div>
                      <div className="flex items-center gap-2 text-lg font-bold">
                        <div className="w-8 h-8 bg-gradient-to-br from-gold to-yellow-600 rounded-lg flex items-center justify-center">
                          <span className="text-gold-foreground text-xs font-bold">BYN</span>
                        </div>
                        <span className="text-foreground">{item.bynPrice}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-turquoise/10 to-gold/10 rounded-xl border border-turquoise/20">
                <p className="text-center text-muted-foreground">
                  💡 Итоговая стоимость зависит от сложности задачи и объема работы. 
                  Свяжитесь со мной для точного расчета!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;