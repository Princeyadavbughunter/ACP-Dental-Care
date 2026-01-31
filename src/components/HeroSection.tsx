import Image from "next/image";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="relative p-4 md:p-12 lg:p-16 max-w-7xl mx-auto overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-gold)]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight tracking-tight text-gray-900">
        Transform Your Smile With<br />
        <span className="text-gradient-gold">ACP Dental Care</span>
      </h1>

      <div className="md:flex md:items-center md:gap-8 md:mb-16">
        <div className="relative rounded-2xl h-64 md:h-[450px] mb-8 md:mb-0 md:flex-1 overflow-hidden shadow-2xl border-4 border-white/50 group hover:scale-[1.02] transition-transform duration-500">
          <div className="bg-black w-full h-full">
            <video
              className="w-full h-full object-cover rounded-xl"
              autoPlay
              muted
              loop
              playsInline
              src="/images/results/AQMjikzwjdffh2q_07zHVE0E13k658xa6IqWaQ5yJVof2Ir9Z758a3MhGM1YSgVNwxr6bhOsoF25NtYPbY_O3QnZUz8JQ9ztEeWvolQ.mp4"
            ></video>
          </div>
        </div>

        {/* Special Offer Section */}
        <div className="md:flex-1 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-dark)] to-[var(--brand-gold)] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-gradient-to-br from-[#1c1c18] to-[#34342d] text-white p-8 rounded-2xl text-center shadow-2xl border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Implant Pricing</h2>
            <div className="w-16 h-1 bg-[var(--brand-gold)] mx-auto rounded-full mb-6 opacity-80"></div>
            <p className="text-3xl md:text-5xl font-bold mb-3 text-white drop-shadow-md">
              ₹30,000
            </p>
            <p className="text-lg md:text-xl font-light mb-6 text-gray-300">per implant</p>
            <p className="text-sm md:text-base mb-8 opacity-80 border-t border-gray-700 pt-4">Starting price mentioned (includes PFM crown)</p>

            <button
              onClick={onBookAppointment}
              className="w-full bg-gradient-to-r from-[#cca53e] to-[#b48e2d] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300 group-hover:ring-2 ring-white/20"
            >
              <div>📞 Book Consultation</div>
              <div className="text-xs font-medium mt-1 opacity-90">Value for money positioning</div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-16 md:flex-row md:justify-center">
        <button
          onClick={onBookAppointment}
          className="bg-[var(--brand-gold)] text-white py-4 px-10 rounded-full font-bold text-lg shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-1 transition-all md:min-w-[240px]"
        >
          Book Consultation
        </button>
        <a
          href="tel:+918866697133"
          className="bg-white text-[var(--brand-dark)] border-2 border-[var(--brand-dark)] py-4 px-10 rounded-full font-bold text-lg text-center shadow-lg hover:bg-gray-50 hover:-translate-y-1 transition-all md:min-w-[240px]"
        >
          Call Now ☏
        </a>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-12">
        <h3 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Why choose <span className="text-gradient-gold">ACP Dental Care?</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {[
            { icon: "/images/heroicons/Experience.png", title: "15+ Years Experience", desc: "Clinical excellence & trust" },
            { icon: "/images/heroicons/premium.png", title: "Specialist Dentistry", desc: "No General Guesswork" },
            { icon: "/images/heroicons/team.png", title: "All Under One Roof", desc: "All Dental Solutions" },
            { icon: "/images/heroicons/sterilization.png", title: "Technology-Driven", desc: "CBCT & OPG In-house" },
            { icon: "/images/heroicons/tech.png", title: "Personalised Care", desc: "Not Factory Dentistry" },
            { icon: "/images/heroicons/painless.png", title: "Value for Money", desc: "Premium Care, Fair Price" }
          ].map((usp, index) => (
            <div
              key={index}
              className="glass p-4 rounded-xl text-center hover:shadow-premium hover:-translate-y-1 transition-all duration-300 cursor-default group"
            >
              <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Image src={usp.icon} alt={usp.title} width={32} height={32} className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-sm md:text-base text-gray-900 mb-1 leading-tight">{usp.title}</h4>
              <p className="text-xs text-gray-500 leading-snug">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-6 md:p-10 rounded-2xl md:max-w-4xl md:mx-auto">
        <h3 className="font-bold text-[var(--brand-dark)] mb-6 md:text-2xl text-center border-b pb-4">Our Commitment to Excellence</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="flex items-start gap-3">
            <span className="text-[var(--brand-gold)] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700"><strong>15+ Years of Excellence</strong> caring for smiles with dedication.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--brand-gold)] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700">Strict <strong>F.D.A. guidelines</strong> for total infection control.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--brand-gold)] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700">Ensuring patients keep their teeth strong & healthy <strong>forever</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--brand-gold)] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700">Focus on <strong>preventive care</strong> and regular checkups.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--brand-gold)] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700">Belief in thorough <strong>patient education</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--brand-gold)] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700">Practice built on <strong>satisfied patient referrals</strong>.</span>
          </li>
        </ul>
        <div className="mt-8 text-center">
          <button
            onClick={onBookAppointment}
            className="bg-[var(--brand-dark)] text-white py-3 px-8 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full md:w-auto"
          >
            Request a Call Back ➤
          </button>
          <small className="block mt-3 text-gray-500 text-sm">
            Includes Professional Consultation & Digital Scan
          </small>
        </div>
      </div>
    </section>
  );
}