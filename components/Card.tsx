import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = (props) => {
  const { title, discountRate, coverImage, price, id } = props;
  console.log(id, "key");
  return (
    <div className="inline-block p-2">
      <Image
        src={coverImage}
        alt={title}
        width={200}
        height={200}
        objectFit="cover"
      />
      <div className="">
        <h2 className="">{title}</h2>
        <div className="flex justify-between">
          <span className="text-pink-600 font-bold">{discountRate}%</span>
          <div className="flex text-black font-bold space-x-1 items-center">
            <span>{price}</span> <span>루피</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
