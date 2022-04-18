import React from 'react';
import styles from '../../assets/styles/styles';
import '../../assets/styles/style.css';

const Card = (params) => {
  return (
    <>
      <div style={styles.cardContainer}>
        <img src={params.src} alt={params.alt} style={styles.cardImage} />
        <h3 style={styles.cardTitle} className="font">
          {params.title}
        </h3>
      </div>
    </>
  );
};

export default Card;
