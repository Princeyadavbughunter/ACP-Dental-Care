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
            Patient Transformation Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Patient <span className="text-gradient-gold">Success</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--brand-dark)] mx-auto rounded-full opacity-80"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {[
            "/images/results/insta/Are you afraid of dental treatment Are you scared of painful Injections Check what our Patient .mp4",
            "/images/results/insta/Full Mouth Rehabilitation = Full Confidence!Toh मुस्कान को दो नया जीवन – खाना, बोलना और मुस्कुरा.mp4",
            "/images/results/insta/Transform Your Smile, Transform Your Life! ✨Say goodbye to dental problems and hello to a brand-.mp4"
          ].map((src, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg h-[450px] border-4 border-white hover:border-[var(--brand-gold)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-black"
            >
              <video
                src={src}
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[var(--brand-gold)] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Success Story
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="text-center bg-white p-6 md:p-8 rounded-2xl shadow-xl mt-8 border border-gray-100">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Experience Your Own <span className="text-gradient-gold">Smile Success Story</span>
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Witness the real results of our advanced dental treatments. At ACP Dental Care, we combine expertise with compassion to give you the confidence you deserve.
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
