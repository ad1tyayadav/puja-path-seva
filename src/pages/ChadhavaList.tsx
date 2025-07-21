import ChadhavaCard from "../ui/ChadhavaCard";

const chadhavaItems = [
  {
    id: "ganesha",
    title: "Ganesh Chaturthi Chadhava",
    description: "Offer sacred vastra, bhog, and deep daan to Lord Ganesha for prosperity.",
    image: "/assets/Ganesh1.png",
    location: "Siddhivinayak Temple, Mumbai",
    date: "30 August 2025",
    joined: 15,
    price: 751,
  },
  {
    id: "durga",
    title: "Navratri Chadhava",
    description: "Invoke divine blessings by offering Shringar and Vastra to Maa Durga.",
    image: "/assets/Kedarnath.jpg",
    location: "Vaishno Devi, Jammu",
    date: "15 October 2025",
    joined: 22,
    price: 1101,
  },
];

export default function ChadhavaList() {
  return (
    <section className="bg-[#fffaf5] py-10 px-4">
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {chadhavaItems.map((item) => (
          <ChadhavaCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}
