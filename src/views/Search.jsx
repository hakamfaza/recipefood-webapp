import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BiSearch } from 'react-icons/bi';

import Navbar from '../components/Navbar/Navbar';
import CardResult from '../components/CardResult/CardResult';
import styles from '../assets/styles/views/search.module.css';

const Search = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [getRecipe, setGetRecipe] = useState([]);

  const getToken = localStorage.getItem('token');
  const getUser = localStorage.getItem('user');

  if (!getToken || !getUser) {
    navigate('/login');
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/recipe?search=${id}`, {})
      .then((response) => {
        setGetRecipe(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });

  return (
    <>
      <Navbar />
      <div className={('container-fluid', styles.container)}>
        <div className={styles.boxOfSearch}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="search..." />
            <a href="/">
              <BiSearch className={styles.icon} />
            </a>
          </div>
        </div>

        <div className={styles.boxList}>
          <div className="row">
            {getRecipe.map((e, i) => {
              return (
                <div className="col-md-3" key={i}>
                  <CardResult
                    src={`${process.env.REACT_APP_API_URL}/image/${e.image}`}
                    title={e.title}
                    date={e.date}
                    href={`/item/${e.id}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
