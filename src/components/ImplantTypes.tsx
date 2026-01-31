import Image from "next/image";

export default function AreaOfExpertise() {
  const expertiseData = [
    {
      title: "Root Canal Treatment",
      description: "Microscopic, Single Sitting RCT & Re-Root Canal Treatment. Painless and precise.",
      icon: "🦷"
    },
    {
      title: "Dental Implants",
      description: "Advanced implant solutions for missing teeth. In-house CBCT available.",
      icon: "🔩"
    },
    {
      title: "Complete Dentures",
      description: "BPS Complete Denture (Swiss Technology) for comfortable chewing.",
      icon: "😁"
    },
    {
      title: "Orthodontics",
      description: "Braces and aligners for correcting teeth alignment.",
      icon: "✨"
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized care for children using Nitrous Oxide for anxiety control.",
      icon: "👶"
    },
    {
      title: "Periodontal Treatment",
      description: "Gum treatments to ensure healthy foundation for your teeth.",
      icon: "🌿"
    },
    {
      title: "OSMF Treatment",
      description: "Specialized treatment for Oral Submucous Fibrosis.",
      icon: "🏥"
    },
    {
      title: "Wisdom Tooth Extraction",
      description: "Painless surgery for impacted wisdom teeth.",
      icon: "🔬"
    },
    {
      title: "Tooth Whitening",
      description: "Brighten your smile with advanced whitening procedures.",
      icon: "💎"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Smile designing and aesthetic corrections.",
      icon: "🎨"
    },
    {
      title: "Full Mouth Rehabilitation",
      description: "Comprehensive restoration of all teeth (FMR).",
      icon: "🔄"
    },
    {
      title: "In-house CBCT & OPG",
      description: "Advanced diagnostics with CBCT scanner.",
      icon: "📷"
    }
  ];

  return (
    <section className="relative bg-[#0b1120] text-white p-4 md:p-12 lg:p-16 pb-24 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-dark)]/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--brand-gold)]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 tracking-tight">
            Our <span className="text-gradient-gold">Area of Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--brand-gold)] mx-auto rounded-full mb-6 opacity-80"></div>
          <p className="text-center text-gray-400 mb-8 md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            At ACP Dental Care, we provide comprehensive specialist dentistry under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-gray-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-center mb-2 text-xl text-white group-hover:text-[var(--brand-gold)] transition-colors">{item.title}</h3>
              <p className="text-center text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}