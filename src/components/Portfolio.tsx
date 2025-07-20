import { useState } from "react";
import { Play, ExternalLink, TrendingUp, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import choperiaRitmusImg from "@/assets/choperia-ritmus1.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Chopperia do Ritmus",
    category: "Restaurante & Bar",
    results: {
      engagement: "+280%",
      followers: "+900",
      revenue: "+350%"
    },
    description: "Transformamos um restaurante local em referência regional através de conteúdo visual impactante e estratégia de engajamento.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
    video: "https://player.vimeo.com/video/example1",
    testimonial: "Nossa audiência cresceu 150% em 3 meses. A Explana revolucionou nosso negócio!"
  },
  {
    id: 2,
    title: "Tempero Da Roça",
    category: "Comida Mineira",
    results: {
      engagement: "+320%",
      followers: "+400",
      revenue: "+200%"
    },
    description: "Desenvolvemos autoridade digital e confiança através de conteúdo educativo e depoimentos autênticos de pacientes.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1000",
    video: "https://player.vimeo.com/video/example2",
    testimonial: "Triplicamos nossos resultados em 2 meses. Conteúdo de qualidade faz toda diferença!"
  },
  {
    id: 3,
    title: "Academia FitZone",
    category: "Fitness",
    results: {
      engagement: "+400%",
      followers: "+3.5K",
      revenue: "+250%"
    },
    description: "Criamos uma comunidade engajada com treinos ao vivo, transformações reais e conteúdo motivacional diário.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000",
    video: "https://player.vimeo.com/video/example3",
    testimonial: "Nunca tivemos tantos alunos novos! A estratégia da Explana é simplesmente perfeita."
  }
];

const Portfolio = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-brand-red-vivid/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-brand-white">Clientes de</span>{" "}
            <span className="gradient-text">Sucesso</span>
          </h2>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
            Veja como ajudamos negócios locais a aparecer mais e atrair mais clientes.
          </p>
        </div>

        {/* Portfolio showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main showcase */}
          <div className="space-y-8">
            <Card className="glass-strong border-0 shadow-floating overflow-hidden group">
              <div className="relative">
                {activeItem === 0 ? (
                  <div style={{ position: 'relative', width: '100%', height: '320px' }}>
                    <img
                      src={choperiaRitmusImg}
                      alt="Chopperia Artesanal"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <a
                      href="https://www.instagram.com/reel/DLk9T3FuxND/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Assistir vídeo do restaurante no Instagram"
                      title="Assistir vídeo do restaurante no Instagram"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: '#222b',
                        borderRadius: '50%',
                        width: '56px',
                        height: '56px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 10px #0004',
                        transition: 'background 0.2s',
                        zIndex: 2
                      }}
                    >
                      <svg width="32" height="32" fill="#fff" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </a>
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="glass px-3 py-1 text-sm font-medium text-brand-white rounded-full">
                        {portfolioItems[activeItem].category}
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <img
                      src={portfolioItems[activeItem].image}
                      alt={portfolioItems[activeItem].title}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="glass px-3 py-1 text-sm font-medium text-brand-white rounded-full">
                        {portfolioItems[activeItem].category}
                      </span>
                    </div>
                  </>
                )}
              </div>

              <CardContent className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-white mb-4">
                  {portfolioItems[activeItem].title}
                </h3>
                
                <p className="text-brand-white/80 text-lg mb-6 leading-relaxed">
                  {portfolioItems[activeItem].description}
                </p>

                {/* Results metrics */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-brand-red" />
                      <span className="text-2xl font-bold text-brand-red">
                        {portfolioItems[activeItem].results.engagement}
                      </span>
                    </div>
                    <p className="text-brand-white/60 text-sm">Engajamento</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-brand-red" />
                      <span className="text-2xl font-bold text-brand-red">
                        {portfolioItems[activeItem].results.followers}
                      </span>
                    </div>
                    <p className="text-brand-white/60 text-sm">Seguidores</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Star className="w-5 h-5 text-brand-red" />
                      <span className="text-2xl font-bold text-brand-red">
                        {portfolioItems[activeItem].results.revenue}
                      </span>
                    </div>
                    <p className="text-brand-white/60 text-sm">ROI</p>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="glass-strong p-6 rounded-2xl">
                  <p className="text-brand-white/90 italic text-lg mb-4">
                    "{portfolioItems[activeItem].testimonial}"
                  </p>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-red text-brand-red" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio navigation */}
          <div className="space-y-6">
            {portfolioItems.map((item, index) => (
              <Card
                key={item.id}
                className={`
                  cursor-pointer transition-all duration-300 border-0 overflow-hidden group
                  ${index === activeItem 
                    ? 'glass-strong shadow-vivid scale-105' 
                    : 'bg-brand-white/5 hover:bg-brand-white/10 hover:scale-102 shadow-lg'
                  }
                `}
                onClick={() => setActiveItem(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-brand-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-brand-white/60 text-sm mb-2">
                        {item.category}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-brand-red font-medium">
                          {item.results.revenue} receita
                        </span>
                        <span className="text-brand-white/40">•</span>
                        <span className="text-brand-red font-medium">
                          {item.results.followers} seguidores
                        </span>
                      </div>
                    </div>

                    <ExternalLink className={`
                      w-5 h-5 transition-all duration-300
                      ${index === activeItem ? 'text-brand-red' : 'text-brand-white/40 group-hover:text-brand-white'}
                    `} />
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* View all button */}
            <Button 
              variant="outline" 
              className="w-full border-brand-red text-brand-red hover:bg-brand-red hover:text-brand-white py-6 rounded-xl text-lg font-semibold transition-all duration-300"
            >
              Ver Todos os Cases
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;