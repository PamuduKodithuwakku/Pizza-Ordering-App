import styles from '@/styles/Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Delicious Menu</h1>
      <p className={styles.subtitle}>Discover the best selection of flavors we have to offer.</p>
      
      <div className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Pizzas</h2>
        <ul className={styles.itemList}>
          <li className={styles.item}>
            <span className={styles.itemName}>Margherita</span>
            <span className={styles.itemPrice}>$10.99</span>
          </li>
          <li className={styles.item}>
            <span className={styles.itemName}>Pepperoni</span>
            <span className={styles.itemPrice}>$12.99</span>
          </li>
          <li className={styles.item}>
            <span className={styles.itemName}>Veggie Supreme</span>
            <span className={styles.itemPrice}>$11.99</span>
          </li>
        </ul>
      </div>

      <div className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Drinks</h2>
        <ul className={styles.itemList}>
          <li className={styles.item}>
            <span className={styles.itemName}>Coke</span>
            <span className={styles.itemPrice}>$2.50</span>
          </li>
          <li className={styles.item}>
            <span className={styles.itemName}>Lemonade</span>
            <span className={styles.itemPrice}>$3.00</span>
          </li>
        </ul>
      </div>

      <div className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Desserts</h2>
        <ul className={styles.itemList}>
          <li className={styles.item}>
            <span className={styles.itemName}>Chocolate Cake</span>
            <span className={styles.itemPrice}>$6.99</span>
          </li>
          <li className={styles.item}>
            <span className={styles.itemName}>Tiramisu</span>
            <span className={styles.itemPrice}>$7.50</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
