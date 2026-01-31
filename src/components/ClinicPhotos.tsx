import Image from 'next/image';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  return (
    <section className="bg-gray-50 p-4 md:p-12 lg:p-16 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-gray-900 tracking-tight">Our <span className="text-gradient-gold">State-of-the-Art</span> Clinic</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {['WhatsApp Image 2025-04-24 at 12.31.34 PM (1).jpeg', 'WhatsApp Image 2025-04-24 at 12.31.36 PM (2).jpeg', 'WhatsApp Image 2025-04-24 at 12.31.38 PM (1).jpeg', 'WhatsApp Image 2025-04-24 at 12.31.39 PM.jpeg'].map((img, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10 duration-500"></div>
              <Image
                src={`/images/clinic/${img}`}
                alt={`Clinic Photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={i <= 2}
              />
              {/* Optional overlay icon/text on hover could go here, keeping it clean for now */}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onBookAppointment}
            className="bg-brandBlue text-white py-4 px-12 rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-lg transition-all shadow-md transform hover:-translate-y-1"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
} 