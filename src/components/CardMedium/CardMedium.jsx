import React from 'react';
import styles from '../../assets/styles/styles';
import '../../assets/styles/style.css';

const CardMedium = (params) => {
  return (
    <>
      <a href={params.href}>
        <div style={styles.cardMedium}>
          <img
            src={params.src}
            alt={params.alt}
            style={styles.cardImageMedium}
          />
          <h2 style={styles.cardTitleMedium} className="font">
            {params.title}
          </h2>
        </div>
      </a>
    </>
  );
};

export default CardMedium;
