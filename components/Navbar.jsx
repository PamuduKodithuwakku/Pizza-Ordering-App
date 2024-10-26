import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css'

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/images/telephone.png' alt='' width='32' height='32' />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>091 228 6909</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <Link href="/menu" passHref>
            <li className={styles.listItem}>Menu</li>
          </Link>
          <Image src="/images/logo.png" alt="" width="100" height="100" />
          <Link href="/events" passHref>
            <li className={styles.listItem}>Events</li>
          </Link>
          <Link href="/blog" passHref>
            <li className={styles.listItem}>Blog</li>
          </Link>
          <Link href="/contact" passHref>
            <li className={styles.listItem}>Contact</li>
          </Link>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/images/cart.png" alt="" width={30} height={30} />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;