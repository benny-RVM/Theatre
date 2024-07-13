// components/FAQ.js
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "./index.module.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "How much space do I need to set up a mini theater in my home?",
      answer:
        "It depends on the size of the screen and seating arrangement you prefer. Generally, a small room like a basement or spare bedroom can suffice.",
    },
    {
      question: "What kind of seating options are available for mini theaters?",
      answer:
        "There are various seating options available such as recliners, sofas, and theater-style seating.",
    },
    {
      question:
        "Can I customize the design of my mini theater to match my home decor?",
      answer: "Yes, you can customize the design to match your home decor.",
    },
    {
      question:
        "What types of audiovisual equipment do I need for a mini theater setup?",
      answer:
        "You will need a projector or a large screen TV, sound system, and media player.",
    },
    {
      question: "How do I control the lighting and sound in my mini theater?",
      answer:
        "You can use a smart home system to control lighting and sound, or use remotes and manual controls.",
    },
    {
      question:
        "Are there any specific requirements for ventilation and climate control in a mini theater?",
      answer:
        "Proper ventilation and climate control are important to maintain a comfortable environment and protect your equipment.",
    },
    {
      question:
        "Can MiniPlex assist with installation and setup of my mini theater?",
      answer:
        "Yes, MiniPlex offers professional installation and setup services.",
    },
  ];

  const toggleAnswer = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.backgroundBanner}>
      <div className={styles.faqContainer}>
        <div className={styles.container}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
        </div>
        {/* <h2 className={styles.title}>Frequently Asked Questions</h2> */}
        <p className={styles.subtitle}>
          Find quick answers to common questions. Simplify your experience with
          our comprehensive FAQs section.
        </p>
        <div className={styles.container}>
          <div className={styles.questions}>
            {questions.map((item, index) => (
              <div key={index} className={styles.questionItem}>
                <div
                  className={styles.question}
                  onClick={() => toggleAnswer(index)}
                >
                  <h3>{item.question}</h3>
                  <span>
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className={styles.answer}>{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
