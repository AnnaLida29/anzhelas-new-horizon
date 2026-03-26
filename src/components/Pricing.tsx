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

        <div className="max-w-3xl mx-auto space-y-4">
          {pricingItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/90 shadow-elegant hover-lift transition-all duration-300 overflow-hidden"
            >
              <div className="flex items-center">
                {/* Service name */}
                <div className="flex-1 px-6 py-5">
                  <h3 className="text-base font-semibold text-foreground">{item.service}</h3>
                </div>
                {/* Ruble price */}
                <div className="flex flex-col items-center justify-center px-6 py-5 bg-gradient-to-b from-turquoise/10 to-turquoise/5 border-l border-border/30 w-[120px] shrink-0">
                  <Banknote className="h-4 w-4 text-turquoise mb-1" />
                  <span className="text-base font-bold text-foreground whitespace-nowrap">{item.rublePrice}</span>
                </div>
                {/* BYN price */}
                <div className="flex flex-col items-center justify-center px-6 py-5 bg-gradient-to-b from-gold/10 to-gold/5 border-l border-border/30 w-[100px] shrink-0">
                  <span className="text-xs font-bold text-gold mb-1">BYN</span>
                  <span className="text-base font-bold text-foreground whitespace-nowrap">{item.bynPrice}</span>
                </div>
              </div>
            </div>
          ))}

          <p className="text-center text-sm text-muted-foreground pt-2">
            💡 Итоговая стоимость зависит от сложности задачи. Свяжитесь для точного расчёта.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;