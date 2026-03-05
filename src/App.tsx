/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  PlayCircle, 
  ShieldCheck, 
  Star, 
  BookOpen, 
  Clock, 
  FileDown, 
  Layout, 
  History,
  Calendar,
  ListChecks,
  ScrollText,
  Target,
  Sparkles,
  Crown
} from 'lucide-react';

const mockPurchases = [
  { name: "Juliana C.", city: "Fortaleza, CE", plan: "plano Básico" },
  { name: "Ricardo M.", city: "São Paulo, SP", plan: "plano Premium" },
  { name: "Maria S.", city: "Rio de Janeiro, RJ", plan: "plano Básico" },
  { name: "Lucas F.", city: "Curitiba, PR", plan: "plano Premium" },
  { name: "Fernanda O.", city: "Belo Horizonte, MG", plan: "plano Básico" },
  { name: "Paulo R.", city: "Salvador, BA", plan: "plano Premium" },
  { name: "Beatriz L.", city: "Brasília, DF", plan: "plano Básico" },
  { name: "Gabriel N.", city: "Porto Alegre, RS", plan: "plano Premium" }
];

const PurchaseNotification = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % mockPurchases.length);
      setVisible(true);
      
      // Hide after 4 seconds
      setTimeout(() => setVisible(false), 4000);
    }, 8000); // Show every 8 seconds (4s visible + 4s hidden)

    // Initial show
    setTimeout(() => setVisible(true), 2000);
    setTimeout(() => setVisible(false), 6000);

    return () => clearInterval(showInterval);
  }, []);

  const purchase = mockPurchases[index];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -50, scale: 0.9 }}
          className="fixed bottom-6 left-6 z-50 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-4 border border-navy/5 max-w-[320px]"
        >
          <div className="bg-emerald-100 p-2 rounded-full shrink-0">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold text-navy flex items-center gap-1">
              Compra realizada! 🎉
            </p>
            <p className="text-[13px] text-navy/70 leading-tight">
              <span className="font-bold text-navy/90">{purchase.name}</span> de {purchase.city} acabou de adquirir o <span className="text-[#E990B0] font-bold">{purchase.plan}</span>
            </p>
            <p className="text-[11px] text-navy/40 mt-1">há poucos minutos</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const testimonials = [
  {
    name: "Ana Paula Silva",
    city: "Belo Horizonte, MG",
    image: "https://picsum.photos/seed/ana/100/100",
    text: "Eu já tinha tentado ler a Bíblia três vezes e sempre parava em Levítico. Com a ordem cronológica, tudo fez sentido! Finalmente entendi a história do povo de Deus como um todo."
  },
  {
    name: "Marcos Oliveira",
    city: "Curitiba, PR",
    image: "https://picsum.photos/seed/marcos/100/100",
    text: "O plano de 52 semanas é muito prático. Não é pesado e as explicações de contexto ajudam muito a não se perder. Recomendo para todos da minha igreja."
  },
  {
    name: "Cláudia Ferreira",
    city: "Salvador, BA",
    image: "https://picsum.photos/seed/claudia/100/100",
    text: "Pela primeira vez na vida, sinto que estou realmente conhecendo a Bíblia, e não apenas lendo versículos soltos. O material é lindo e muito bem organizado."
  }
];

const SectionHeader = ({ title, subtitle, light = false, badge }: { title: string, subtitle?: string, light?: boolean, badge?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16 relative"
  >
    {badge && (
      <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-4 ${light ? 'bg-white/10 text-gold border border-white/10' : 'bg-gold/10 text-gold border border-gold/10'}`}>
        {badge}
      </span>
    )}
    <h2 className={`font-serif text-3xl md:text-5xl mb-6 tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
      {title}
    </h2>
    <div className="flex items-center justify-center gap-4 mb-6">
      <div className={`h-[1px] w-12 ${light ? 'bg-white/20' : 'bg-navy/10'}`} />
      <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
      <div className={`h-[1px] w-12 ${light ? 'bg-white/20' : 'bg-navy/10'}`} />
    </div>
    {subtitle && (
      <p className={`max-w-2xl mx-auto text-lg ${light ? 'text-white/60' : 'text-navy/60'}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

const faqs = [
  {
    question: "Preciso ter muito conhecimento bíblico?",
    answer: "Não! O guia foi feito justamente para quem quer começar ou para quem já tentou e sentiu dificuldade. A linguagem é clara e o foco é na organização da leitura."
  },
  {
    question: "É indicado para novos convertidos?",
    answer: "Com certeza. É uma das melhores formas de um novo convertido entender a cronologia dos fatos bíblicos sem se sentir confuso com a ordem tradicional dos livros."
  },
  {
    question: "Como recebo o material?",
    answer: "O acesso é imediato. Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar o seu guia em PDF."
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Sim! O PDF é otimizado para leitura em smartphones, tablets e computadores. Você também pode imprimir se preferir o papel."
  },
  {
    question: "Em quanto tempo começo?",
    answer: "Você pode começar hoje mesmo! O plano é dividido em 52 semanas, mas você dita o seu próprio ritmo."
  },
  {
    question: "E se eu perder o ritmo?",
    answer: "Não tem problema. O guia é uma ferramenta de apoio, não uma cobrança. Se parar por uma semana, basta retomar de onde parou. O importante é a constância, não a velocidade."
  }
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const basicCheckout = "https://pay.hotmart.com/L104359058M?checkoutMode=10";
  const premiumCheckout = "https://pay.hotmart.com/Y104624681X?checkoutMode=10";
  const currentDate = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="min-h-screen selection:bg-gold/30">
      <PurchaseNotification />
      
      <div className="bg-[#E990B0] text-white py-2 px-4 text-center text-xs md:text-sm font-bold tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 fill-white" />
        Oferta Válida Somente Hoje ({currentDate})
        <Sparkles className="w-4 h-4 fill-white" />
      </div>

      {/* 1 & 2: Headline & Subheadline */}
      <header className="relative pt-6 pb-8 px-4 md:pt-10 md:pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_70%)]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-navy">
              Você nunca leu a Bíblia na ordem em que ela <span className="italic text-gold">realmente aconteceu.</span>
            </h1>
            <p className="text-lg md:text-xl text-navy/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              E talvez seja por isso que você nunca conseguiu terminar a leitura.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo('vsl')}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-navy text-white rounded-full font-medium transition-all hover:shadow-2xl hover:shadow-navy/20"
            >
              <PlayCircle className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
              CLIQUE PARA VER O VÍDEO DE 2 MINUTOS
            </motion.button>
          </motion.div>
        </div>
      </header>

      {/* 3: VSL Section */}
      <section id="vsl" className="pt-8 pb-16 px-4 bg-white/50 border-y border-navy/5">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-navy/5 rounded-2xl border border-navy/10 shadow-2xl relative overflow-hidden"
          >
            <div className="relative pt-[56.25%]">
              <iframe 
                src="https://player.vimeo.com/video/1170511978?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0&amp;fullscreen=0&amp;quality_selector=0&amp;share=0&amp;like=0&amp;vimeo_logo=0&amp;dnt=1" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                className="absolute top-0 left-0 w-full h-full"
                title="VSL RELIG"
              ></iframe>
            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo('pricing')}
              className="px-10 py-5 bg-emerald-600 text-white rounded-full font-bold text-lg shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all"
            >
              QUERO COMEÇAR MINHA LEITURA AGORA
            </motion.button>
          </div>
        </div>
      </section>

      {/* 4: Benefits Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader 
            badge="Conteúdo"
            title="O que você vai receber"
            subtitle="Tudo o que você precisa para uma jornada de leitura bíblica transformadora e organizada."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Calendar, title: "Plano de 52 semanas", desc: "Um roteiro completo dividido por semanas para você ler no seu tempo.", color: "bg-blue-50 text-blue-600" },
              { icon: ListChecks, title: "Divisão Prática", desc: "Metas diárias simples e organizadas que não pesam na sua rotina corrida.", color: "bg-emerald-50 text-emerald-600" },
              { icon: History, title: "Ordem Cronológica", desc: "Leia os fatos na sequência real em que aconteceram, do Gênesis ao Apocalipse.", color: "bg-amber-50 text-amber-600" },
              { icon: ScrollText, title: "Contexto Histórico", desc: "Resumos explicativos em cada etapa para você entender o cenário de cada livro.", color: "bg-purple-50 text-purple-600" },
              { icon: FileDown, title: "PDF Digital", desc: "Material em alta qualidade para imprimir ou acessar offline em qualquer dispositivo.", color: "bg-rose-50 text-rose-600" },
              { icon: Target, title: "Material de Apoio", desc: "Ferramentas e checklists exclusivos para ajudar você a manter a constância.", color: "bg-gold/10 text-gold" }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-white border border-navy/5 rounded-3xl hover:shadow-2xl hover:shadow-navy/5 transition-all group relative overflow-hidden flex flex-col items-start"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors" />
                <span className="absolute top-6 right-8 text-4xl font-black text-navy/5 select-none group-hover:text-navy/10 transition-colors">
                  0{i + 1}
                </span>
                
                <motion.div 
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm relative z-10`}
                >
                  <benefit.icon className="w-8 h-8" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-navy mb-3 relative z-10">{benefit.title}</h3>
                <p className="text-navy/60 leading-relaxed text-sm md:text-base relative z-10">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5: Social Proof Section */}
      <section className="py-24 px-4 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 blur-[120px] rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -ml-48 -mb-48" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader 
            light
            badge="Comunidade"
            title="Depoimentos de quem já começou"
            subtitle="Histórias reais de transformação através da Palavra e da constância na leitura."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-gold/30 object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-xs text-white/40">{t.city}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <p className="text-white/80 italic leading-relaxed">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6: Pricing Section */}
      <section id="pricing" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader 
            badge="Investimento"
            title="Escolha como você quer começar"
            subtitle="Acesso imediato e vitalício ao material digital. Escolha o plano que melhor se adapta ao seu momento."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-10 bg-linear-to-br from-white via-white to-gold-light/20 border-4 border-gold-light/60 rounded-[2.5rem] relative shadow-[0_20px_50px_rgba(212,175,55,0.08)] flex flex-col md:scale-105 z-10 group ring-1 ring-gold/5"
            >
              {/* Subtle Inner Border for Elegance */}
              <div className="absolute inset-0 border border-white/80 rounded-[2.4rem] pointer-events-none z-10" />
              
              {/* Sophisticated Shine Effect Container */}
              <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] pointer-events-none z-20">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-linear-to-r from-transparent via-white/40 to-transparent" />
              </div>

              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-navy text-white px-8 py-2 rounded-full text-sm font-black tracking-widest shadow-lg shadow-navy/20 flex items-center gap-2 whitespace-nowrap z-30">
                <ShieldCheck className="w-4 h-4" />
                ESSENCIAL
              </div>
              
              <div className="mb-8 relative z-10 mt-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-navy tracking-tight">Plano Básico</h3>
                  <span className="text-[10px] font-bold bg-navy/5 text-navy/40 px-2 py-1 rounded-md uppercase tracking-tighter">Início Rápido</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-emerald-600/40 text-lg font-medium">R$</span>
                  <span className="text-6xl font-black text-emerald-600 tracking-tighter">10</span>
                  <span className="text-navy/30 text-[10px] font-black ml-2 uppercase tracking-[0.15em]">Pagamento único</span>
                </div>
              </div>
              
              <ul className="space-y-5 mb-10 flex-grow relative z-10">
                {[
                  "Guia completo 52 semanas",
                  "PDF digital em alta qualidade",
                  "Acesso imediato via e-mail",
                  "Suporte via e-mail"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-navy font-medium group/item">
                    <div className="bg-navy/5 p-1.5 rounded-full shrink-0 group-hover/item:bg-navy/10 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-navy/40 group-hover/item:text-navy/60 transition-colors" />
                    </div>
                    <span className="text-sm md:text-base text-navy/80 group-hover/item:text-navy transition-colors">{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => window.location.href = basicCheckout}
                className="w-full py-5 bg-emerald-600 text-white font-black text-lg rounded-2xl shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 hover:scale-[1.02] transition-all active:scale-95 relative z-10"
              >
                QUERO O PLANO BÁSICO
              </button>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-10 bg-white border-4 border-dashed border-gold rounded-[2.5rem] relative shadow-[0_20px_50px_rgba(212,175,55,0.25)] flex flex-col md:scale-105 z-20"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold text-white px-8 py-2 rounded-full text-sm font-black tracking-widest shadow-lg shadow-gold/40 flex items-center gap-2 whitespace-nowrap">
                <Star className="w-4 h-4 fill-white" />
                RECOMENDADO
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-navy">Plano Premium</h3>
                  <span className="text-[10px] font-bold bg-gold/10 text-gold px-2 py-1 rounded-md uppercase tracking-tighter">Melhor Valor</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-emerald-600/60 text-lg">R$</span>
                  <span className="text-6xl font-black text-emerald-600">19</span>
                  <span className="text-navy/40 text-sm font-medium ml-2">Pagamento único</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  { text: "Guia completo 52 semanas", exclusive: false },
                  { text: "PDF digital em alta qualidade", exclusive: false },
                  { text: "Material de apoio extra", exclusive: true },
                  { text: "Checklist de acompanhamento semanal", exclusive: true },
                  { text: "Linha do tempo visual da Bíblia", exclusive: true },
                  { text: "Acesso prioritário a futuras atualizações", exclusive: true }
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-between gap-3 text-navy font-medium group/benefit">
                    <div className="flex items-center gap-3">
                      <div className={`${item.exclusive ? 'bg-gold/20 shadow-[0_0_10px_rgba(212,175,55,0.3)]' : 'bg-gold/10'} p-1.5 rounded-full shrink-0 transition-all duration-300 group-hover/benefit:scale-110`}>
                        {item.exclusive ? (
                          <Crown className="w-4 h-4 text-gold fill-gold/20" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-gold" />
                        )}
                      </div>
                      <span className={`text-sm md:text-base transition-colors ${item.exclusive ? 'text-navy font-bold' : 'text-navy/80 group-hover/benefit:text-navy'}`}>{item.text}</span>
                    </div>
                    {item.exclusive && (
                      <motion.span 
                        initial={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        className="text-[8px] font-black bg-linear-to-r from-gold to-amber-500 text-white px-2.5 py-1 rounded-md uppercase tracking-[0.15em] shrink-0 shadow-lg shadow-gold/30 flex items-center gap-1 border border-white/20"
                      >
                        <Sparkles className="w-2 h-2 fill-white" />
                        Premium
                      </motion.span>
                    )}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => window.location.href = premiumCheckout}
                className="w-full py-5 bg-emerald-600 text-white font-black text-lg rounded-2xl shadow-xl shadow-emerald-600/40 hover:bg-emerald-700 hover:scale-[1.02] transition-all active:scale-95"
              >
                QUERO O PLANO PREMIUM
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7: Guarantee Section */}
      <section className="py-24 px-4 bg-beige border-y border-navy/5">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            badge="Segurança"
            title="Garantia incondicional de 7 dias"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-gold/20 relative">
              <div className="absolute inset-0 rounded-full border border-gold/20 animate-ping opacity-20" />
              <ShieldCheck className="w-12 h-12 text-gold" />
            </div>
            <p className="text-navy/60 leading-relaxed text-xl max-w-2xl mx-auto">
              Fique tranquilo. Se por qualquer motivo você sentir que o guia não é para você, basta nos enviar um e-mail em até 7 dias após a compra e devolveremos 100% do seu investimento. Sem perguntas, sem burocracia. Nosso compromisso é com a sua satisfação e o seu crescimento espiritual.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 8: FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader 
            badge="Dúvidas"
            title="Perguntas Frequentes"
            subtitle="Tire suas dúvidas e comece sua jornada com total segurança."
          />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-navy/5 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-navy/5 transition-colors"
                >
                  <span className="font-semibold text-navy">{faq.question}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-gold" /> : <ChevronDown className="w-5 h-5 text-navy/40" />}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-navy/60 leading-relaxed bg-white">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-navy text-white/40 text-center text-sm border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4">© {new Date().getFullYear()} Guia de Leitura Bíblica Cronológica. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold transition-colors">Privacidade</a>
            <a href="#" className="hover:text-gold transition-colors">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
