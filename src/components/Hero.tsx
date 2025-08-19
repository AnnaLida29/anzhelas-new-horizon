import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, MessageCircle, Phone } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-turquoise rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gold rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-turquoise rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-left">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Я <span className="text-gradient-turquoise">Анжела</span>
              <br />
              <span className="text-gradient-gold">Крицкая</span>
            </h1>
            <div className="text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">
              <p className="mb-2">Бухгалтер, инвестор, исследователь нейросетей.</p>
              <p className="text-turquoise font-medium">
                Учусь новому, чтобы жить свободно и достойно.
              </p>
            </div>
          </div>

          {/* Quick contact buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="default" 
              size="lg"
              className="bg-turquoise hover:bg-turquoise-dark text-white shadow-turquoise hover-lift"
              onClick={() => scrollToSection('contacts')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Связаться
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-gold-foreground hover-lift"
              onClick={() => scrollToSection('about')}
            >
              Узнать больше
            </Button>
          </div>

          {/* Social proof tags */}
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
              15+ лет в бухгалтерии
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
              Криптоинвестор
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
              Изучаю ИИ
            </span>
          </div>
        </div>

        {/* Photo */}
        <div className="relative animate-fade-in-right">
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-turquoise/20 to-gold/20 rounded-3xl transform rotate-3 scale-105" />
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-turquoise/20 rounded-3xl transform -rotate-3 scale-110" />
            
            {/* Main photo */}
            <div className="relative bg-white rounded-3xl p-2 shadow-elegant">
              <img
                src="/lovable-uploads/fd6c10f1-93de-488a-aee0-34bf8198dd07.png"
                alt="Анжела Крицкая - главный бухгалтер, инвестор, исследователь нейросетей"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-turquoise rounded-full flex items-center justify-center animate-glow">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center animate-float">
              <span className="text-gold-foreground font-bold text-lg">₿</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-turquoise transition-colors" />
      </div>
    </section>
  );
};

export default Hero;