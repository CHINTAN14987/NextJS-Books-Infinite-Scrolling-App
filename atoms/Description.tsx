import React from "react";

const Description = (props) => {
  const { discountRate, price, title, description } = props;
  return (
    <div
      className={`flex flex-col space-y-4 cursor-pointer ${
        description ? "border-b-2 pb-8" : ""
      }`}
    >
      <h2 className="text-black font-bold text-2xl my-2">{title}</h2>
      {description && <p className="font-bold text-lg">{description}</p>}
      <div className="flex justify-between">
        <span className="text-pink-600 font-bold text-2xl">
          {discountRate}%
        </span>
        <div className="flex text-black font-bold space-x-1 items-center justify-center text-2xl">
          <span className="-mt-1">{price}</span> <span>루피</span>
        </div>
      </div>
    </div>
  );
};

export default Description;
