import React from 'react';
import NavbarComponent from '../components/Navbar/Navbar';
import { Input } from 'reactstrap';
import { BiSearch } from 'react-icons/bi';
import styles from '../assets/styles/styles';

import bgVector from '../assets/img/bgvector.webp';
import vegetable from '../assets/img/vegetable.webp';
import foodOne from '../assets/img/foodone.webp';

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container-fluid" style={styles.containerHome}>
        <div className="row">
          <div className="col-sm" style={styles.content} />
          <div className="col-3" style={styles.bgDecoration} />
        </div>
        <div className="container-lg" style={styles.boxAction}>
          <div className="row">
            <div className="col" style={styles.content}>
              <h1 className="font" style={styles.titleContent}>
                Discover Recipe & Delicious Food
              </h1>
              <div style={styles.search}>
                <BiSearch style={styles.iconSearch} />
                <Input
                  className="font"
                  placeholder="search recipe"
                  style={styles.searchInput}
                />
              </div>
            </div>
            <div className="col">
              <div style={styles.decoration}>
                <img src={bgVector} alt="vector" style={styles.bgVector} />
                <img src={vegetable} alt="vegetable" style={styles.vegetable} />
                <img src={foodOne} alt="Food" style={styles.foodOne} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
