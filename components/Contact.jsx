import styles from '@/styles/Contact.module.css';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Get in Touch</h1>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className={styles.input}
            required
          />
          <textarea
            placeholder="Your Message"
            className={styles.textarea}
            rows="5"
            required
          ></textarea>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
      <div className={styles.socialContainer}>
        <h2 className={styles.subtitle}>Follow Me</h2>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaInstagram />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;