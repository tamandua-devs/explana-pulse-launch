import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Não tenho uma loja física, posso divulgar meu negócio?",
    answer: "SIM! Nós do Explana Geral vamos planejar a melhor maneira de divulgar o seu negócio."
  },
  {
    question: "Quanto tempo o meu vídeo será divulgado?",
    answer: "A sua divulgação ficará PERMANENTE em nosso perfil e será impulsionado durante 3 dias com o investimento por nossa conta.maior conexão com seus clientes."
  },
  {
    question: "O que está incluso no impulsionamento gratuito do Instagram?",
    answer: "Oferecemos impulsionamento gratuito nas primeiras campanhas para novos clientes, incluindo segmentação estratégica, criação de anúncios otimizados e acompanhamento de resultados. É nossa forma de mostrar o potencial da parceria desde o início."
  },
  {
    question: "Qual é o investimento para contratar os serviços?",
    answer: "Nossos planos são personalizados conforme as necessidades e objetivos de cada negócio. Oferecemos soluções a partir de R$70 com excelente custo-benefício. Entre em contato para receber uma proposta sob medida para sua empresa."
  },
  {
    question: "Eu terei acesso a esse vídeo?  Para postar na rede social do meu negócio?",
    answer: "O vídeo da sua divulgação será postado simultaneamente no seu perfil profissional e no perfil do Explana Geral.."
  },
  {
    question: "Como é o suporte e acompanhamento dos resultados?",
    answer: "Oferecemos suporte ágil via WhatsApp, relatórios mensais detalhados com métricas de performance, reuniões estratégicas regulares e ajustes contínuos na estratégia baseados nos resultados obtidos."
  },
  {
    question: "Posso cancelar o serviço quando quiser?",
    answer: "Sim, trabalhamos com contratos flexíveis. Não acreditamos em fidelização forçada - nosso objetivo é entregar tanto valor que você não vai querer sair. A transparência e confiança são fundamentais na nossa relação."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-brand-red-vivid/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-brand-black">Perguntas</span>{" "}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços e metodologia
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="glass-strong rounded-3xl p-8 md:p-12 shadow-floating">
          <Accordion type="single" collapsible className="space-y-6">
            {faqData.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-0 bg-brand-white/50 rounded-2xl px-6 py-2 transition-all duration-300 hover:bg-brand-white/70 hover:shadow-lg data-[state=open]:bg-brand-red/5 data-[state=open]:shadow-vivid"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 group">
                  <div className="flex items-start gap-4 w-full">
                    <div className="glass p-2 rounded-lg shrink-0 group-data-[state=open]:bg-brand-red/20 transition-colors duration-300">
                      <Plus className="w-5 h-5 text-brand-red group-data-[state=open]:hidden transition-opacity duration-300" />
                      <Minus className="w-5 h-5 text-brand-red hidden group-data-[state=open]:block transition-opacity duration-300" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-brand-black group-data-[state=open]:text-brand-red transition-colors duration-300">
                      {item.question}
                    </h3>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="pl-14 pr-4 pb-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-12 text-center p-8 glass rounded-2xl">
            <h3 className="text-2xl font-bold text-brand-black mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão e criar a estratégia perfeita para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5521994798107"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-vivid text-brand-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-vivid hover:shadow-floating"
              >
                Falar com Especialista
              </a>
              <button className="inline-flex items-center justify-center border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-brand-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
                Agendar Reunião
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;