import React from 'react';
import styles from '../../assets/styles/styles';
import '../../assets/styles/style.css';

const Footer = () => {
  return (
    <div className="container-fluid" style={styles.footerContainer}>
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm" style={styles.titleBox}>
          <h1 className="font" style={styles.txtTitle}>
            Eat, Cook, Repeat
          </h1>
          <p className="font" style={styles.txtColor}>
            Share your best recipe by uploading here !
          </p>
          <ul style={styles.footerList}>
            <li>
              <a href="/" style={styles.footerLink}>
                Product
              </a>
            </li>
            <li>
              <a href="/" style={styles.footerLink}>
                Company
              </a>
            </li>
            <li>
              <a href="/" style={styles.footerLink}>
                Learn More
              </a>
            </li>
            <li>
              <a href="/" style={styles.footerLink}>
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm" style={styles.boxTextCreadit}>
          <div className="boxCreadit">
            <p style={styles.txtCreadit}>©PijarCamp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
