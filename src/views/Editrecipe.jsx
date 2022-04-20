import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import styles from '../assets/styles/styles';
import '../assets/styles/style.css';
import ButtonComponents from '../components/ButtonComponent/ButtonComponent';
import Footer from '../components/Footer/Footer';

const EditRecipe = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <section>
        <div className="container" style={styles.containerAddRecipe}>
          <div className="row">
            <div className="col-sm" style={styles.boxAddRecipe}>
              <div style={styles.inputImage}></div>
              <input
                type="text"
                placeholder="Title"
                className="outlineNone"
                style={styles.titleInput}
              />
              <textarea
                name="ingredients"
                id="ingredients"
                cols="100"
                rows="10"
                placeholder="Ingredients"
                className="outlineNone"
                style={styles.ingredientsInput}
              ></textarea>
              <input
                type="text"
                placeholder="Title"
                className="outlineNone"
                style={styles.titleInput}
              />
              <ButtonComponents title="update" style={styles.buttonPost} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EditRecipe;
