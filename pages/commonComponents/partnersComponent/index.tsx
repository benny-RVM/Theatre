import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

const partnersData = [
  { src: "/logos/kfc.png", alt: "KFC" },
  { src: "/logos/adidas.png", alt: "Adidas" },
  { src: "/logos/levis.png", alt: "Levi's" },
  { src: "/logos/jeep.png", alt: "Jeep" },
  { src: "/logos/google.png", alt: "Google" },
  { src: "/logos/cocacola.png", alt: "Coca-Cola" },
  { src: "/logos/shell.png", alt: "Shell" },
  { src: "/logos/mcdonalds.png", alt: "McDonald's" },
];

const TrustedPartners = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Trusted Partners</h2>
      </div>
      <div className={styles.container}>
        <p className={styles.description}>
          Explore the network of leading organizations that have joined forces
          with us. Each logo represents a unique story of collaboration and
          success.
        </p>
      </div>

      <div className={styles.logosContainer}>
        {partnersData.map((partner, index) => (
          <div key={index} className={styles.logoCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={partner.src}
                alt={partner.alt}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedPartners;
