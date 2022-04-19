import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import styles from '../assets/styles/styles';
import Navbar from '../components/Navbar/Navbar';
import { BiLike, BiBookmark } from 'react-icons/bi';
import { FiPlay } from 'react-icons/fi';

// import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import Footer from '../components/Footer/Footer';

const Detail = () => {
  const { id } = useParams();

  const [getRecipe, setRecipe] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${process.env.REACT_APP_API_URL}/recipe/${id}`)
      .then((response) => {
        setRecipe(response.data.data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <h1>Halaman Detail {id}</h1>
      <section>
        <div className="container-fluid" style={styles.detailContainer}>
          <div className="row">
            <div className="col-sm" style={styles.detailImage}>
              <h1 className="font" style={styles.titleDetailRecipe}>
                {getRecipe.title}
              </h1>
              <div style={styles.boxImageDetail}>
                <img
                  src={`${process.env.REACT_APP_API_URL}/image/${getRecipe.image}`}
                  alt={getRecipe.title}
                  style={styles.imageRecipe}
                />
                <div style={styles.boxIcon}>
                  <BiBookmark style={styles.bookmarkIcon} />
                  <BiLike style={styles.likeIcon} />
                </div>
              </div>
            </div>
          </div>
          <div className="row col-sm" style={styles.containerRecipe}>
            <h2 className="font" style={styles.titleRecipe}>
              Ingredients
            </h2>
            <p>{getRecipe.ingredients}</p>
            <h2 className="font" style={styles.titleRecipe}>
              Detail Vidio
            </h2>
            <button onClick="/" style={styles.playButton}>
              <FiPlay />
            </button>
          </div>

          <div className="row col-sm" style={styles.containerComment}>
            <div style={styles.boxComment}>
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="10"
                style={styles.textAreaComment}
                placeholder="Comment:"
                className="font"
              ></textarea>
              <button style={styles.buttonPost}>Post</button>
            </div>
            <div style={styles.boxUserComment}>
              <h2 className="font" style={styles.titleRecipe}>
                Comment
              </h2>
              <div style={styles.boxCommentUser}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/3d1d/4c1c/c08f710828e1d2aacf71af8c92583062?Expires=1650844800&Signature=CIPGwGLE9QhceRNlGybm~0yvf0Ex0G0HQfvX9gOUlmLVwBd8G5fzT6rzqoMMjCFw47Gbnd8r012T~Pix4Qj2SF3EMHSUCNXhbLkGDixhvROF-UDHGRdz0ciYtFAt-lhJjUbRMgWjfq2P~3ZrTEc~5n2Ct4HyQS86bsbOe6ACeoo2vEC-cxXKrAY6dRaNk~tb-nmO9sy~Ow3EMjUBsXoKhsSM7awvpzY3OOvOI7aCtdJcLRco5SPaBjTLXJ0FiP04ei6ZUQ0rQO1TyJwOoHeZAIRJjFhWyf2rcyJiZIytppfJLtqaU3fTz6DazQqeo4dOfBpvrQd-kxXMppbxA3BtDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt="User"
                  style={styles.userComment}
                />
                <div style={styles.userAndComment}>
                  <h6 className="font" style={styles.titleUser}>
                    Ayudia
                  </h6>
                  <p className="font" style={styles.textComment}>
                    Nice recipe. simple and delicious, thankyou
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Detail;
