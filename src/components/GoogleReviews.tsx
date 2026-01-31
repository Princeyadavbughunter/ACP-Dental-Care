import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Dhaval Damani",
      initials: "DD",
      date: "4 months ago",
      review: "I'm thoroughly impressed with the exceptional service provided by Dr. Ashish Chhajlani and Dr. Charmi Chhajlani at ACP Dental Clinic! My father recently underwent a partial denture procedure, and we're completely satisfied with the results. The doctors' warm nature, expert advice, and premium service made the experience truly outstanding. What's more impressive is that they offer top-notch treatment at affordable prices. We're deeply grateful for their outstanding work and highly recommend ACP Dental Clinic to everyone."
    },
    {
      name: "Dhruv Goswami",
      initials: "DG",
      date: "1 months ago",
      review: "I recently had a successful accident tooth recovery, Root Canal Treatment, and post-accident surgery at this dental clinic and I couldn't be more impressed. The doctor's humble nature and friendly tone made me feel at ease throughout the entire process. The clinic is equipped with top-notch hospital-level equipment which further added to my confidence in their abilities. Overall, my experience with the Root Canal Treatment was excellent and I highly recommend ACP clinic for anyone in need of dental care!"
    },
    {
      name: "Jadeja Vijaysinh",
      initials: "JV",
      date: "8 months ago",
      review: "My wife is pregnant and having issue in her mouth we have consulted so many dentist but didn't get any proper solution.We have refred to ACP dental care by one of our known Gynec and get the treatment and my wife recovered in just 5 days without any problem even didn't take medicines"
    },
    {
      name: "kaushal trivedi",
      initials: "KT",
      date: "6 months ago",
      review: "I had a great experience at ACP DENTAL CARE the staff is amazing and the atmosphere is very much warm and friendly. The clinic has most advanced, latest technology. They have a team of experts.i feel I am in good hands now for any of my dental care. I Recommend ACP DENTAL CARE to everyone for their dental solutions."
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <Image
            src="/images/google.png"
            alt="Google Logo"
            width={128}
            height={48}
            className="mx-auto mb-4 object-contain"
          />
          <h2 className="text-xl md:text-3xl font-bold">What Our Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--brand-dark)] text-white rounded-full flex items-center justify-center font-bold">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold md:text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}