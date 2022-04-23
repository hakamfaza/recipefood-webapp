import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

import styles from '../assets/styles/views/detail.module.css';
import Navbar from '../components/Navbar/Navbar';
import { BiLike, BiBookmark } from 'react-icons/bi';
import { FiPlay } from 'react-icons/fi';

// import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import Footer from '../components/Footer/Footer';

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [getRecipe, setRecipe] = useState([]);

  useEffect(() => {
    const getToken = localStorage.getItem('token');
    const getUser = localStorage.getItem('user');

    if (!getToken || !getUser) {
      navigate('/login');
    }
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
      <section>
        <div className={styles.detailContainer}>
          <div className={styles.boxOfDetail}>
            <div className="container-fluid">
              <div className="row">
                <div className={styles.detailImage}>
                  <div className="col-sm">
                    <h1 className={styles.titleDetailRecipe}>
                      {getRecipe.title}
                    </h1>
                    <div className={styles.boxImageDetail}>
                      <img
                        src={`${process.env.REACT_APP_API_URL}/image/${getRecipe.image}`}
                        alt={getRecipe.title}
                        className={styles.imageRecipe}
                      />
                      <div className={styles.boxIcon}>
                        <BiBookmark className={styles.bookmarkIcon} />
                        <BiLike className={styles.likeIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.containerRecipe}>
                <div className="row col-sm">
                  <h2 className={styles.titleRecipe}>Ingredients</h2>
                  <p className={styles.ingredients}>{getRecipe.ingredients}</p>
                  <h2 className={styles.titleRecipe}>Detail Vidio</h2>
                  <Link to="/vidio">
                    <button className={styles.playButton}>
                      <FiPlay />
                    </button>
                  </Link>
                </div>
              </div>

              <div className={styles.containerComment}>
                <div className="row col-sm">
                  <div className={styles.boxComment}>
                    <textarea
                      name="comment"
                      id="comment"
                      cols="30"
                      rows="10"
                      className={styles.textAreaComment}
                      placeholder="Comment:"
                    ></textarea>
                    <button className={styles.buttonPost}>Post</button>
                  </div>
                  <div className={styles.boxUserComment}>
                    <h2 className={styles.titleRecipe}>Comment</h2>
                    <div className={styles.boxCommentUser}>
                      <img
                        src="https://s3-alpha-sig.figma.com/img/3d1d/4c1c/c08f710828e1d2aacf71af8c92583062?Expires=1650844800&Signature=CIPGwGLE9QhceRNlGybm~0yvf0Ex0G0HQfvX9gOUlmLVwBd8G5fzT6rzqoMMjCFw47Gbnd8r012T~Pix4Qj2SF3EMHSUCNXhbLkGDixhvROF-UDHGRdz0ciYtFAt-lhJjUbRMgWjfq2P~3ZrTEc~5n2Ct4HyQS86bsbOe6ACeoo2vEC-cxXKrAY6dRaNk~tb-nmO9sy~Ow3EMjUBsXoKhsSM7awvpzY3OOvOI7aCtdJcLRco5SPaBjTLXJ0FiP04ei6ZUQ0rQO1TyJwOoHeZAIRJjFhWyf2rcyJiZIytppfJLtqaU3fTz6DazQqeo4dOfBpvrQd-kxXMppbxA3BtDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt="User"
                        className={styles.userComment}
                      />
                      <div className={styles.userAndComment}>
                        <h6 className={styles.titleUser}>Ayudia</h6>
                        <p className={styles.textComment}>
                          Nice recipe. simple and delicious, thankyou
                        </p>
                      </div>
                    </div>
                  </div>
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
