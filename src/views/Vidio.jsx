import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CardVidio from '../components/CardVidio/CardVidio';
import styles from '../assets/styles/styles';

const Vidio = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-1" style={styles.bgVidio}></div>
          <div className="col-8" style={styles.containerMainVidio}>
            <div>
              <iframe
                width="720"
                height="420"
                src="https://www.youtube.com/embed/ggeb4lXdPYo"
                title="YouTube video player"
                allowtransparency="true"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameborder="0"
                allowfullscreen
                style={styles.mainVidio}
              />
              <h4 style={styles.titleVidio}>
                Beef Steak with Curry Sauce - [Step 5] Saute condiments together
                until turn brown
              </h4>
              <p>HanaLohana - 3 month ago</p>
            </div>
          </div>
          <div className="col-2" style={styles.containerListVidio}>
            <div style={styles.boxListVidio}>
              <div
                style={{
                  height: '100%',
                  marginTop: '50px'
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignContent: 'flex-start'
                  }}
                >
                  <h5>Next</h5>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    height: '80vh'
                  }}
                >
                  <CardVidio />
                  <CardVidio />
                  <CardVidio />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vidio;
