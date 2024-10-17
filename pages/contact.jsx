import styles from '@/styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.subtitle}>
        We’d love to hear from you! Whether you have a question about our pizzas, services, or anything else, our team is ready to answer all your inquiries.
      </p>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Contact Us</h2>
          <form className={styles.form}>
            <input type="text" className={styles.input} placeholder="Your Name" required />
            <input type="email" className={styles.input} placeholder="Your Email" required />
            <input type="text" className={styles.input} placeholder="Subject" required />
            <textarea className={styles.textarea} placeholder="Your Message" required></textarea>
            <button type="submit" className={styles.button}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;