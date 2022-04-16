import React from 'react';
import styles from '../../assets/styles/styles';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDelete } from 'react-icons/md';

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
        <div style={styles.boxActionRecipe}>
          <a href="edit">
            <FiEdit style={styles.editeIconCard} />
          </a>
          <a href="delete">
            <MdOutlineDelete style={styles.deleteIcon} />
          </a>
        </div>
      </div>
    </>
  );
};

export default CardSmall;
