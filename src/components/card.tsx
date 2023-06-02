import React from 'react';

interface CardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, alt, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
