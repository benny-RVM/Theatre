// components/ContactForm.js
import styles from "./index.module.css";

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>Get in touch</h2>
        <p>We would love to hear from you! Feel free to visit our office.</p>
        <p>
          <strong>rohan.rastogi@miniplexindia.com</strong>
        </p>
        <p>
          <strong>+91 9717238625</strong>
        </p>
        <p>
          <strong>location</strong>
        </p>
        <p>
          Address: A-90, Second Floor, DDA Shed, Okhla Phase II, New
          Delhi-110020.
        </p>
        <div className={styles.socialIcons}>
          <span>X</span> <span>F</span> <span>in</span> <span>IG</span>{" "}
          <span>WhatsApp</span>
        </div>
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="Enter your name*" required />
        <input type="text" placeholder="Enter your email*" required />
        <input type="text" placeholder="Enter your mobile number*" required />
        <select required>
          <option value="" disabled selected>
            Select your category*
          </option>
          <option value="general">General</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
        </select>
        <textarea placeholder="Type message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
