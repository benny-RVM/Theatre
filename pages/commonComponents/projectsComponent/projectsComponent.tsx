import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import image1 from "./../../../public/images/HomePage/block02.png";

const cardsData = [
  {
    src: image1,
    title: "The Rise of Mini Theaters: Exploring the Trend",
    description:
      "Discover why mini theaters are becoming increasingly popular and how they’re transforming entertainment experiences",
  },
  {
    src: image1,
    title: "Home Theater Design Inspirations",
    description:
      "Get inspired by these stunning home theater designs that bring the cinema experience to your living room",
  },
  {
    src: image1,
    title: "Setting Up Your Mini Theater",
    description:
      "Learn how to set up your mini theater with the best equipment and tips for an immersive experience",
  },
];

const MiniTheaterCards = () => {
  return (
    <div className={styles.cardContainer}>
      {cardsData.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src={card.src}
              alt={`Theater Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardDescription}>{card.description}</p>
            <button className={styles.cardButton}>more projects →</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiniTheaterCards;
