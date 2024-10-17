import styles from '@/styles/Blog.module.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Perfect Pizza Making',
      date: 'October 5, 2024',
      description: 'Learn how to make the perfect pizza at home with our step-by-step guide. Discover tips and tricks from professional chefs.',
    },
    {
      id: 2,
      title: '5 Pizza Toppings You Must Try',
      date: 'September 21, 2024',
      description: 'Get creative with your pizza! Here are five unique and delicious pizza toppings you should add to your next pie.',
    },
    {
      id: 3,
      title: 'History of Pizza: From Italy to the World',
      date: 'August 15, 2024',
      description: 'Explore the journey of pizza from its origins in Italy to becoming a global sensation loved by all.',
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Blog</h1>
      <p className={styles.subtitle}>Stay updated with the latest news, tips, and stories about our pizzas and more.</p>
      <div className={styles.posts}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <span className={styles.date}>{post.date}</span>
            <p className={styles.description}>{post.description}</p>
            <button className={styles.readMore}>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;