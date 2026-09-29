import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { LogoMarquee } from "@/components/ui/logo-marquee";
import { AnimatedCounter, Reveal, GlassCard, Particles } from "@/components/ui/premium-effects";
import { MapPin, Phone, Clock, MessageCircle, Shield, Zap, Award, Wrench, Star, CheckCircle } from "lucide-react";

const brandLogos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png", alt: "Samsung" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png", alt: "LG" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Electrolux_logo_new.svg/1280px-Electrolux_logo_new.svg.png", alt: "Electrolux" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Whirlpool_Corporation_Logo_%28as_of_2017%29.svg/1200px-Whirlpool_Corporation_Logo_%28as_of_2017%29.svg.png", alt: "Whirlpool" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Panasonic_logo_%28Blue%29.svg/2560px-Panasonic_logo_%28Blue%29.svg.png", alt: "Panasonic" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Bosch-logotype.svg/2560px-Bosch-logotype.svg.png", alt: "Bosch" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Brastemp_logo_2022.svg/1280px-Brastemp_logo_2022.svg.png", alt: "Brastemp" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Consul_logo.svg/1280px-Consul_logo.svg.png", alt: "Consul" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Midea_logo.svg/2560px-Midea_logo.svg.png", alt: "Midea" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Philco_logo.svg/2560px-Philco_logo.svg.png", alt: "Philco" },
];

const catalog = [
  {
    id: 1,
    name: "Geladeira Brastemp Frost Free Duplex",
    description: "Revisada e com garantia de 90 dias. Excelente estado de conservação.",
    price: "R$ 1.850",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Lava e Seca Samsung EcoBubble",
    description: "11kg, Motor Digital Inverter, higienizada e testada rigorosamente.",
    price: "R$ 2.400",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Máquina de Lavar Electrolux 12kg",
    description: "Painel digital, cesto inox. Perfeita para o dia a dia da sua família.",
    price: "R$ 1.100",
    image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Freezer Vertical Consul",
    description: "Ideal para comércios e grandes famílias. Gela super rápido.",
    price: "R$ 1.500",
    image: "https://images.unsplash.com/photo-1605615714041-3d7bebd33e4b?auto=format&fit=crop&q=80&w=800",
  },
];

const diferenciais = [
  { icon: Shield, title: "Garantia de 90 Dias", desc: "Todos os serviços com garantia comprovada." },
  { icon: Zap, title: "Atendimento Rápido", desc: "Diagnóstico e reparo no menor prazo possível." },
  { icon: Award, title: "Peças Originais", desc: "Utilizamos somente componentes certificados." },
  { icon: Wrench, title: "+10 Anos de Experiência", desc: "Equipe técnica altamente qualificada." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a192f] text-slate-100 font-sans">
      <Particles />
      <HeroGeometric />

      {/* ── BRAND SLIDER ── */}
      <section className="relative z-10 border-t border-blue-900/30 bg-[#071224]">
        <Reveal className="pt-10 pb-2 text-center">
          <p className="text-blue-300/50 text-xs font-semibold tracking-[0.25em] uppercase">
            Marcas que atendemos
          </p>
        </Reveal>
        <LogoMarquee logos={brandLogos} />
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section className="relative z-10 py-20 md:py-28 px-4 md:px-6 bg-[#0a192f] border-t border-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
              Por que escolher a <span className="text-cyan-400">Eficaz</span>?
            </h2>
            <p className="text-blue-200/60 text-base md:text-lg max-w-2xl mx-auto">
              Referência em manutenção de linha branca em Goiânia e região metropolitana.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((d, i) => (
              <GlassCard key={d.title} delay={i * 0.1}>
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                  <d.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{d.title}</h3>
                <p className="text-blue-200/60 text-sm leading-relaxed">{d.desc}</p>
              </GlassCard>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: 3500, suffix: "+", label: "Aparelhos Reparados" },
              { value: 10, suffix: "+", label: "Anos de Mercado" },
              { value: 98, suffix: "%", label: "Clientes Satisfeitos" },
              { value: 90, suffix: " dias", label: "Garantia Mínima" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="text-center py-6">
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-blue-300/50 text-xs font-semibold tracking-widest uppercase">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATALOG SECTION ── */}
      <section id="catalogo" className="relative z-10 py-20 md:py-28 px-4 md:px-6 bg-[#071224] border-t border-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
              Catálogo de Eletrodomésticos
            </h2>
            <p className="text-blue-200/60 text-base md:text-lg max-w-2xl mx-auto">
              Aparelhos seminovos revisados com rigorosa garantia de qualidade Eficaz Manutenção.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {catalog.map((product, i) => (
              <GlassCard key={product.id} delay={i * 0.1} className="!p-0 flex flex-col">
                <div className="h-52 md:h-60 overflow-hidden relative shrink-0 rounded-t-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071224] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-cyan-500/20 backdrop-blur-md rounded-full border border-cyan-400/30">
                    <span className="text-cyan-300 text-xs font-bold">Garantia 90 dias</span>
                  </div>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2 text-white">{product.name}</h3>
                  <p className="text-blue-200/60 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                    <span className="text-xl font-bold text-cyan-400">{product.price}</span>
                    <a
                      href={`https://api.whatsapp.com/send?phone=5562986012147&text=Ol%C3%A1!%20Tenho%20interesse%20no%20produto:%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-0.5"
                    >
                      Comprar
                    </a>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section className="relative z-10 py-20 md:py-28 px-4 md:px-6 bg-[#0a192f] border-t border-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
              Nossos <span className="text-cyan-400">Serviços</span>
            </h2>
            <p className="text-blue-200/60 text-base md:text-lg max-w-2xl mx-auto">
              Assistência técnica especializada para toda a linha branca.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Conserto de Geladeiras",
                desc: "Reparo completo em geladeiras e refrigeradores de todas as marcas. Troca de motor, gás, termostato e componentes eletrônicos.",
                items: ["Frost Free", "Duplex", "Side by Side", "French Door"],
              },
              {
                title: "Lava e Seca / Máquina de Lavar",
                desc: "Manutenção preventiva e corretiva em lavadoras e secadoras. Diagnóstico preciso com equipamentos de última geração.",
                items: ["Lava e Seca", "Top Load", "Front Load", "Centrífugas"],
              },
              {
                title: "Freezers & Outros",
                desc: "Atendemos freezers verticais e horizontais, adega de vinhos, purificadores e bebedouros com a mesma qualidade.",
                items: ["Freezer Vertical", "Freezer Horizontal", "Adega", "Bebedouro"],
              },
            ].map((service, i) => (
              <GlassCard key={service.title} delay={i * 0.15}>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-blue-200/60 text-sm leading-relaxed mb-5">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-blue-100/70">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="relative z-10 py-20 md:py-28 px-4 md:px-6 bg-[#071224] border-t border-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
              O que nossos clientes dizem
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Maria S.", text: "Minha geladeira voltou a funcionar como nova! Atendimento excelente e preço justo. Super recomendo.", rating: 5 },
              { name: "Carlos A.", text: "Consertaram minha lava e seca Samsung que outra assistência disse que não tinha conserto. Profissionais de verdade!", rating: 5 },
              { name: "Fernanda L.", text: "Comprei um freezer seminovo com eles e estou muito satisfeita. Funciona perfeitamente e com garantia.", rating: 5 },
            ].map((t, i) => (
              <GlassCard key={t.name} delay={i * 0.1}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-blue-100/80 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-blue-300/40 text-xs">Cliente verificado</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION & INFO ── */}
      <section className="relative z-10 bg-[#020c1b] py-20 md:py-28 px-4 md:px-6 border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white tracking-tight">Onde nos encontrar</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Endereço</h4>
                  <p className="text-blue-200/60 text-sm md:text-base">
                    Av. Laudelino Gomes, 152 - St. Bela Vista
                    <br />
                    Goiânia - GO, 74823-395
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Telefone / WhatsApp</h4>
                  <p className="text-blue-200/60 text-sm md:text-base">(62) 98601-2147</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Horário de Funcionamento</h4>
                  <p className="text-blue-200/60 text-sm md:text-base">
                    Aberto de Segunda a Sábado
                    <br />A partir das 08:00
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=5562986012147"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Visita
              </a>
              <a
                href="tel:+5562986012147"
                className="px-8 py-4 bg-white/[0.05] hover:bg-white/[0.1] text-white font-bold rounded-xl border border-white/10 hover:border-blue-400/30 transition-all hover:-translate-y-1 text-center"
              >
                Ligar Agora
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden border border-blue-900/30 shadow-2xl relative">
            <iframe
              src="https://maps.google.com/maps?width=100%25&height=600&hl=pt-BR&q=Av.%20Laudelino%20Gomes,%20152%20-%20St.%20Bela%20Vista,%20Goi%C3%A2nia%20-%20GO,%2074823-395+(Eficaz%20Manutencao)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 bg-[#020c1b] py-10 border-t border-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-200/40 text-sm">
              &copy; {new Date().getFullYear()} Eficaz Manutenção. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="tel:+5562986012147" className="text-blue-200/40 hover:text-cyan-400 text-sm transition-colors">
                (62) 98601-2147
              </a>
              <a href="https://api.whatsapp.com/send?phone=5562986012147" target="_blank" rel="noopener noreferrer" className="text-blue-200/40 hover:text-green-400 text-sm transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href="https://api.whatsapp.com/send?phone=5562986012147"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:shadow-[0_4px_30px_rgba(34,197,94,0.6)] transition-all hover:-translate-y-2 z-50 animate-bounce"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </main>
  );
}
