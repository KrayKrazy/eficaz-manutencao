import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function Home() {
  const catalog = [
    {
      id: 1,
      name: "Geladeira Brastemp Frost Free Duplex",
      description: "Revisada e com garantia de 90 dias. Excelente estado.",
      price: "R$ 1.850",
      image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      name: "Lava e Seca Samsung EcoBubble",
      description: "11kg, Motor Digital Inverter, higienizada e testada.",
      price: "R$ 2.400",
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      name: "Máquina de Lavar Electrolux 12kg",
      description: "Painel digital, cesto inox. Perfeita para o dia a dia.",
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

  return (
    <main className="min-h-screen bg-[#0a192f] text-slate-100 font-sans">
      <HeroGeometric />

      {/* CATALOG SECTION */}
      <section id="catalogo" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Catálogo de Eletrodomésticos</h2>
          <p className="text-blue-200 text-lg">Aparelhos seminovos revisados com rigorosa garantia de qualidade Eficaz Manutenção.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {catalog.map((product) => (
            <div key={product.id} className="bg-[#112240] rounded-2xl overflow-hidden border border-blue-900/50 hover:border-blue-500/50 transition-all group">
              <div className="h-60 overflow-hidden relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-all" />
              </div>
              <div className="p-6 flex flex-col h-[220px]">
                <h3 className="text-xl font-bold mb-2 text-white">{product.name}</h3>
                <p className="text-blue-200/80 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl lg:text-2xl font-bold text-cyan-400">{product.price}</span>
                  <a 
                    href={`https://api.whatsapp.com/send?phone=5562986012147&text=Ol%C3%A1!%20Tenho%20interesse%20no%20produto:%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION & INFO SECTION */}
      <section className="bg-[#020c1b] py-24 px-6 border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Onde nos encontrar</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Endereço</h4>
                  <p className="text-blue-200">Av. Laudelino Gomes, 152 - St. Bela Vista<br/>Goiânia - GO, 74823-395</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Telefone / WhatsApp</h4>
                  <p className="text-blue-200">(62) 98601-2147</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Horário de Funcionamento</h4>
                  <p className="text-blue-200">Aberto de Segunda a Sábado<br/>A partir das 08:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-blue-900/50 shadow-2xl relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3821.579124483856!2d-49.263774523992224!3d-16.721136584055273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef0e7ac3e39b5%3A0x451b7f4287586195!2sEficaz%20Manuten%C3%A7%C3%A3o%20-%20Conserto%20de%20Geladeira%20e%20Lava%20e%20Seca!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020c1b] py-8 text-center text-blue-200/50 text-sm border-t border-blue-900/20">
        <p>&copy; {new Date().getFullYear()} Eficaz Manutenção. Todos os direitos reservados.</p>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://api.whatsapp.com/send?phone=5562986012147"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all hover:-translate-y-2 z-50 animate-bounce"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </main>
  );
}
