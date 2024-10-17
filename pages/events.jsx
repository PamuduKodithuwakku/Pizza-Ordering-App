import styles from '@/styles/Events.module.css';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Pizza Festival',
      date: 'October 15, 2024',
      location: 'Downtown Park, City Center',
      description: 'Join us for a celebration of all things pizza! Enjoy different varieties, live music, and games for all ages.',
    },
    {
      id: 2,
      title: 'Italian Cuisine Workshop',
      date: 'November 10, 2024',
      location: 'Culinary Arts Studio, Main Street',
      description: 'Learn the secrets of Italian cooking with our expert chefs. Perfect for beginners and seasoned cooks.',
    },
    {
      id: 3,
      title: 'Food Truck Fiesta',
      date: 'December 5, 2024',
      location: 'Riverside Park',
      description: 'Explore a variety of food trucks, each offering a unique twist on pizza, pasta, and more.',
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upcoming Events</h1>
      <div className={styles.eventsList}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <h2 className={styles.eventTitle}>{event.title}</h2>
            <p className={styles.eventDate}>{event.date}</p>
            <p className={styles.eventLocation}>{event.location}</p>
            <p className={styles.eventDescription}>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;