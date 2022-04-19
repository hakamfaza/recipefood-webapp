import React, { useEffect, useState } from 'react';
import NavbarComponent from '../components/Navbar/Navbar';
import { Input, Form } from 'reactstrap';
import { BiSearch } from 'react-icons/bi';
import styles from '../assets/styles/styles';
import '../assets/styles/style.css';

import CardMedium from '../components/CardMedium/CardMedium';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';

import bgVector from '../assets/img/bgvector.webp';
import vegetable from '../assets/img/vegetable.webp';
import foodOne from '../assets/img/foodone.webp';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [newRecipe, setNewRecipe] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState({
    title: ''
  });

  const getRecipe = (e, field) => {
    setSearchRecipe({
      ...searchRecipe,
      [field]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const query = {
      search: searchRecipe.title
    };
    axios
      .get(`${process.env.REACT_APP_API_URL}/recipe?search=${query.search}`, {})
      .then((response) => {
        setSearchRecipe(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };

  // All Recipe
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/recipe?sortType=ASC&sortField=date`
      )
      .then((response) => {
        setRecipe(response.data.data);
      });
  }, []);

  // New Recipe
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/recipe?sortType=DESC&sortField=date`
      )
      .then((response) => {
        setNewRecipe(response.data.data[0]);
      });
  }, []);

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
                <Form onSubmit={(e) => onSubmit(e)} style={styles.boxSearch}>
                  <Input
                    className="font outlineNone"
                    placeholder="search recipe"
                    onChange={(e) => getRecipe(e, 'title')}
                    style={styles.searchInput}
                  />
                </Form>
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
      <section>
        <div className="container-fluid" style={styles.boxPopular}>
          <h1 style={styles.titlePopular} className="font">
            Popular For You
          </h1>
          <div className="row" style={styles.mtMedium}>
            <div className="col-sm" style={styles.imagePopularContainer}>
              <CardMedium
                src="https://s3-alpha-sig.figma.com/img/fb0d/a674/ee224fca0fd31394f7e036dec5eeb4ca?Expires=1650844800&Signature=gPXeHdgMPMqVtGz6~SGrs0d2YG822sa-bVWEoh0wOUSgajin6YbRtHTd0S8F9NjIgFOoHyB-VaPUYqIS7KxCS8yYwq0ckPgLIqejYFrEqwI9AJKGTxmXAXDxH~PMIZ5wuZYvaD8quPTA7q8HNbz1bKeyGZja0Kv94H3lcyzcoXhKghmWuN9BqNt8pY2E9Zms4OFaxakIdTW9XPbs7ED9~30H64oHrOxmbQY6Mv7pqLX5S3-flBAtmzmErvNuUGQ-l1JfQ7d5slAT42vUpesfEJKNBGk-dArS36WgXrRmHh6-5HxWPUdBYJFI5v308xrapnAX06cUKVbnpgrloI8MWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                title="Pizza Lamoa"
                alt="Pizza Lamoa"
                href="/"
              />
            </div>
            <div className="col-sm" style={styles.imagePopularContainer}>
              <CardMedium
                src="https://s3-alpha-sig.figma.com/img/b704/55ae/6c4d7c1bef2c9e97e8df92d4be8a1d1a?Expires=1650844800&Signature=HlwCLfdHWtZA7ssS3Zo27Gsziiye8wPWDK1qW8vdDugIEN0iA9JkX34T35enJYdhcBxsg~J2RbDGJhMDwaeq-3Z15H1d5KR7IpQmcylteLmaCPdPcDe0GWRlVvneCZXIJb1b~E4Vp0NF4rTpmpiGBUStz36hAVCoA26MnFnOpdnFGI7YrpGhH7yTS~anexY9EYIu5ySVWaZnc1uC4BnAfVtFVbGUTs9c70f8JIKLagNUBIF-OLRQWttHC~UBP0XXokE7oXA8a4dntVkyDaVVevN56au87d0Aeimu6CyT0iD9d-bWV6xuHxqUMyQMCoLBCINZscHQgucEs2VWVmrK3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                title="King Burger"
                alt="King Burger"
                href="/"
              />
            </div>
          </div>
        </div>

        <div className="container-fluid" style={styles.boxPopular}>
          <h1 style={styles.titlePopular} className="font">
            New Recipe
          </h1>
          <div className="row" style={styles.mtMedium}>
            <div className="col-sm" style={styles.containerNewRecipe}>
              <div style={styles.bgObject} />
              <div style={styles.boxCard}>
                <CardMedium
                  src={`${process.env.REACT_APP_API_URL}/image/${newRecipe.image}`}
                />
              </div>
            </div>
            <div className="col-sm" style={styles.boxAboutRecipe}>
              <div>
                <h1 className="font" style={styles.aboutTitle}>
                  {newRecipe.title}
                </h1>
                <div style={styles.line} />
                <p style={styles.textAbout}>
                  Quick + Easy {newRecipe.title}- Healthy {newRecipe.title} in a
                  hurry? That’s right!
                </p>
                <Link to={`/item/${newRecipe.id}`}>
                  <button className="button">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" style={styles.boxPopular}>
          <h1 style={styles.titlePopular} className="font">
            Show Recipe
          </h1>
          <div className="container">
            <div className="row" style={styles.boxOfCard}>
              {recipe.map((e, i) => {
                return (
                  <div className="col-sm" key={i}>
                    <Link to={`/item/${e.id}`}>
                      <Card
                        src={`${process.env.REACT_APP_API_URL}/image/${e.image}`}
                        title={e.title}
                        alt={e.title}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
