import React from "react";

const PHONE = "5512991546858";
const whatsapp = (message: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

const categories = [
  {
    title: "Rações",
    text: "Opções para diferentes portes, fases da vida e necessidades.",
    image: "/images/racoes.png",
    alt: "Prateleira com variedade de rações para cães e gatos",
    message: "Olá! Gostaria de conhecer as opções de rações disponíveis.",
  },
  {
    title: "Acessórios",
    text: "Coleiras, guias, peitorais e itens para o dia a dia.",
    image: "/images/acessorios.png",
    alt: "Exposição de acessórios para animais de estimação",
    message: "Olá! Gostaria de informações sobre os acessórios disponíveis.",
  },
  {
    title: "Petiscos e cuidados",
    text: "Petiscos, sachês e produtos de higiene para seu pet.",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1000&q=85",
    alt: "Cão recebendo um petisco",
    message: "Olá! Gostaria de conhecer os petiscos e produtos de cuidados.",
  },
];

const reviews = [
  {
    name: "Stephanie de Matos",
    text: "Sempre compro ração e coisinhas pro meu gato aqui. Adoro muito, bom preço e atendimento muito bom também.",
  },
  {
    name: "Vitor Coelho",
    text: "Gosto muito do atendimento, sempre fui bem tratado nota 10.",
  },
  {
    name: "Bruna Costa",
    text: "Gosto do atendimento, sempre me auxilia quando preciso e sou cliente deles a anos!",
  },
];

function Paw({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" fill="currentColor" className={className}>
      <ellipse cx="24" cy="31" rx="12" ry="9" />
      <ellipse cx="10" cy="19" rx="5" ry="7" transform="rotate(-25 10 19)" />
      <ellipse cx="21" cy="12" rx="5" ry="7" transform="rotate(-8 21 12)" />
      <ellipse cx="33" cy="13" rx="5" ry="7" transform="rotate(12 33 13)" />
      <ellipse cx="41" cy="22" rx="4" ry="6" transform="rotate(25 41 22)" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.3ZM12.2 21.6a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.4 4.7Zm5.4-7.3c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.8-.7-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.8 5.1.8.3 1.4.5 1.9.6.8.2 1.5.2 2 .1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z" />
    </svg>
  );
}

export default function MartinDeSaPreview() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fbf8f0] font-sans text-[#24352b] selection:bg-[#f4c44e] selection:text-[#173d2c]">
      <style>{`
        @keyframes floatPet { 0%,100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-12px) rotate(1deg); } }
        @keyframes pawFade { 0%,100% { opacity:.12; transform:translateY(0) rotate(-15deg); } 50% { opacity:.28; transform:translateY(-8px) rotate(-5deg); } }
        @keyframes enterUp { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
        .pet-float { animation: floatPet 5s ease-in-out infinite; }
        .paw-fade { animation: pawFade 5s ease-in-out infinite; }
        .enter-up { animation: enterUp .8s ease-out both; }
        .soft-card { transition: transform .25s ease, box-shadow .25s ease; }
        .soft-card:hover { transform: translateY(-6px); box-shadow: 0 20px 45px rgba(31,70,48,.13); }
        html { scroll-behavior:smooth; }
        @media (prefers-reduced-motion: reduce) { *,*::before,*::after { animation-duration:.01ms !important; animation-iteration-count:1 !important; scroll-behavior:auto !important; transition-duration:.01ms !important; } }
      `}</style>

      {/* Header baseado no conjunto de navegação global do template de Serviços */}
      <header className="sticky top-0 z-50 border-b border-[#e9e4d8] bg-[#fbf8f0]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Casa de Rações Martin de Sá - início">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1d563b] text-[#f6c64c]"><Paw className="h-7 w-7" /></span>
            <span className="leading-tight"><strong className="block text-base font-black tracking-tight text-[#17452f] sm:text-lg">MARTIN DE SÁ</strong><span className="text-[10px] font-bold uppercase tracking-[.19em] text-[#71806f]">Casa de Rações</span></span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#526455] lg:flex" aria-label="Navegação principal">
            <a className="transition hover:text-[#d18c17]" href="#produtos">Produtos</a>
            <a className="transition hover:text-[#d18c17]" href="#comodidade">Delivery</a>
            <a className="transition hover:text-[#d18c17]" href="#banho-tosa">Banho e tosa</a>
            <a className="transition hover:text-[#d18c17]" href="#avaliacoes">Avaliações</a>
            <a className="transition hover:text-[#d18c17]" href="#duvidas">Dúvidas</a>
            <a className="transition hover:text-[#d18c17]" href="#contato">Contato</a>
          </nav>
          <a href={whatsapp("Olá! Gostaria de falar com a Casa de Rações Martin de Sá.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#1d563b] px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-[#1d563b]/15 transition hover:-translate-y-0.5 hover:bg-[#16452f] sm:px-5 sm:text-sm"><WhatsAppIcon /> <span className="hidden xs:inline">Fale conosco</span><span className="xs:hidden">WhatsApp</span></a>
        </div>
      </header>

      <main>
        {/* Hero adaptado do HeroServicos variant split */}
        <section id="inicio" className="relative isolate overflow-hidden bg-[#edf2e6]">
          <Paw className="paw-fade absolute -left-5 top-16 hidden h-36 w-36 text-[#7fa17c] lg:block" />
          <Paw className="paw-fade absolute right-[42%] top-10 h-16 w-16 text-[#7fa17c]" />
          <div className="mx-auto grid max-w-7xl items-center gap-7 px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-8 lg:py-20">
            <div className="enter-up relative z-10">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cbd9c6] bg-white/75 px-4 py-2 text-xs font-extrabold uppercase tracking-[.12em] text-[#376648]"><span className="h-2 w-2 rounded-full bg-[#e9ae2e]" /> Cuidado que faz parte da família</span>
              <h1 className="max-w-2xl text-[2.65rem] font-black leading-[1.04] tracking-[-.045em] text-[#17452f] sm:text-5xl lg:text-[3.65rem]">Tudo para cuidar de quem faz seu dia <span className="relative inline-block text-[#d18c17]">mais feliz.<Paw className="absolute -right-8 -top-3 h-7 w-7 rotate-12 text-[#d18c17]" /></span></h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#596b5b] sm:text-lg">Rações, acessórios e cuidados para seu melhor amigo. Compre na loja, peça pelo WhatsApp ou agende o banho e tosa.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsapp("Olá! Gostaria de fazer um pedido pelo WhatsApp.")} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#eab43b] px-7 py-4 text-sm font-black text-[#263b2c] shadow-lg shadow-[#dca52d]/20 transition hover:-translate-y-1 hover:bg-[#f3c653]"><WhatsAppIcon /> Pedir pelo WhatsApp</a>
                <a href="#produtos" className="inline-flex items-center justify-center rounded-full border border-[#b8c9b3] bg-white/70 px-7 py-4 text-sm font-bold text-[#24563a] transition hover:bg-white">Conhecer produtos <span className="ml-2">↓</span></a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-[#5f725f]"><span>✓ Delivery</span><span>✓ Retirada na loja</span><span>✓ Atendimento presencial</span></div>
            </div>
            <div className="relative mx-auto w-full max-w-[570px] lg:pl-5">
              <div className="absolute -inset-4 rotate-3 rounded-[3rem] bg-[#f3c653]/45" />
              <div className="relative overflow-hidden rounded-[2.5rem] border-[7px] border-white bg-[#dce8d6] shadow-2xl shadow-[#31563c]/15">
                <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=90" alt="Cachorro golden retriever em fotografia natural" className="pet-float h-[340px] w-full object-cover sm:h-[440px]" />
                <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur"><p className="text-xs font-black uppercase tracking-wider text-[#d18c17]">Amor em cada cuidado</p><p className="mt-1 text-sm font-bold text-[#234a34]">Seu pet é sempre bem-vindo!</p></div>
              </div>
              <div className="absolute -right-2 top-8 rounded-2xl bg-white p-3 shadow-xl sm:-right-5"><span className="text-2xl">🐾</span><p className="text-[10px] font-extrabold text-[#28563a]">Feito para<br/>quem ama pets</p></div>
            </div>
          </div>
        </section>

        {/* Faixa de conveniência */}
        <section id="comodidade" className="relative z-10 mx-auto -mt-1 max-w-7xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-3xl bg-[#1d563b] text-white shadow-xl shadow-[#1d563b]/15 sm:grid-cols-3">
            <div className="flex items-center gap-4 border-b border-white/15 p-5 sm:border-b-0 sm:border-r"><span className="text-3xl">🛵</span><div><h2 className="font-extrabold">Delivery</h2><p className="mt-1 text-xs text-white/75">Receba em casa</p></div></div>
            <div className="flex items-center gap-4 border-b border-white/15 p-5 sm:border-b-0 sm:border-r"><span className="text-3xl">🛍️</span><div><h2 className="font-extrabold">Retire na loja</h2><p className="mt-1 text-xs text-white/75">Peça pelo WhatsApp</p></div></div>
            <div className="flex items-center gap-4 p-5"><span className="text-3xl">🐶</span><div><h2 className="font-extrabold">Banho e tosa</h2><p className="mt-1 text-xs text-white/75">Com agendamento prévio</p></div></div>
          </div>
        </section>

        {/* Produtos: ServicesGrid variant visual adaptado para vitrine */}
        <section id="produtos" className="px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center"><span className="text-xs font-black uppercase tracking-[.2em] text-[#c38a20]">Um mundo de cuidados</span><h2 className="mt-3 text-3xl font-black tracking-tight text-[#17452f] sm:text-4xl">Encontre o que seu pet precisa</h2><p className="mt-4 leading-7 text-[#68766a]">Uma vitrine para conhecer algumas das categorias disponíveis na loja. Consulte opções e disponibilidade pelo WhatsApp.</p></div>
            <div className="grid gap-6 md:grid-cols-3">
              {categories.map((item, index) => <article key={item.title} className="soft-card group overflow-hidden rounded-[1.7rem] border border-[#e8e4d9] bg-white shadow-sm"><div className="relative overflow-hidden"><img src={item.image} alt={item.alt} loading="lazy" className="h-60 w-full object-cover transition duration-700 group-hover:scale-105"/><span className="absolute left-4 top-4 rounded-full bg-[#f4c44e] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#29432f]">0{index+1}</span></div><div className="p-6"><h3 className="text-xl font-black text-[#214c35]">{item.title}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-[#69776b]">{item.text}</p><a href={whatsapp(item.message)} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#2b7048] transition hover:gap-3">Consultar pelo WhatsApp <span aria-hidden="true">→</span></a></div></article>)}
            </div>
            <div className="mt-8 flex justify-center"><a href={whatsapp("Olá! Gostaria de consultar os produtos disponíveis na loja.")} target="_blank" rel="noreferrer" className="rounded-full border border-[#c6d4c1] px-6 py-3 text-sm font-bold text-[#24563a] transition hover:bg-[#eaf1e6]">Consultar outros produtos</a></div>
          </div>
        </section>

        {/* Loja real */}
        <section id="sobre" className="bg-[#f0eee5] px-5 py-20 sm:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div className="relative"><img src="/images/interior.png" alt="Interior da Casa de Rações Martin de Sá" loading="lazy" className="h-[330px] w-full rounded-[2rem] object-cover shadow-xl sm:h-[430px]"/><Paw className="absolute -bottom-5 -right-5 h-20 w-20 rotate-12 text-[#d7a637]" /></div>
            <div><span className="text-xs font-black uppercase tracking-[.2em] text-[#c38a20]">Perto de você</span><h2 className="mt-3 text-3xl font-black leading-tight text-[#17452f] sm:text-4xl">Tudo mais fácil para cuidar do seu companheiro.</h2><p className="mt-5 leading-7 text-[#657366]">Na Casa de Rações Martin de Sá, você encontra opções para a alimentação, os cuidados e o dia a dia do seu pet. Escolha como prefere comprar: presencialmente, pelo WhatsApp com retirada na loja ou por delivery.</p><a href="#contato" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#1d563b] px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-[#16452f]">Encontre nossa loja <span>→</span></a></div>
          </div>
        </section>

        {/* Banho e tosa */}
        <section id="banho-tosa" className="overflow-hidden px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div className="order-2 lg:order-1"><span className="inline-flex rounded-full bg-[#f8e8b9] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#8b6418]">Um cuidado a mais</span><h2 className="mt-5 text-3xl font-black leading-tight text-[#17452f] sm:text-4xl">Banho e tosa com horário agendado</h2><p className="mt-4 max-w-xl leading-7 text-[#657366]">Seu pet também pode contar com serviços de estética animal. Entre em contato para consultar horários e combinar o atendimento.</p><a href={whatsapp("Olá! Gostaria de informações e horários disponíveis para banho e tosa.")} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#eab43b] px-6 py-4 text-sm font-black text-[#263b2c] shadow-lg shadow-[#dca52d]/20 transition hover:-translate-y-1">Agendar pelo WhatsApp <span>→</span></a><p className="mt-3 text-xs text-[#7a8579]">Atendimento mediante agendamento prévio.</p></div>
            <div className="order-1 lg:order-2"><img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85" alt="Cachorro recebendo cuidados de higiene e tosa" loading="lazy" className="h-[320px] w-full rounded-[2rem] object-cover shadow-xl sm:h-[430px]" /></div>
          </div>
        </section>

        {/* Reviews reais fornecidas pelo levantamento */}
        <section id="avaliacoes" className="bg-[#eaf0e5] px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl"><div className="mx-auto mb-12 max-w-2xl text-center"><span className="text-xs font-black uppercase tracking-[.2em] text-[#c38a20]">Experiências compartilhadas</span><h2 className="mt-3 text-3xl font-black text-[#17452f] sm:text-4xl">Quem conhece, recomenda</h2><p className="mt-4 text-sm leading-6 text-[#68766a]">Algumas avaliações públicas de clientes da loja.</p></div><div className="grid gap-5 md:grid-cols-3">{reviews.map((review) => <article key={review.name} className="soft-card rounded-3xl border border-[#dce5d7] bg-white p-7 shadow-sm"><div className="text-xl tracking-[.18em] text-[#e3aa2c]" aria-label="5 de 5 estrelas">★★★★★</div><p className="mt-5 min-h-28 text-sm leading-7 text-[#56665a]">“{review.text}”</p><div className="mt-6 border-t border-[#edf0e9] pt-4"><p className="font-extrabold text-[#214c35]">{review.name}</p><p className="mt-1 text-[11px] text-[#849084]">Avaliação pública • Google</p></div></article>)}</div></div>
        </section>

        {/* FAQ: dúvidas comuns, sem inventar condições comerciais */}
        <section id="duvidas" className="bg-[#fbf8f0] px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center"><span className="text-xs font-black uppercase tracking-[.2em] text-[#c38a20]">Pode perguntar</span><h2 className="mt-3 text-3xl font-black text-[#17452f] sm:text-4xl">Dúvidas frequentes</h2></div>
            <div className="space-y-3">
              {[
                ["A loja faz entrega em domicílio?", "Sim! Entre em contato pelo WhatsApp para consultar as condições de entrega."],
                ["Posso fazer o pedido pelo WhatsApp e retirar na loja?", "Sim. Você pode combinar seu pedido pelo WhatsApp e retirar diretamente no balcão."],
                ["Como faço para agendar banho e tosa?", "O atendimento de banho e tosa é feito mediante agendamento prévio pelo WhatsApp."],
                ["Quais formas de pagamento são aceitas?", "A loja informa aceitar cartões de crédito e débito, Pix e pagamento por aproximação."]
              ].map(([question, answer]) => <details key={question} className="group rounded-2xl border border-[#e7e3d8] bg-white p-5 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-[#244b35] marker:hidden">{question}<span className="text-xl text-[#c38a20] transition group-open:rotate-45">+</span></summary><p className="mt-3 pr-8 text-sm leading-7 text-[#68766a]">{answer}</p></details>)}
            </div>
          </div>
        </section>

        {/* Horários e contato */}
        <section id="contato" className="px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#174b34] text-white shadow-2xl shadow-[#174b34]/15">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12"><span className="text-xs font-black uppercase tracking-[.2em] text-[#f2c24c]">Estamos esperando por vocês</span><h2 className="mt-4 text-3xl font-black sm:text-4xl">Vamos cuidar bem do seu melhor amigo?</h2><p className="mt-4 max-w-lg leading-7 text-white/75">Fale com a equipe para consultar produtos, combinar a retirada, verificar o delivery ou agendar o banho e tosa.</p><a href={whatsapp("Olá! Vim pelo site e gostaria de falar com a loja.")} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f2c24c] px-7 py-4 text-sm font-black text-[#263b2c] transition hover:-translate-y-1 hover:bg-[#ffcf5a]"><WhatsAppIcon /> (12) 99154-6858</a><p className="mt-3 text-xs text-white/60">Clique para iniciar uma conversa pelo WhatsApp.</p></div>
              <div className="bg-[#123e2c] p-8 sm:p-12"><h3 className="text-xl font-black">Horário de funcionamento</h3><div className="mt-6 space-y-4 text-sm"><div className="flex justify-between gap-4 border-b border-white/15 pb-3"><span className="text-white/75">Segunda a sexta</span><strong>08h às 18h</strong></div><div className="flex justify-between gap-4 border-b border-white/15 pb-3"><span className="text-white/75">Sábado</span><strong>08h às 14h</strong></div><div className="flex justify-between gap-4 border-b border-white/15 pb-3"><span className="text-white/75">Domingo</span><strong>Fechado</strong></div></div><div className="mt-8 rounded-2xl bg-white/10 p-5"><p className="font-extrabold">Formas de pagamento</p><p className="mt-2 text-sm leading-6 text-white/75">Crédito, débito, Pix e pagamento por aproximação.</p></div><p className="mt-6 text-xs leading-5 text-white/55">Endereço e localização: consulte pelo WhatsApp ou acesse o perfil da loja no Google Maps.</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#102f23] px-5 py-10 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row"><div><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f2c24c] text-[#17452f]"><Paw className="h-6 w-6" /></span><div><p className="font-black tracking-wide">CASA DE RAÇÕES MARTIN DE SÁ</p><p className="text-xs text-white/55">Tudo para seu melhor amigo.</p></div></div></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70"><a href="#produtos" className="hover:text-white">Produtos</a><a href="#comodidade" className="hover:text-white">Delivery</a><a href="#banho-tosa" className="hover:text-white">Banho e tosa</a><a href="#avaliacoes" className="hover:text-white">Avaliações</a><a href="#contato" className="hover:text-white">Contato</a></div></div><div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-xs text-white/45">© {new Date().getFullYear()} Casa de Rações Martin de Sá. Prévia demonstrativa desenvolvida por Yan Dal Belo — Web Development · AI Automation.</div>
      </footer>

      <a href={whatsapp("Olá! Gostaria de falar com a Casa de Rações Martin de Sá.")} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#20bd65] text-white shadow-2xl shadow-black/20 transition hover:scale-110"><WhatsAppIcon /></a>
    </div>
  );
}
