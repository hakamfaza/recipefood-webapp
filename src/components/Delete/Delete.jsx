import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import styles from '../../assets/styles/components/action/action.module.css';

const Delete = () => {
  return (
    <>
      <MdOutlineDelete className={styles.deleteIcon} />
    </>
  );
};

export default Delete;

// <div style={styles.boxActionRecipe}>
//   <a href={params.edit}>
//     <FiEdit style={styles.editeIconCard} />
//   </a>
//   <NavItem>
//     <NavLink onClick={params.onClick}>
//       <MdOutlineDelete style={styles.deleteIcon} />
//     </NavLink>
//   </NavItem>
// </div>;
