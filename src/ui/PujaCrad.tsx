import React from "react";
import WhiteCard from "./WhiteCard";

interface Puja {
  id: number;
  title: string;
  location: string;
  date: string;
  temple: string;
  ceremonyType: string;
  description: string;
  image: string;
}

const PujaCard: React.FC<{ puja: Puja }> = ({ puja }) => {
  return (
     <div className="relative w-[350px] flex flex-col">
      {/* Image */}
      <div className="h-80 w-full rounded-2xl overflow-hidden shadow-lg">
        <img
          src={puja.image}
          alt={puja.title}
          className="w-full h-full object-cover"
        />
      </div>

      <WhiteCard puja={puja} />
    </div>
  );
};

export default PujaCard;
