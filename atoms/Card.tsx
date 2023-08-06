import Image from "next/image";
import React from "react";
import Description from "./Description";

const Card = (props) => {
  const { title, discountRate, coverImage, price, id } = props;
  console.log(id, "key");
  return (
    <React.Fragment>
      <Image
        src={coverImage}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <Description
        title={"이거는 책이에요"}
        discountRate={discountRate}
        price={price}
      />
    </React.Fragment>
  );
};

export default Card;
