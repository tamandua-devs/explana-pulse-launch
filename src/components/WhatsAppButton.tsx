import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de conhecer mais sobre os serviços da Explana Geral e solicitar minha análise gratuita. 🚀"
  );
  
  const whatsappUrl = `https://wa.me/5511999999999?text=${whatsappMessage}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-float">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Button
            size="lg"
            className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-floating hover:shadow-vivid transition-all duration-300 hover:scale-110 animate-glow border-0 p-0"
            style={{
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3)'
            }}
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-brand-black text-brand-white px-4 py-2 rounded-xl whitespace-nowrap text-sm font-medium shadow-lg">
              Fale conosco no WhatsApp
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-brand-black" />
            </div>
          </div>
        </a>
      </div>

      {/* Pulse Effect */}
      <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
        <div className="w-16 h-16 rounded-full bg-green-500/30 animate-ping" />
      </div>

      {/* Mobile CTA Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-gradient-to-r from-brand-red to-brand-red-vivid p-4 shadow-floating">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button
            size="lg"
            className="w-full bg-brand-white text-brand-red hover:bg-brand-white/90 font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <MessageCircle className="mr-3 w-6 h-6" />
            Análise Gratuita via WhatsApp
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;