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
                  src={`${process.env.REACT_APP_API_URL}/image/${user.photo}`}
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
                              edit="/edit"
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
