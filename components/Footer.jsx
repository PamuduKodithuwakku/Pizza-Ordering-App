import styles from '@/styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bgImage}>
        <Image src='/images/bg.png' alt='Background Image' layout='fill' objectFit='cover' />
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE LA DOLZE PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <div className={styles.locations}>
            <p className={styles.text}>
              163/A Don Road, Galle, 81000
              <br /> 091 22 86 909
            </p>
            <p className={styles.text}>
              163/A Don Road, Colombo, 81000
              <br /> 011 22 86 909
            </p>
            <p className={styles.text}>
              163/A Don Road, Matara, 81000
              <br /> 041 22 86 909
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY: 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY: 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
