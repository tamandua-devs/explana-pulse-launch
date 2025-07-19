import { useEffect, useRef, useState } from "react";
import { Camera, Megaphone, BarChart3, Headphones, Gift, Zap, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Camera,
    title: "Story Maker",
    subtitle: "Profissional no Local",
    description: "Criamos conteúdo visual de alta qualidade direto no seu negócio, com equipamentos profissionais e equipe especializada.",
    features: ["Fotos profissionais", "Vídeos promocionais", "Stories e Reels", "Cobertura de eventos"],
    color: "from-brand-red to-brand-red-vivid"
  },
  {
    icon: Megaphone,
    title: "Social Media",
    subtitle: "Gestão de redes sociais",
    description: "Desenvolvemos estratégias personalizadas para aumentar seu engajamento e converter seguidores em clientes.",
    features: ["Planejamento editorial", "Criação de conteúdo", "Stories e Reels profissionais", "Campanhas pagas"],
    color: "from-brand-black to-gray-800"
  },
  {
    icon: BarChart3,
    title: "Análise e Otimização",
    subtitle: "Resultados Mensuráveis",
    description: "Monitoramos performance e otimizamos estratégias baseadas em dados reais para maximizar seus resultados.",
    features: ["Relatórios detalhados", "Análise de concorrência", "ROI tracking", "Ajustes estratégicos"],
    color: "from-brand-red-vivid to-pink-500"
  },
  {
    icon: Globe,
    title: "Landing Pages",
    subtitle: "Páginas que convertem visitantes em clientes",
    /*description: "Criamos landing pages otimizadas para conversão, focadas em resultados.",*/
    features: ["Páginas modernas e responsivas", "Integração com WhatsApp", "Otimização para conversão", "Consultoria estratégica"],
    color: "from-gray-700 to-brand-black"
  },
  {
    icon: Gift,
    title: "Conheça o pacote completo de divulgações",
    subtitle: "Acompanhe seu sucesso",
    description: "Impulsionamento gratuito de R$30,00 no Instagram.",
    features: ["Conversa Inicial", "Gravação Profissional", "Edição de Qualidade", "Impulsionamento Gratuito"],
    color: "from-brand-red to-orange-500"
  },
  {
    icon: Zap,
    title: "Designer Digital",
    subtitle: "Designs para social media",
    description: "Revolucionamos sua identidade visual. Quem é visto vende.",
    features: ["Criação de posts que chamam a atenção do público", "Artes de alta qualidade", "Posts com a personalidade do seu negócio", "Integração de sistemas"],
    color: "from-purple-600 to-brand-red-vivid"
  }
];

const ServicesCards = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "-100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
        
        if (entry.isIntersecting) {
          setVisibleCards(prev => [...prev.filter(i => i !== cardIndex), cardIndex]);
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-background to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-56 h-56 bg-brand-red-vivid/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-brand-black">Serviços</span>{" "}
            { <span className="gradient-text">Oferecidos</span>}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos tudo que seu negócio precisa para dominar o digital e conquistar mais clientes
          </p>
        </div>

        {/* Cards grid with stacking effect */}
        <div className="space-y-8 md:space-y-16">
          {services.map((service, index) => {
            const isVisible = visibleCards.includes(index);
            const IconComponent = service.icon;
            
            return (
              <Card
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                data-index={index}
                className={`
                  stacking-card group
                  ${isVisible ? 'stacked' : ''}
                  bg-gradient-to-br ${service.color}
                  border-0 shadow-floating
                  hover:shadow-vivid
                  transition-all duration-500
                  ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-32'}
                `}
              >
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    {/* Icon */}
                    <div className="glass-strong p-6 rounded-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-12 h-12 text-brand-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-brand-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-brand-white/80 text-lg font-medium">
                          {service.subtitle}
                        </p>
                      </div>

                      <p className="text-brand-white/90 text-lg mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-3 glass-strong p-3 rounded-lg group-hover:bg-brand-white/10 transition-colors duration-300"
                          >
                            <div className="w-2 h-2 bg-brand-white rounded-full shrink-0" />
                            <span className="text-brand-white/90 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;