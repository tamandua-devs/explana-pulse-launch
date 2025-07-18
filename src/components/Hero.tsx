import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-brand-black/60 to-brand-black/80" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-red/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-brand-red-vivid/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-white/10 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Glass container */}
        <div className="glass-strong rounded-3xl p-12 md:p-16 shadow-floating">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-red/20 text-brand-white px-4 py-2 rounded-full text-sm font-medium mb-8 glass animate-glow">
            <Sparkles className="w-4 h-4" />
            Agência Referência em Marketing Digital
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-brand-white">Transforme Seu</span>
            <br />
            <span className="gradient-text">Negócio Local</span>
            <br />
            <span className="text-brand-white">em Autoridade</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-brand-white/90 mb-12 max-w-4xl mx-auto font-light">
            Democratizamos o marketing digital para pequenos negócios com soluções completas, 
            acessíveis e de alto impacto visual. Impulsione suas vendas e fortaleça sua presença online.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-brand-red hover:bg-brand-red-vivid text-brand-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-vivid hover:shadow-floating transition-all duration-300 hover:scale-105 animate-glow group"
            >
              Análise Gratuita do Seu Negócio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-brand-white/30 text-brand-white hover:bg-brand-white/10 px-8 py-4 text-lg rounded-2xl glass-strong backdrop-blur-sm group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Ver Cases de Sucesso
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-brand-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
              <span className="text-sm font-medium">+500 Negócios Transformados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="text-sm font-medium">ROI Médio de 300%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
              <span className="text-sm font-medium">Suporte 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-red rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;