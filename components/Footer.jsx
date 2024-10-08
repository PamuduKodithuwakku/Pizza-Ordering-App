import styles from '@/styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/images/bg.png' alt='' layout='fill' />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE LA DOLZE PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTs</h1>
          <p className={styles.text}>
            163/A Don Road.
            <br />Galle, 81000
            <br />091 22 86 909
          </p>
          <p className={styles.text}>
            163/A Don Road.
            <br />Colombo, 81000
            <br />011 22 86 909
          </p>
          <p className={styles.text}>
            163/A Don Road.
            <br />Matara, 81000
            <br />041 22 86 909
          </p>
          <p className={styles.text}>
            163/A Don Road.
            <br />Galle, 81000
            <br />091 22 86 909
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br />9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br />12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
