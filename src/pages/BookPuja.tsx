
import PujaCard from "../ui/PujaCrad";

function BookPuja() {

    const pujas = [
    {
      id: 1,
      title: "Amavasya Special Pind Pradaan Til Tarpan Puja & Pitra Dosha...",
      location: "Varanasi Tirth Kshetra, Varanasi, Uttar Pradesh",
      date: "26-May-2025 - , Jyeshtha Amavasya",
      temple: "Pishach Mochan Kund, Varanasi",
      ceremonyType: "Amavasya Special",
      description: "Pind Pradaan, Til Tarpan Puja, & Pitra Dosha Puja for the Salvation of all Ancestors",
      image: "https://sugamdarshan.com/assets/images/services/services-bg-1.jpg",
    },
    {
      id: 2,
      title: "Sundar Kand Path and 1008 Karya Siddhi....",
      location: "Hanuman Garhi, Sai Nagar, Ayodhya, Uttar Pradesh 224123",
      date: "12-May-2025 - , Vaishakh Purnima",
      temple: "Hanuman Garhi, Ayodhya",
      ceremonyType: "Magh Purnima Special",
      description: "Sundar Kand Path & 1008 Karya Siddhi Beej Mantra Jaap &",
      image: "https://sugamdarshan.com/assets/images/services/services-bg-1.jpg",
    },
    {
      id: 3,
      title: "Swarna Akarshan Bhairav Yagna and Ashtakam...",
      location: "Varanasi Tirth Kshetra, Varanasi, Uttar Pradesh",
      date: "15-May-2025 - , Masik Kalasthmi",
      temple: "Kashi Tirth Kshetra",
      ceremonyType: "Kalasthmi Special",
      description: "11000 Swarna Akarshan Bhairav Yagna and Ashtakam Path on Kalasthmi Tithi",
      image: "https://sugamdarshan.com/assets/images/services/services-bg-1.jpg",
    },
  ];

  return (
  <section className="relative z-1">
  <div className="relative w-full  md:h-[90vh] lg:h-screen">
    {/* Content */}
    <div className="relative z-[999] max-w-6xl mx-auto px-4 pt-16 md:pt-24 pb-20">
      {/* Header */}
      <div className="text-center text-white mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center justify-center text-orange-500">
          <span className="text-orange-300 mr-3">卐</span>
          Our Puja Seva
          <span className="text-orange-300 ml-3">卐</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
          Book Pujas in your and your family's name at renowned temples in India. You will
          also receive a video of the Puja and Prasad along with divine blessings.
        </p>
      </div>

      {/* Cards */}
      <div className="flex gap-6 overflow-x-auto sm:overflow-visible px-2 hide-scrollbar sm:flex-wrap sm:justify-center">
        {pujas.map((puja) => (
          <div
            key={puja.id}
            className="flex-shrink-0 w-[85%] sm:w-[300px] md:w-[350px] relative"
          >
            <PujaCard puja={puja} />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
}

export default BookPuja