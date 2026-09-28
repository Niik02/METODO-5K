import React, { useState, useEffect } from 'react';
import {
  Wifi,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Wrench,
  Smartphone,
  QrCode,
  ShoppingBag,
  Store,
  Globe,
  TrendingUp,
  ShieldCheck,
  ChevronDown,
  Lock,
  Zap,
  Users,
  Palette,
  Briefcase,
  Lightbulb,
  ExternalLink,
} from 'lucide-react';

const CHECKOUT_URL = 'https://pay.kiwify.com.br/aZr7HRq';
const LOGO_URL = 'https://i.postimg.cc/9QHDMvxz/BF.png';
const PLAQUE_IMAGE_URL = 'https://i.postimg.cc/DfsJTv60/Chat-GPT-Image-28-de-set-de-2026-09-44-59.png';

export default function App() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const learningItems = [
    {
      icon: Wifi,
      title: 'Como funciona uma plaquinha NFC',
      description: 'Entenda a tecnologia de aproximação e por que ela é tão rápida e prática para os clientes.',
    },
    {
      icon: Palette,
      title: 'Como criar a arte da sua plaquinha',
      description: 'Passo a passo para produzir layouts profissionais, visualmente atraentes e com a identidade da empresa.',
    },
    {
      icon: Wrench,
      title: 'Como montar a plaquinha do zero',
      description: 'Os materiais necessários, acabamento impecável e estrutura durável para entrega profissional.',
    },
    {
      icon: Smartphone,
      title: 'Como configurar o NFC',
      description: 'Como gravar o link de avaliação na tag NFC de forma simples usando apenas o seu celular.',
    },
    {
      icon: QrCode,
      title: 'Como configurar o QR Code de avaliação',
      description: 'Geração e teste do QR Code direto para a página oficial de reviews no Google Meu Negócio.',
    },
    {
      icon: ShoppingBag,
      title: 'Como deixar a plaquinha pronta para vender',
      description: 'Embalagem, apresentação e cuidados finais para impressionar o cliente na entrega.',
    },
    {
      icon: Store,
      title: 'Como oferecer a plaquinha para negócios locais',
      description: 'Abordagem prática e direta para lojas, restaurantes, clínicas, barbearias e escritórios.',
    },
    {
      icon: Globe,
      title: 'Como utilizar o Biosite como serviço adicional',
      description: 'Adicione uma página de links moderna junto com a plaquinha e multiplique o valor do serviço.',
    },
    {
      icon: TrendingUp,
      title: 'Como transformar a plaquinha em uma oportunidade de renda',
      description: 'Estratégias para criar um fluxo constante de pedidos e clientes recorrentes na sua região.',
    },
  ];

  const targetAudiences = [
    {
      icon: Zap,
      title: 'Para quem quer começar uma renda extra',
      description: 'Aprenda uma atividade prática com baixo investimento inicial e alta demanda no comércio local.',
    },
    {
      icon: Layers,
      title: 'Para quem trabalha com produtos personalizados',
      description: 'Amplie seu catálogo atual oferecendo um produto tecnológico e indispensável para estabelecimentos.',
    },
    {
      icon: Palette,
      title: 'Para designers e criadores',
      description: 'Valorize suas criações visuais aliando design físico a soluções digitais de alto impacto.',
    },
    {
      icon: Briefcase,
      title: 'Para quem já vende serviços para empresas',
      description: 'Incorpore uma nova solução de entrada rápida para abrir portas em clientes empresariais.',
    },
    {
      icon: Store,
      title: 'Para quem quer oferecer soluções para negócios locais',
      description: 'Atenda padarias, clínicas, restaurantes e lojas que necessitam urgentemente de avaliações.',
    },
    {
      icon: Globe,
      title: 'Para quem quer aprender a trabalhar com NFC e Biosites',
      description: 'Domine duas ferramentas modernas e muito procuradas em um único treinamento prático.',
    },
  ];

  const includedModules = [
    'Treinamento passo a passo completo',
    'Aula sobre criação da plaquinha',
    'Aula sobre montagem',
    'Aula sobre configuração do NFC',
    'Aula sobre QR Code',
    'Conteúdo sobre Biosites',
    'Orientações para transformar o conhecimento em uma oferta',
  ];

  const faqItems = [
    {
      q: 'Preciso ter experiência prévia para começar?',
      a: 'Não! O Método 5K foi estruturado detalhadamente do zero. Você vai aprender desde os conceitos mais básicos até a montagem física, gravação do chip NFC e a apresentação para os comerciantes locais.',
    },
    {
      q: 'Preciso de equipamentos caros?',
      a: 'Não. Você só precisa de um smartphone para gravar a tag NFC e testar o QR Code. A montagem da plaquinha utiliza materiais acessíveis e fáceis de adquirir pela internet ou no comércio.',
    },
    {
      q: 'O que é o Biosite e por que ele é ensinado?',
      a: 'O Biosite é uma página digital concentradora de links e informações (como WhatsApp, Instagram, cardápio, catálogo e localização). Você aprende a criá-lo como um serviço complementar à plaquinha física, aumentando seu ticket de venda.',
    },
    {
      q: 'Como recebo o acesso ao treinamento?',
      a: 'O acesso é 100% digital e liberado imediatamente após a confirmação do pagamento. Você receberá um e-mail com seus dados de login para assistir de onde e quando quiser.',
    },
    {
      q: 'Tem garantia?',
      a: 'Sim! Você conta com uma garantia incondicional de 7 dias protegida pela Kiwify. Se por qualquer motivo você não gostar do conteúdo, pode solicitar o reembolso total sem complicações.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col selection:bg-[#0959ec] selection:text-white">
      {/* Top Banner / Announcement */}
      <div className="w-full bg-[#000000] border-b border-neutral-900 py-2.5 px-4 text-center">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm text-neutral-300">
          <span className="inline-block w-2 h-2 rounded-full bg-[#0959ec] animate-pulse"></span>
          <span>Treinamento Online Prático • Acesso Imediato • Do Zero à Venda</span>
        </div>
      </div>

      {/* 1. TOPO / HERO */}
      <header className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
        {/* Subtle background glow effect behind plaque */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[700px] h-[320px] sm:h-[500px] md:h-[700px] bg-[#0959ec]/15 rounded-full blur-[120px] pointer-events-none -z-0" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Logo with preserved proportion */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <a href="#hero" className="inline-block transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={LOGO_URL}
                alt="Logo Método 5K"
                className="h-20 sm:h-24 md:h-28 w-auto object-contain mx-auto drop-shadow-md"
                loading="eager"
              />
            </a>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0959ec]/40 bg-[#0959ec]/10 text-[#0959ec] text-xs sm:text-sm font-semibold mb-6 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#0959ec]" />
            Método 5K • Plaquinha NFC & Biosite
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.18] sm:leading-[1.15] max-w-4xl mx-auto mb-6">
            Fature até{' '}
            <span className="text-[#0959ec] underline decoration-[#0959ec]/40 decoration-wavy decoration-1 underline-offset-4">
              R$500 por dia
            </span>{' '}
            com{' '}
            <span className="text-[#0959ec]">
              plaquinhas NFC
            </span>{' '}
            de avaliação do Google
          </h1>

          {/* Subtitle */}
          <p className="text-neutral-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed mb-8 sm:mb-10">
            Aprenda do zero como criar, montar e vender sua própria plaquinha NFC para negócios locais — mesmo começando sem experiência.
          </p>

          {/* Plaque Image Presentation */}
          <div className="max-w-xs sm:max-w-md md:max-w-lg mx-auto mb-8 sm:mb-10">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-[#0959ec]/30 rounded-2xl blur-lg transition duration-500 group-hover:bg-[#0959ec]/50" />
              <div className="relative rounded-2xl overflow-hidden border border-[#0959ec]/40 bg-neutral-950 p-2 sm:p-3 shadow-2xl">
                <img
                  src={PLAQUE_IMAGE_URL}
                  alt="Plaquinha NFC de Avaliação do Google"
                  className="w-full h-auto object-contain rounded-xl transition duration-500 group-hover:scale-[1.01]"
                  loading="eager"
                />
              </div>
            </div>
            <p className="text-xs text-neutral-400 mt-3 font-medium flex items-center justify-center gap-1.5">
              <Wifi className="w-3.5 h-3.5 text-[#0959ec]" />
              Tecnologia por aproximação NFC + QR Code dinâmico
            </p>
          </div>

          {/* Big CTA Button */}
          <div className="flex flex-col items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-xl bg-[#0959ec] hover:bg-[#084ecc] text-white font-bold text-base sm:text-lg tracking-wide uppercase transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
            >
              <span>Adquira agora o treinamento</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>

            {/* Micro Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-neutral-400 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0959ec]" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#0959ec]" />
                <span>Checkout 100% seguro</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0959ec]" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. SEÇÃO "O QUE VOCÊ VAI APRENDER" */}
      <section className="py-16 sm:py-20 bg-neutral-950/70 border-t border-b border-neutral-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0959ec]/30 bg-[#0959ec]/10 text-[#0959ec] text-xs font-semibold uppercase tracking-wider mb-4">
              Conteúdo Programático
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
              Aprenda a criar sua própria plaquinha NFC do zero
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed">
              No Método 5K, você aprende o processo completo para criar sua própria plaquinha NFC de avaliação do Google e transformar esse produto em uma nova fonte de renda.
            </p>
          </div>

          {/* Grid with 9 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {learningItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-black/80 border border-neutral-850 hover:border-[#0959ec]/60 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#0959ec]/5 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#0959ec]/10 border border-[#0959ec]/30 flex items-center justify-center text-[#0959ec] mb-4 group-hover:bg-[#0959ec] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Section CTA */}
          <div className="mt-12 text-center">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0959ec] hover:bg-[#084ecc] text-white font-bold text-sm sm:text-base tracking-wide uppercase transition-all duration-300"
            >
              <span>Quero aprender o método passo a passo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO "VOCÊ NÃO PRECISA COMEÇAR SABENDO" */}
      <section className="py-16 sm:py-24 bg-[#000000] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 text-xs font-semibold uppercase tracking-wider mb-4">
              Simples e Didático
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-5">
              Você não precisa ser especialista para começar
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed">
              O treinamento foi criado para quem quer aprender o processo desde o início. Você acompanha cada etapa para entender como criar a plaquinha, configurar os recursos e transformar o conhecimento em um produto que pode ser oferecido para empresas.
            </p>
          </div>

          {/* Destaque visual: DO ZERO → PLAQUINHA PRONTA → VENDA */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-[#0959ec]/40 shadow-xl mb-12">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-widest text-[#0959ec] font-bold">Fluxo Completo</span>
              <h3 className="text-lg sm:text-2xl font-extrabold text-white mt-1">
                A jornada exata do treinamento
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
              {/* Step 1 */}
              <div className="bg-black/90 p-5 rounded-xl border border-neutral-850 flex flex-col items-center text-center relative">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#0959ec]/20 text-[#0959ec] mb-3">
                  Etapa 01
                </span>
                <span className="text-xl sm:text-2xl font-black text-white mb-2">DO ZERO</span>
                <p className="text-neutral-400 text-xs sm:text-sm">
                  Sem pré-requisitos técnicos. Você aprende conceitos, ferramentas e materiais necessários.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-black/90 p-5 rounded-xl border border-[#0959ec]/50 flex flex-col items-center text-center relative shadow-md shadow-[#0959ec]/10">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#0959ec] text-white mb-3">
                  Etapa 02
                </span>
                <span className="text-xl sm:text-2xl font-black text-[#0959ec] mb-2">PLAQUINHA PRONTA</span>
                <p className="text-neutral-300 text-xs sm:text-sm">
                  Criação visual, gravação do chip NFC, QR Code funcional e montagem física perfeita.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-black/90 p-5 rounded-xl border border-neutral-850 flex flex-col items-center text-center relative">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#0959ec]/20 text-[#0959ec] mb-3">
                  Etapa 03
                </span>
                <span className="text-xl sm:text-2xl font-black text-white mb-2">VENDA</span>
                <p className="text-neutral-400 text-xs sm:text-sm">
                  Como abordar e apresentar a solução pronta para comércios, clínicas e empresas locais.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-lg bg-[#0959ec]/10 border border-[#0959ec]/30 text-white font-extrabold text-sm sm:text-lg tracking-wider">
                <span className="text-neutral-200">DO ZERO</span>
                <span className="text-[#0959ec]">→</span>
                <span className="text-[#0959ec]">PLAQUINHA PRONTA</span>
                <span className="text-[#0959ec]">→</span>
                <span className="text-white">VENDA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO BIOSITE */}
      <section className="py-16 sm:py-24 bg-neutral-950/80 border-t border-b border-neutral-900 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0959ec]/40 bg-[#0959ec]/10 text-[#0959ec] text-xs font-semibold uppercase tracking-wider mb-4">
              Serviço Complementar de Alto Valor
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-5">
              E ainda aprenda a criar Biosites
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Você também vai conhecer o Biosite e entender como utilizar essa solução junto à plaquinha NFC para aumentar sua oferta e criar novas oportunidades de venda.
            </p>
          </div>

          {/* Visual Formula Box */}
          <div className="max-w-3xl mx-auto bg-black border border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0959ec] text-white uppercase tracking-wider">
                Combo Perfeito
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
              {/* Box 1 */}
              <div className="flex-1 p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 text-center w-full">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#0959ec]/15 flex items-center justify-center text-[#0959ec] mb-3">
                  <Wifi className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">PLAQUINHA NFC</h4>
                <p className="text-xs text-neutral-400">
                  Avaliações no Google em segundos por aproximação física
                </p>
              </div>

              {/* Plus Sign */}
              <div className="text-2xl sm:text-3xl font-black text-[#0959ec] flex items-center justify-center">
                +
              </div>

              {/* Box 2 */}
              <div className="flex-1 p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 text-center w-full">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#0959ec]/15 flex items-center justify-center text-[#0959ec] mb-3">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">BIOSITE</h4>
                <p className="text-xs text-neutral-400">
                  Página digital com todos os links, WhatsApp e cardápio
                </p>
              </div>
            </div>

            {/* Equals Divider */}
            <div className="my-8 flex items-center justify-center">
              <div className="h-[2px] bg-neutral-800 w-full relative">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 text-[#0959ec] font-black text-xl tracking-widest">
                  =======
                </div>
              </div>
            </div>

            {/* Result Box */}
            <div className="text-center p-6 rounded-xl bg-[#0959ec]/10 border border-[#0959ec]/40">
              <span className="text-xs font-semibold text-[#0959ec] uppercase tracking-widest block mb-1">
                Resultado para seu negócio
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-wide">
                MAIS POSSIBILIDADES DE VENDA
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-xl mx-auto">
                Em vez de oferecer apenas um produto isolado, você entrega uma solução digital completa de presença e reputação para o comércio da sua cidade.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0959ec] hover:bg-[#084ecc] text-white font-bold text-sm sm:text-base tracking-wide uppercase transition-all duration-300"
            >
              <span>Quero aprender a criar plaquinhas & biosites</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE OPORTUNIDADE */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0959ec] via-[#063da5] to-[#041f53] text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 border border-white/20 text-white text-xs sm:text-sm font-semibold mb-6 uppercase tracking-wider backdrop-blur-sm">
            <TrendingUp className="w-4 h-4" />
            Oportunidade de Mercado
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-white">
            Um produto simples que pode virar uma nova fonte de renda
          </h2>

          <p className="text-white/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            Negócios locais precisam de avaliações no Google. A plaquinha NFC facilita esse processo e cria uma oportunidade para você oferecer um produto simples, personalizado e útil para empresas.
          </p>

          {/* Highlight phrase */}
          <div className="p-5 sm:p-6 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-md max-w-2xl mx-auto mb-10 shadow-2xl">
            <p className="text-lg sm:text-2xl font-extrabold text-white tracking-wide">
              “Aprenda o processo. Crie sua plaquinha. Ofereça para negócios locais.”
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-black hover:bg-neutral-900 text-white font-bold text-base sm:text-lg tracking-wide uppercase transition-all duration-300 shadow-xl border border-white/20 active:scale-95"
            >
              <span>Quero começar agora</span>
              <ArrowRight className="w-5 h-5 text-[#0959ec]" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO "PARA QUEM É" */}
      <section className="py-16 sm:py-24 bg-[#000000] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 text-xs font-semibold uppercase tracking-wider mb-4">
              Público Ideal
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Para quem é o Método 5K?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg">
              Identifique se o treinamento atende exatamente ao seu momento e objetivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {targetAudiences.map((aud, index) => {
              const Icon = aud.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-neutral-950 border border-neutral-850 hover:border-[#0959ec]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#0959ec]/15 border border-[#0959ec]/30 flex items-center justify-center text-[#0959ec] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                      {aud.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {aud.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-900 flex items-center text-xs text-[#0959ec] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                    Compatível com seu perfil
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. SEÇÃO "O QUE VOCÊ RECEBE" */}
      <section className="py-16 sm:py-24 bg-neutral-950 border-t border-b border-neutral-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0959ec]/40 bg-[#0959ec]/10 text-[#0959ec] text-xs font-semibold uppercase tracking-wider mb-4">
              Tudo Incluso
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Acesso ao Método 5K
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Você recebe acesso completo e estruturado para dominar todas as fases da plaquinha NFC e do Biosite.
            </p>
          </div>

          {/* Visual Access Card */}
          <div className="bg-black border border-[#0959ec]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col gap-4 mb-8">
              {includedModules.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-850 hover:border-[#0959ec]/40 transition-colors duration-200"
                >
                  <div className="w-6 h-6 rounded-full bg-[#0959ec]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#0959ec]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-neutral-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Guarantee and Security highlight */}
            <div className="border-t border-neutral-850 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0959ec]/15 border border-[#0959ec]/30 flex items-center justify-center text-[#0959ec] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">Garantia Incondicional de 7 Dias</h4>
                  <p className="text-xs text-neutral-400">Risco zero: teste e comprove ou solicite 100% do seu dinheiro de volta.</p>
                </div>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0959ec] hover:bg-[#084ecc] text-white font-bold text-sm sm:text-base tracking-wide uppercase transition-all duration-300"
                >
                  <span>Quero ter acesso ao Método 5K</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-16 sm:py-24 bg-[#000000] relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#0959ec]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0959ec]/40 bg-[#0959ec]/10 text-[#0959ec] text-xs sm:text-sm font-semibold mb-6 uppercase tracking-wider">
            Última Chamada
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            Comece agora a aprender como criar sua própria plaquinha NFC
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Tenha acesso ao Método 5K e aprenda o processo completo, do zero até a plaquinha pronta.
          </p>

          {/* Plaque Image Again */}
          <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-8 sm:mb-10">
            <div className="rounded-2xl overflow-hidden border border-[#0959ec]/50 bg-neutral-950 p-2 sm:p-3 shadow-2xl shadow-[#0959ec]/10">
              <img
                src={PLAQUE_IMAGE_URL}
                alt="Plaquinha NFC de Avaliação Google Método 5K"
                className="w-full h-auto object-contain rounded-xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Big Final Button */}
          <div className="flex flex-col items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 sm:px-14 py-4 sm:py-5 rounded-xl bg-[#0959ec] hover:bg-[#084ecc] text-white font-black text-lg sm:text-xl tracking-wide uppercase transition-all duration-300 shadow-2xl active:scale-95 cursor-pointer"
            >
              <span>Quero aprender agora</span>
              <ArrowRight className="w-6 h-6 shrink-0" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#0959ec]" /> Ambiente seguro Kiwify
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0959ec]" /> Liberação imediata
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-14 sm:py-20 bg-neutral-950/70 border-t border-neutral-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-2">
              Dúvidas Frequentes
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Perguntas comuns sobre o treinamento e o acesso
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="border border-neutral-850 rounded-xl bg-black/60 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#0959ec] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0959ec] shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-850/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-10 bg-[#000000] border-t border-neutral-900 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-5">
            <img
              src={LOGO_URL}
              alt="Logo Método 5K"
              className="h-14 sm:h-16 w-auto object-contain opacity-90"
              loading="lazy"
            />
          </div>

          <p className="text-sm sm:text-base font-semibold text-neutral-300 mb-2">
            Método 5K com Plaquinha NFC & Biosite
          </p>

          <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
            Todos os direitos reservados. Este treinamento ensina habilidades práticas e operacionais. Resultados dependem da execução e dedicação de cada aluno.
          </p>

          <div className="mt-5">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#0959ec] hover:underline inline-flex items-center gap-1 font-medium"
            >
              <span>Acessar checkout seguro</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar for Mobile & Desktop when scrolling past hero */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-black/95 backdrop-blur-md border-t border-[#0959ec]/40 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-3">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-bold text-white">Método 5K • Plaquinha NFC & Biosite</span>
              <span className="text-[11px] text-neutral-400">Aprenda do zero a criar, montar e vender</span>
            </div>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-xl bg-[#0959ec] hover:bg-[#084ecc] text-white font-bold text-xs sm:text-sm tracking-wide uppercase shadow-lg active:scale-95"
            >
              <span>Quero aprender agora</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
