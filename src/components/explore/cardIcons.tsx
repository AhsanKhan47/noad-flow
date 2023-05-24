import React from "react";
import Image from "next/image";
export function CardIcons({ bed }: { bed: number }) {
  return (
    <div>
      <div className="flex items-center">
        <Image src={"/icons/Bed.svg"} alt="Bed" height={20} width={20} />
        {bed}
      </div>
      <div className="flex items-center">
        <Image src={"/icons/Bed.svg"} alt="Bed" height={20} width={20} />
        {bed}
      </div>
      <div className="flex items-center">
        <Image src={"/icons/Bed.svg"} alt="Bed" height={20} width={20} />
        {bed}
      </div>
    </div>
  );
}
