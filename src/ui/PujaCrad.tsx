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
  joined: number | string;
}

const PujaCard: React.FC<{ puja: Puja }> = ({ puja }) => {
  return (
    <div className="relative w-full sm:w-[300px] md:w-[350px] flex flex-col gap-0">
      {/* Image */}
      <div className="h-44 sm:h-52 md:h-60 w-full rounded-t-2xl overflow-hidden shadow-md">
        <img
          src={puja.image}
          alt={puja.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* White Card Content */}
      <WhiteCard puja={puja} />
    </div>
  );
};

export default PujaCard;
