import React from 'react';
import { Button } from 'reactstrap';
import styles from '../../assets/styles/styles';
import '../../assets/styles/style.css';

const ButtonComponents = (params) => {
  return (
    <>
      <Button style={styles.buttonSubmit} className="btn-shadow">
        {params.title}
      </Button>
    </>
  );
};

export default ButtonComponents;
