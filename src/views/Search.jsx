import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/Navbar/Navbar';
import CardResult from '../components/CardResult/CardResult';
import styles from '../assets/styles/views/search.module.css';

const Search = () => {
  const { id } = useParams();

  const [getRecipe, setGetRecipe] = useState([]);

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
    </>
  );
};

export default Search;
