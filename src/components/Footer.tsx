import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-10 w-24 h-24 bg-turquoise rounded-full" />
        <div className="absolute bottom-4 right-10 w-16 h-16 bg-gold rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-turquoise rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* About section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-turquoise-light">Анжела</span> Крицкая
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Бухгалтер с опытом, изучающая нейросети и инвестирующая в будущее. 
              Стремлюсь к свободе и новым возможностям.
            </p>
            <div className="flex space-x-4">
              <span className="px-3 py-1 bg-turquoise/20 rounded-full text-sm text-turquoise-light">
                AI-энтузиаст
              </span>
              <span className="px-3 py-1 bg-gold/20 rounded-full text-sm text-yellow-300">
                Крипто-инвестор
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-turquoise-light">Быстрая навигация</h4>
            <div className="space-y-2">
              {[
                { label: 'Обо мне', id: 'about' },
                { label: 'Интересы', id: 'interests' },
                { label: 'Планы', id: 'plans' },
                { label: 'Контакты', id: 'contacts' }
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-300 hover:text-turquoise-light transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-300">Связаться со мной</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Предпочитаю Telegram для быстрого общения</p>
              <p className="text-gray-300">Email для деловых предложений</p>
              <p className="text-gray-300">Обычно отвечаю в течение 2-4 часов</p>
            </div>
            
            {/* Back to top button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="mt-6 border-turquoise-light text-turquoise-light hover:bg-turquoise-light hover:text-primary"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Наверх
            </Button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span>© {currentYear} Анжела Крицкая. Создано с</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>и верой в будущее технологий</span>
            </div>
            
            <div className="text-sm text-gray-400">
              <span>Верю в Bitcoin и силу знаний</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;