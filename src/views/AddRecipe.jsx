import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import styles from '../assets/styles/styles';
import ButtonComponents from '../components/ButtonComponent/ButtonComponent';
import Footer from '../components/Footer/Footer';

const AddRecipe = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="container" style={styles.containerAddRecipe}>
          <div className="row" style={styles.addRecipe}>
            <div className="col-sm" style={styles.boxAddRecipe}>
              <div style={styles.inputImage}></div>
              <input
                type="text"
                placeholder="Title"
                style={styles.titleInput}
              />
              <textarea
                name="ingredients"
                id="ingredients"
                cols="100"
                rows="10"
                placeholder="Ingredients"
                style={styles.ingredientsInput}
              ></textarea>
              <input
                type="text"
                placeholder="Title"
                style={styles.titleInput}
              />
              <ButtonComponents title="Post" style={styles.buttonPost} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddRecipe;
