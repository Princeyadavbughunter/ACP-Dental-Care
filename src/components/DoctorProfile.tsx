import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

interface Doctor {
  name: string;
  qualification: string;
  description: string;
  image: string;
  experience?: string;
  specialization?: string; // Optional simpler title for visual hierarchy
}

const doctors: Doctor[] = [
  {
    name: "Dr. Ashish Chhajlani Jain",
    qualification: "M.D.S. Endodontist (Root Canal Specialist)",
    experience: "15+ Years Experience",
    specialization: "Microscopic Root Canal Specialist",
    description: "Master in Re-treatment & Microscopic Surgery (Japan). Specialist in Microscopic, Single Sitting RCT.",
    image: "/images/doctor/dr.ashis.jpeg"
  },
  {
    name: "Dr. Charmee Padaliya Chhajlani",
    qualification: "B.D.S., M.S. Implantology (Spain)",
    specialization: "Master in Oral Implantology & Rehabilitation",
    description: "Fellow AOI in Oral Implantology. Dedicated to providing advanced implant solutions and comprehensive oral rehabilitation.",
    image: "/images/doctor/drcharmee.jpg"
  }
];

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">Meet Our <span className="text-gradient-gold">Expert Team</span></h2>
          <div className="w-24 h-1 bg-[var(--brand-gold)] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-light">
            A collaborative team of specialists dedicated to providing world-class dental care with precision and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative pt-8 pb-4 bg-gradient-to-b from-gray-50 to-white flex justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-full border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500 ring-4 ring-gray-50 group-hover:ring-brandTeal/20">
                  <div className="w-full h-full relative rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {doctor.experience && (
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[var(--brand-gold)] text-white text-xs font-bold py-1 px-4 rounded-full shadow-lg whitespace-nowrap z-10">
                      {doctor.experience}
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex-grow flex flex-col text-center relative">
                {/* Decorative quote icon */}
                <div className="absolute top-4 right-6 text-4xl text-gray-100 font-serif opacity-50 group-hover:text-brandTeal/10 transition-colors">"</div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:text-[var(--brand-gold)] transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-[var(--brand-dark)] font-semibold text-sm uppercase tracking-wider mb-4">
                  {doctor.qualification}
                </p>
                <div className="w-12 h-0.5 bg-gray-100 mx-auto mb-5 group-hover:bg-[var(--brand-gold)]/30 transition-colors"></div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow font-light">
                  {doctor.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={onBookAppointment}
            className="bg-[var(--brand-dark)] text-white py-4 px-10 rounded-full font-bold text-lg hover:bg-[var(--brand-gold)] hover:text-white transition-all duration-300 shadow-lg border-2 border-[var(--brand-dark)] hover:border-transparent hover:shadow-yellow-500/30"
          >
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}