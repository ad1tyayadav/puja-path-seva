import BentoCard from "../ui/BentoCard";

const cardData = [
  {
    title: "Special Puja",
    description: "Book personalized pujas performed by expert priests at sacred temples across India. These pujas are conducted with your name and gotra, and you’ll receive prasad, blessings, and videos directly to your home.",
    ctaLabel: "Book Now",
    ctalink: "https://pujapathseva.com",
    bgImage: "https://kashiarchan.com/assets/img/offre_img_1.png",
    width: "w-full md:w-[60%]",
    align: "right",
  },
  {
    title: "Bhairav Sadhana",
    description: "Bhairav Sadhana invokes Lord Bhairav’s divine energy to remove negativity and unlock spiritual protection. Ideal for those seeking strength, protection, and fast progress in sadhana.",
    ctaLabel: "Book Now",
    ctalink: "https://pujapathseva.com",
    bgImage: "https://kashiarchan.com/assets/img/offre_img_2.png",
    width: "w-full md:w-[38%]",
    align: "left",
  },
  {
    title: "Kundali Consultation",
    description: "Consult with experienced astrologers for accurate kundali analysis. Get guidance on career, marriage, health, and dosha remedies tailored to your chart.",
    ctaLabel: "Contribute Now",
    ctalink: "https://pujapathseva.com",
    bgImage: "https://kashiarchan.com/assets/img/offre_img_3.png",
    width: "w-full md:w-[38%]",
    align: "left",
  },
  {
    title: "Charitable Activity",
    description: "Support traditional Gurukuls, cowsheds, and spiritual institutions. Your contribution helps provide meals, education, and shelter to saints and underprivileged students.",
    ctaLabel: "Contribute Now",
    ctalink: "https://pujapathseva.com",
    bgImage: "https://kashiarchan.com/assets/img/offre_img_4.png",
    width: "w-full md:w-[60%]",
    align: "right",
  },
  {
    title: "Monthly Puja & Seva Events",
    description: "Participate in recurring monthly pujas and seva rituals to align yourself with auspicious timings. These are performed with full Vedic tradition and your family’s name.",
    ctaLabel: "Book Now",
    ctalink: "https://pujapathseva.com",
    bgImage: "https://kashiarchan.com/assets/img/offre_img_1.png",
    width: "w-full md:w-[60%]",
    align: "left",
  },
  {
    title: "Chadhava",
    description: "Present Chadhava at renowned temples across India in your or your family’s name. This act of devotion brings divine blessings, peace, and spiritual merit.",
    ctaLabel: "Offer Now",
    ctalink: "https://pujapathseva.com",
    bgImage: "https://kashiarchan.com/assets/img/offre_img_5.png",
    width: "w-full md:w-[38%]",
    align: "right",
  },
];

const SpiritualPathwaysSection = () => {
  return (
    <section className="bg-[#fffaf3] relative z-[1] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#391b1b] mb-12">
          Spiritual Pathways We Offer
        </h2>

        <div className="flex flex-wrap gap-6 justify-between">
          {cardData.map((card, index) => (
            <BentoCard
              key={index}
              title={card.title}
              description={card.description}
              ctaLabel={card.ctaLabel}
              ctaLink={card.ctalink}
              bgImage={card.bgImage}
              width={card.width}
              align={card.align}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpiritualPathwaysSection;
