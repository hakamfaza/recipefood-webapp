import React from 'react';
import { FiEdit } from 'react-icons/fi';
import styles from '../../assets/styles/components/action/action.module.css';

const Edit = () => {
  return (
    <>
      <FiEdit className={styles.editeIconCard} />
    </>
  );
};

export default Edit;

// <div style={styles.boxActionRecipe}>
//   <a href={params.edit}>
//
//   </a>
//   <NavItem>
//     <NavLink onClick={params.onClick}>
//       <MdOutlineDelete style={styles.deleteIcon} />
//     </NavLink>
//   </NavItem>
// </div>;
