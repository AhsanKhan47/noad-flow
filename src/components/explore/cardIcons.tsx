import React from "react";
import Image from "next/image";
interface cardIconsType {
  bed: number;
  table: number;
  shower: number;
}
export function CardIcons({ bed, table, shower }: cardIconsType) {
  return (
    <div className="flex flex-row justify-start items-center gap-3 text-sm my-2">
      <div className="flex items-center">
        <Image src={"/icons/Bed.svg"} alt="Bed" height={20} width={20} />
        {bed}
      </div>
      <div className="flex items-center">
        <Image src={"/icons/Table.svg"} alt="Bed" height={20} width={20} />
        {table}
      </div>
      <div className="flex items-center">
        <Image src={"/icons/Shower.svg"} alt="Bed" height={20} width={20} />
        {shower}
      </div>
    </div>
  );
}
