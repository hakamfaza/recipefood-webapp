import React from 'react';
import styles from '../../assets/styles/styles';
import logo from '../../assets/img/logo.svg';

const AuthJumbotron = () => {
  return (
    <div className="row">
      <div className="col-sm" style={styles.containerAuthLogo}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h5 style={styles.titleLogo} className="font">
          Mama Recipe.
        </h5>
      </div>
    </div>
  );
};

export default AuthJumbotron;
