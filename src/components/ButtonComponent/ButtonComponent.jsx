import React from 'react';
import { Button } from 'reactstrap';
import styles from '../../assets/styles/styles';

const ButtonComponents = (params) => {
  return (
    <>
      <Button style={styles.buttonSubmit}>{params.title}</Button>
    </>
  );
};

export default ButtonComponents;
