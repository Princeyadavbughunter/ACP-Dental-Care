import React from 'react';

export default function AboutSection() {
    return (
        <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-gold)] mb-6">About ACP Dental Care</h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        ACP Dental Care is a <strong>Multi-Specialty Dental Clinic</strong> led by <strong>Dr. Ashish Chhajlani Jain</strong> (M.D.S. Endodontist).
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
                        With <strong>15+ years of clinical experience</strong>, we specialize in <strong>Microscopic Root Canal Treatments, Dental Implants, and Pediatric Dentistry</strong>. Our clinic is equipped with advanced technology including an <strong>in-house CBCT Scanner</strong> for precise diagnostics.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--brand-dark)] mb-4">Why Choose Us</h3>
                        <ul className="space-y-3">
                            {[
                                "100% Specialist Dentistry",
                                "Technology-Driven (In-house CBCT)",
                                "All Dental Solutions Under One Roof",
                                "Personalised Care, Not Factory Dentistry",
                                "Painless Wisdom Tooth Extraction",
                                "Value for Money Positioning"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                                    <span className="text-[var(--brand-gold)] text-xl">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--brand-dark)] mb-4">Our Specialist</h3>
                        <ul className="space-y-3">
                            {[
                                "Dr. Ashish Chhajlani Jain",
                                "M.D.S. Endodontist (Root Canal Specialist)",
                                "Master in Re-treatment & Microscopic Surgery",
                                "Staff Strength: 6 Qualified Professionals"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                                    <span className="text-[var(--brand-gold)] text-xl">👨‍⚕️</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
