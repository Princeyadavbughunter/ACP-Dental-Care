'use client';

import Image from "next/image";

interface BeforeAfterGalleryProps {
  onBookAppointment: () => void;
}

export default function BeforeAfterGallery({ onBookAppointment }: BeforeAfterGalleryProps) {


  return (
    <section className="p-4 md:p-8 lg:p-12 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="text-[var(--brand-gold)] text-sm md:text-base font-medium mb-2 uppercase tracking-widest">
            Results That Speak
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Happy <span className="text-gradient-gold">Clients</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--brand-dark)] mx-auto rounded-full opacity-80"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            "/images/results/clint1.jpeg",
            "/images/results/clint2.jpeg",
            "/images/results/clint3.jpeg",
            "/images/results/clint4.jpeg"
          ].map((src, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg h-[300px] border-4 border-white hover:border-[var(--brand-gold)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-6">
                <span className="text-white font-bold tracking-wide">Patient Success Story</span>
              </div>
              <Image
                src={src}
                alt={`Happy Client ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-lg mt-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Ready for Your <span className="text-[var(--brand-gold)]">Smile Transformation?</span>
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who have transformed their smiles with Dr. Ashish Chhajlani Jain &apos;s expertise. Book your consultation today and take the first step towards your dream smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookAppointment}
              className="bg-[var(--brand-dark)] text-white px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-colors"
            >
              Book Consultation
            </button>
            <a
              href="tel:+918866697133"
              className="bg-[var(--brand-gold)] text-white px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-colors text-center"
            >
              Call Now: +91 8866697133
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Professional consultation includes digital scan
          </p>
        </div>
      </div>
    </section>
  );
}
