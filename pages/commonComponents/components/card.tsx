import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

const Card = ({ title, description, linkText, backgroundColor, icon }: any) => (
  <div className={styles.card} style={{ background: backgroundColor }}>
    <div className={styles.icon}>
      <Image src={icon} alt="icons" width={20} height={20} />
    </div>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.description}>{description}</p>
    <a href="#" className={styles.link}>
      {linkText}
    </a>
  </div>
);

export default Card;
