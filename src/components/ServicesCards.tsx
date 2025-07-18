
import { Camera, Megaphone, BarChart3, Headphones, Gift, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollStacking } from "@/hooks/useScrollStacking";

const services = [
  {
    icon: Camera,
    title: "Produção Audiovisual",
    subtitle: "Profissional no Local",
    description: "Criamos conteúdo visual de alta qualidade direto no seu negócio, com equipamentos profissionais e equipe especializada.",
    features: ["Fotos profissionais", "Vídeos promocionais", "Stories e Reels", "Cobertura de eventos"],
    color: "from-brand-red to-brand-red-vivid"
  },
  {
    icon: Megaphone,
    title: "Gestão de Redes Sociais",
    subtitle: "Presença Online Marcante",
    description: "Desenvolvemos estratégias personalizadas para aumentar seu engajamento e converter seguidores em clientes.",
    features: ["Planejamento editorial", "Criação de conteúdo", "Gestão de comunidade", "Campanhas pagas"],
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
    icon: Headphones,
    title: "Suporte Ágil",
    subtitle: "Atendimento Humanizado",
    description: "Nossa equipe está sempre disponível para oferecer suporte rápido e personalizado às suas necessidades.",
    features: ["Atendimento 24/7", "Gestão dedicada", "Suporte técnico", "Consultoria estratégica"],
    color: "from-gray-700 to-brand-black"
  },
  {
    icon: Gift,
    title: "Impulsionamento Gratuito",
    subtitle: "Instagram Boost",
    description: "Oferecemos impulsionamento gratuito nas primeiras campanhas para você ver resultados desde o primeiro dia.",
    features: ["Boost inicial grátis", "Segmentação avançada", "Otimização contínua", "Relatórios de performance"],
    color: "from-brand-red to-orange-500"
  },
  {
    icon: Zap,
    title: "Transformação Digital",
    subtitle: "Inovação Completa",
    description: "Revolucionamos sua presença digital com soluções inovadoras que geram impacto real no seu negócio.",
    features: ["Website otimizado", "E-commerce", "Automações", "Integração de sistemas"],
    color: "from-purple-600 to-brand-red-vivid"
  }
];

const ServicesCards = () => {
  const { containerRef, setCardRef, getCardStyle } = useScrollStacking(services.length);

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-gradient-to-br from-background to-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-56 h-56 bg-brand-red-vivid/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-brand-black">Soluções</span>{" "}
            <span className="gradient-text">Completas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos tudo que seu negócio precisa para dominar o digital e conquistar mais clientes
          </p>
        </div>

        {/* Cards with stacking effect */}
        <div className="relative space-y-8 md:space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card
                key={index}
                ref={(el) => setCardRef(index, el)}
                style={getCardStyle(index)}
                className={`
                  stacking-card group relative
                  bg-gradient-to-br ${service.color}
                  border-0 shadow-floating
                  hover:shadow-vivid
                  will-change-transform
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
