import React from 'react';
import styles from '../../assets/styles/styles';

const CardSmall = (params) => {
  return (
    <>
      <div style={styles.cardSmall}>
        <a href={params.href}>
          <img
            src={params.src}
            alt={params.alt}
            style={styles.cardImageSmall}
          />
          <h3 style={styles.cardTitleSmall} className="font">
            {params.title}
          </h3>
        </a>
      </div>
    </>
  );
};

export default CardSmall;
