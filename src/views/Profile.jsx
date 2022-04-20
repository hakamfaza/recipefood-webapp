import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { FiEdit } from 'react-icons/fi';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import styles from '../assets/styles/styles';
import CardSmall from '../components/CardSmall/CardSmall';
import Footer from '../components/Footer/Footer';
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [recipe, setRecipe] = useState([]);
  const [toggleState, setToggleState] = useState(1);

  useEffect(() => {
    const getToken = localStorage.getItem('token');
    const getUser = localStorage.getItem('user');
    setUser(JSON.parse(getUser));

    if (!getToken || !getUser) {
      navigate('/login');
    }
    axios
      .get(`${process.env.REACT_APP_API_URL}/recipeUser`, {
        headers: {
          token: getToken
        }
      })
      .then((response) => {
        setRecipe(response.data.data);
        console.log(response.data);
      });
  }, []);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="container" style={styles.containerProfile}>
          <div className="row">
            <div className="col-sm" style={styles.boxUserProfile}>
              <div style={styles.userProfile}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/d063/327b/4662c85cb7661f579e2c9baff0ce5fdc?Expires=1650844800&Signature=MBA-enll1UC8IkCVbFsEzMC7tfRm3KUWx3LttO7XUnztWoBW9AyCoLrqUYuTyE4QqMgbsFk1z2JOVm9Ny-v-wHxxTgxjj5jawQlM9dY6u29NIprVKjbnrXDqwCSv5fFX9KgQ1kWRC4rvg88kgTHP72QAlUsmktJMgOdAr5uS9qJHEPLcBmf3I0YybOwTNneyhlp4Z2sKQgqzaJdD35Nxx2HyOG1BDstY7j2aGcCmJG7IJAVSjDo7IWVu3wlDIqtKYnLL7ekyKaejFqhGYOII6QGJVAVG~TfP91ETSiOJbBP~iW7mradb9LPpcXL6OEO0t9KOCQB9FLqkhhKR10TtOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt="User Profile"
                  style={styles.userImage}
                />
                <a href="profile" style={styles.iconLink}>
                  <FiEdit style={styles.editIcon} />
                </a>
              </div>
              <h1 className="font" style={styles.titleUserProfile}>
                {user.name}
              </h1>
            </div>
          </div>

          <div className="row" style={styles.boxRecipeAction}>
            <div className="col-sm">
              <Nav style={styles.titleRecipeAction} tabs>
                <NavItem className="font txt-profileaction">
                  <NavLink
                    className={toggleState === 1 ? 'active' : ''}
                    onClick={() => toggleTab(1)}
                    style={styles.recipeAction}
                  >
                    My Recipe
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={toggleState === 2 ? 'active' : ''}
                    onClick={() => toggleTab(2)}
                    style={styles.recipeAction}
                  >
                    Saved Recipe
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={toggleState === 3 ? 'active' : ''}
                    onClick={() => toggleTab(3)}
                    style={styles.recipeAction}
                  >
                    Liked Recipe
                  </NavLink>
                </NavItem>
              </Nav>

              <hr />

              <TabContent
                activeTab={
                  toggleState === 1 ? '1' : toggleState === 2 ? '2' : '3'
                }
              >
                <TabPane tabId="1">
                  <div className="container">
                    <div className="row" style={styles.boxCardRecipe}>
                      {recipe.map((e, i) => {
                        return (
                          <div className="col" key={i}>
                            <CardSmall
                              src={`${process.env.REACT_APP_API_URL}/image/${e.image}`}
                              title={e.title}
                              alt={e.title}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div className="container">
                    <div className="row" style={styles.boxCardRecipe}>
                      {recipe.map((e, i) => {
                        return (
                          <div className="col" key={i}>
                            <CardSmall
                              // src={`${process.env.REACT_APP_API_URL}/image/${e.image}`}
                              title={e.title}
                              alt={e.title}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="3">
                  <div className="container">
                    <div className="row" style={styles.boxCardRecipe}>
                      {recipe.map((e, i) => {
                        return (
                          <div className="col" key={i}>
                            <CardSmall
                              // src={`${process.env.REACT_APP_API_URL}/image/${e.image}`}
                              title={e.title}
                              alt={e.title}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
