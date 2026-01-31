import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Image
            src="/images/acplogo.jpg"
            alt="ACP Dental Care"
            width={240}
            height={60}
            className="mx-auto mb-6 h-auto opacity-90 hover:opacity-100 transition-opacity"
          />
          <p className="text-gray-500 text-sm max-w-xl mx-auto font-light">
            Specialty: Multi-Specialty Dentistry. In-house Endodontist, Implantologist & Pediatric Dentist.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left mb-12">
          <div className="group">
            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2 inline-block md:block md:w-full group-hover:text-[var(--brand-gold)] transition-colors">Contact Us</h3>
            <a href="tel:+918866697133" className="block text-[var(--brand-gold)] font-bold text-xl md:text-2xl hover:text-black transition-colors mb-2">+91 8866697133</a>
            <a href="mailto:acpdentalcare@gmail.com" className="block text-gray-600 hover:text-[var(--brand-gold)] transition-colors">acpdentalcare@gmail.com</a>
          </div>

          <div className="group">
            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2 inline-block md:block md:w-full group-hover:text-[var(--brand-gold)] transition-colors">Open Hours</h3>
            <div className="text-gray-600 text-lg flex flex-col gap-1">
              <p><span className="text-[var(--brand-gold)]">Morning:</span> 9:00 AM – 1:30 PM</p>
              <p><span className="text-[var(--brand-gold)]">Evening:</span> 4:00 PM – 8:00 PM</p>
            </div>
          </div>

          <div className="group">
            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2 inline-block md:block md:w-full group-hover:text-[var(--brand-gold)] transition-colors">Location</h3>
            <a
              href="https://maps.app.goo.gl/eW4DgB7JxTWCkiRz6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[var(--brand-gold)] transition-colors cursor-pointer block leading-relaxed group-hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start justify-center md:justify-start gap-2">
                <span className="text-2xl mt-0.5">📍</span>
                <span>ACP Dental Care, Jalaram 2 Street 2, University Road, Near SBI Bank, Rajkot, Gujarat – 360007</span>
              </div>
            </a>
            <p className="text-xs text-gray-400 mt-2 hover:text-black transition-colors">Click to open in Google Maps</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-8 bg-gray-100 rounded-2xl overflow-hidden h-[300px] md:h-[400px] shadow-inner border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4629.019831790979!2d70.7748834!3d22.290132399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca47bde4450d%3A0x93ac230756fe5bde!2sACP%20Dental%20Care!5e1!3m2!1sen!2sin!4v1769877861551!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ACP Dental Care Location - Rajkot"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ACP Dental Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}