import styles from '@/styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
            Each slice is a journey through layers of flavor, where handcrafted dough meets the freshest ingredients to create something truly exceptional. 
            Whether it's the comforting simplicity of a Margherita or the bold zest of a gourmet creation, our pizzas are a celebration of tradition and innovation. 
            Savor the perfect blend of crispy crust, rich sauce, and mouthwatering toppings, and let every bite transport you to the heart of Italy.
        </p>
        <div className={styles.wrapper}>
          {pizzaList.map((pizza) => (
            <PizzaCard key={pizza._id} pizza={pizza} />
          ))}            
        </div>
    </div>
  );
};

export default PizzaList;