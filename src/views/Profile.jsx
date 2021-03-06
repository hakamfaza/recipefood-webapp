import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button,
  Form
} from 'reactstrap';

import Navbar from '../components/Navbar/Navbar';
import CardSmall from '../components/CardSmall/CardSmall';
import Footer from '../components/Footer/Footer';

import styles from '../assets/styles/views/profile.module.css';
import { FiEdit } from 'react-icons/fi';

import Delete from '../components/Delete/Delete';
import Edit from '../components/Edit/Edit';

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [recipe, setRecipe] = useState([]);
  const [toggleState, setToggleState] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [getIdRecipe, setIdRecipe] = useState([]);

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
        setIsLoading(false);
      });
  }, []);

  const deleteRecipe = () => {
    const getToken = localStorage.getItem('token');
    axios
      .delete(`${process.env.REACT_APP_API_URL}/recipe/${getIdRecipe}`, {
        headers: {
          token: getToken
        }
      })
      .then((response) => {
        setRecipe(response.data.data);
        navigate('/profile');
      });
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className={styles.containerProfile}>
            <div className="row">
              <div className="col-sm">
                <div className={styles.boxUserProfile}>
                  <div className={styles.userProfile}>
                    <img
                      src={`${process.env.REACT_APP_API_URL}/image/${user.photo}`}
                      alt="User Profile"
                      className={styles.userImage}
                    />
                    <a href="profile" className={styles.iconLink}>
                      <FiEdit className={styles.editIcon} />
                    </a>
                  </div>
                  <h1 className={styles.titleUserProfile}>{user.name}</h1>
                </div>
              </div>
            </div>

            <div className={styles.boxRecipeAction}>
              <div className="row">
                <div className="col-sm">
                  <Nav className={styles.titleRecipeAction} tabs>
                    <NavItem className="font txt-profileaction">
                      <NavLink
                        className={toggleState === 1 ? styles.recipeAction : ''}
                        onClick={() => toggleTab(1)}
                      >
                        My Recipe
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={toggleState === 2 ? styles.recipeAction : ''}
                        onClick={() => toggleTab(2)}
                      >
                        Saved Recipe
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={toggleState === 3 ? styles.recipeAction : ''}
                        onClick={() => toggleTab(3)}
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
                        <div className={styles.boxCardRecipe}>
                          <div className="row">
                            {isLoading
                              ? ''
                              : recipe.map((e, i) => (
                                  <div className="col-md-4" key={i}>
                                    <div
                                      className={styles.boxCardRecipeProfile}
                                    >
                                      <Link to={`/item/${e.id}`}>
                                        <CardSmall
                                          src={`${process.env.REACT_APP_API_URL}/image/${e.image}`}
                                          title={e.title}
                                          alt={e.title}
                                          edit="/edit"
                                        />
                                      </Link>
                                      <div className={styles.boxActionRecipe}>
                                        <Link to="/edit">
                                          <Edit />
                                        </Link>
                                        <Form onClick={() => setIdRecipe(e.id)}>
                                          <Button
                                            className={styles.btn}
                                            onClick={() => deleteRecipe()}
                                          >
                                            <Delete />
                                          </Button>
                                        </Form>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                          </div>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="2">
                      <div className="container">
                        <div className={styles.boxCardRecipe}>
                          <div className="row"></div>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="3">
                      <div className="container">
                        <div className={styles.boxCardRecipe}>
                          <div className="row"></div>
                        </div>
                      </div>
                    </TabPane>
                  </TabContent>
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

export default Profile;
