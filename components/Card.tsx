import React from "react";

const Card = ({ title, discountRate, coverImage, price }) => {
  return (
    <div className="card">
      <img src={coverImage} alt={title} className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__discount">{discountRate}% off</p>
        <p className="card__price">${price}</p>
      </div>
    </div>
  );
};

export default Card;
