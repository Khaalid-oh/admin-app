import Image from "next/image";
import React from "react";

export default function CreditCardComponent({
  brand = "mastercard",
  name = "OLIVIA RHYE",
  number = "1234 1234 1234 1234",
  expiry = "06/24",
  brandIcon = "/mastercard.png",
  paypassIcon = "/paypass.png",
}: {
  brand?: string;
  name?: string;
  number?: string;
  expiry?: string;
  brandIcon?: string;
  paypassIcon?: string;
}) {
  return (
    <div
      className="relative rounded-3xl overflow-hidden w-[308px] h-[182px] flex flex-col justify-between p-4"
      style={{
        backgroundImage: "url('/creditcard.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between items-center">
        <span className="text-white text-lg font-bold capitalize">
          {brand}.
        </span>
        <Image
          src={paypassIcon}
          alt={brand}
          width={20}
          height={20}
          className="transform -translate-x-2"
        />
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <div className="flex text-sm font-medium justify-between w-2/3 translate-y-1">
          <span className="text-white text-sm">{name}</span>
          <span className="text-white text-xs">{expiry}</span>
        </div>
        <span className="text-white font-semibold tracking-widest flex items-center justify-between">
          {number}
          <Image
            src={brandIcon}
            alt={brand}
            width={43}
            height={30}
            className="transform -translate-x-2"
          />
        </span>
      </div>
    </div>
  );
}
