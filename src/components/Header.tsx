import Image from "next/image";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="relative z-50 glass shadow-sm p-4 md:py-4 transition-all duration-300">
      <div className="text-center max-w-7xl mx-auto md:flex md:items-center md:justify-between md:text-left">
        <div className="md:flex md:items-center md:gap-8">
          <Image
            src="/images/acplogo.jpg"
            alt="ACP Dental Care"
            width={220}
            height={55}
            className="h-auto mx-auto mb-4 md:mb-0 md:mx-0 hover:scale-105 transition-transform duration-300"
          />
          <a
            href="https://maps.app.goo.gl/eW4DgB7JxTWCkiRz6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-700 mb-4 md:mb-0 hover:text-[var(--brand-gold)] transition-colors cursor-pointer block tracking-wide"
          >
            <span className="mr-1 text-lg">📍</span>
            <span className="border-b border-transparent hover:border-[var(--brand-gold)] transition-all">
              Jalaram 2 Street 2, University Road, Near SBI Bank, Rajkot – 360007
            </span>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:gap-4">
          <button
            onClick={onBookAppointment}
            className="bg-gradient-to-r from-[var(--brand-gold)] to-[#b48e2d] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm tracking-wider uppercase"
          >
            Book Appointment
          </button>
          <a
            href="tel:+918866697133"
            className="bg-white text-[var(--brand-dark)] border-2 border-[var(--brand-dark)] px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 text-sm tracking-wider uppercase text-center"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}