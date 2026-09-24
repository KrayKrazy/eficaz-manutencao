import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function Home() {
  const services = [
    {
      id: 1,
      name: "ManutenÃ§Ã£o de Geladeiras",
      description: "Reparo em geladeiras comuns, duplex e comerciais. DiagnÃ³stico preciso para resolver defeitos de refrigeraÃ§Ã£o.",
      image: "/images/geladeira_manutencao.jpg",
    },
    {
      id: 2,
      name: "Conserto de Lavadoras",
      description: "Especialistas em lavadoras tradicionais (abertura superior). Consertamos vazamentos, motor, placa e centrifugaÃ§Ã£o.",
      image: "/images/lavadora_manutencao.jpg",
    },
    {
      id: 3,
      name: "Reparo em Lava e Seca",
      description: "AssistÃªncia tÃ©cnica avanÃ§ada para mÃ¡quinas Lava e Seca. ManutenÃ§Ã£o preventiva e corretiva.",
      image: "/images/lava_e_seca_manutencao.jpg",
    },
    {
      id: 4,
      name: "Micro-ondas, Fornos e Freezers",
      description: "Conserto de micro-ondas, fornos elÃ©tricos (com grill) e manutenÃ§Ã£o em freezers horizontais e verticais.",
      image: "/images/microondas_forno_manutencao.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a192f] text-slate-100 font-sans">
      <HeroGeometric />

      {/* SERVICES SECTION */}
      <section id="servicos" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Nossos ServiÃ§os Especializados</h2>
          <p className="text-blue-200 text-base md:text-lg">TÃ©cnicos experientes para resolver o problema do seu eletrodomÃ©stico de forma rÃ¡pida e orgÃ¢nica.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-[#112240] rounded-2xl overflow-hidden border border-blue-900/50 hover:border-blue-500/50 transition-all group flex flex-col">
              <div className="h-52 md:h-60 overflow-hidden relative shrink-0">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-all" />
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{service.name}</h3>
                <p className="text-blue-200/80 text-sm mb-6 flex-grow">{service.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <a 
                    href={`https://api.whatsapp.com/send?phone=5562986012147&text=Ol%C3%A1!%20Preciso%20de%20assist%C3%AAncia%20t%C3%A9cnica%20para:%20${encodeURIComponent(service.name)}`}
                    target="_blank"
                    className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-lg text-sm font-bold transition-colors"
                  >
                    Agendar Visita
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION & INFO SECTION */}
      <section className="bg-[#020c1b] py-16 md:py-24 px-4 md:px-6 border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Onde nos encontrar</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">EndereÃ§o</h4>
                  <p className="text-blue-200 text-sm md:text-base">Av. Laudelino Gomes, 152 - St. Bela Vista<br/>GoiÃ¢nia - GO, 74823-395</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Telefone / WhatsApp</h4>
                  <p className="text-blue-200 text-sm md:text-base">(62) 98601-2147</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">HorÃ¡rio de Funcionamento</h4>
                  <p className="text-blue-200 text-sm md:text-base">Aberto de Segunda a SÃ¡bado<br/>A partir das 08:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden border border-blue-900/50 shadow-2xl relative">
            <iframe 
              src="https://maps.google.com/maps?q=Av.+Laudelino+Gomes,+152+-+St.+Bela+Vista,+GoiÃ¢nia+-+GO,+74823-395&t=&z=15&ie=UTF8&iwloc=&output=embed" 
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
        <p>&copy; {new Date().getFullYear()} Eficaz ManutenÃ§Ã£o. Todos os direitos reservados.</p>
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
