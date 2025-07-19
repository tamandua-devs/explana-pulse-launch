import { Instagram, Phone, MapPin, Heart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-brand-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-brand-red-vivid/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-3xl font-black text-brand-white mb-4">
                <span className="gradient-text">Explana</span> Geral
              </h3>
              <p className="text-brand-white/80 text-lg leading-relaxed max-w-md">
                Democratizamos o marketing digital para pequenos negócios com soluções 
                completas, acessíveis e de alto impacto visual.
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="glass-strong p-3 rounded-xl text-brand-white hover:text-brand-red hover:scale-110 transition-all duration-300 group flex items-center justify-center"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/5521994798107"
                className="glass-strong p-3 rounded-xl text-brand-white hover:text-brand-red hover:scale-110 transition-all duration-300 group flex items-center justify-center"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-brand-white mb-6">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Produção Audiovisual",
                "Gestão de Redes Sociais",
                "Análise e Otimização",
                "Suporte Ágil",
                "Impulsionamento Gratuito",
                "Transformação Digital"
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-brand-white/70 hover:text-brand-red transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-brand-white mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-red mt-1 shrink-0" />
                <div>
                  <a
                    href="tel:+5511999999999"
                    className="text-brand-white/70 hover:text-brand-red transition-colors duration-300 text-sm"
                  >
                    (21) 99479-8107
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-red mt-1 shrink-0" />
                <div>
                  <a
                    href="https://wa.me/5521994798107"
                    className="text-brand-white/70 hover:text-brand-red transition-colors duration-300 text-sm"
                  >
                    (11) 99479-8107
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red mt-1 shrink-0" />
                <div>
                  <p className="text-brand-white/70 text-sm">
                    São Paulo, SP<br />
                    Atendimento em todo Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-brand-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-brand-white/60 text-sm">
              <p>&copy; 2024 Explana Geral. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-brand-red transition-colors duration-300">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-brand-red transition-colors duration-300">
                  Termos de Uso
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-brand-white/60 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-brand-red fill-current animate-pulse" />
              <span>para transformar seu negócio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom mobile spacing for WhatsApp button */}
      <div className="h-20 md:hidden" />
    </footer>
  );
};

export default Footer;