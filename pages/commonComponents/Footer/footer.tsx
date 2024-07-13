// components/Footer.js
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>LOGO</h2>
        </div>
        <div className={styles.containerSet}>
          <div className={styles.companyInfo}>
            <h3>Miniplex</h3>
            <p>
              Starlight Creations Pvt. Ltd.
              <br />
              123, Sunshine Avenue,
              <br />
              Saket, Delhi - 110017, India
            </p>
            <p>
              Email: <a href="mailto:info@miniplex.com">info@miniplex.com</a>
            </p>
            <div className={styles.socialIcons}>
              <span>X</span> <span>F</span> <span>in</span> <span>IG</span>{" "}
              <span>WhatsApp</span>
            </div>
          </div>
          <div className={styles.contactNumbers}>
            <h3>Contact Number:</h3>
            <p>
              Delhi: +91 00000 00000
              <br />
              Chennai: +91 00000 00000
              <br />
              Bangalore: +91 00000 00000
            </p>
          </div>
          <div className={styles.links}>
            <h3>Home</h3>
            <ul>
              <li>About us</li>
              <li>Services</li>
              <li>Products</li>
            </ul>
            <h3>Projects</h3>
            <ul>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className={styles.help}>
            <button className={styles.bookButton}>Book your experience</button>
            <p>
              HELP LINE
              <br />
              <br />
              For More <br /> Information/Feedback/Complaint
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Miniplex 2024. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
