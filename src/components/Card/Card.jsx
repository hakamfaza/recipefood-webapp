import React from 'react';
import styles from '../../assets/styles/styles';
import '../../assets/styles/style.css';

const Card = (params) => {
  return (
    <div>
      <div style={styles.cardContainer}>
        <img src={params.src} alt="Chicken Kare" style={styles.cardImage} />
        <h3 style={styles.cardTitle} className="font">
          {params.title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
