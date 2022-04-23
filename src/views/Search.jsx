import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'reactstrap';
import { BiSearch } from 'react-icons/bi';

import Navbar from '../components/Navbar/Navbar';
import CardResult from '../components/CardResult/CardResult';
import styles from '../assets/styles/views/search.module.css';

const Search = () => {
  const navigate = useNavigate();

  const [queryParams] = useSearchParams();
  const getQuery = queryParams.get('q');

  const [getRecipe, setGetRecipe] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState('');

  const getToken = localStorage.getItem('token');
  const getUser = localStorage.getItem('user');

  if (!getToken || !getUser) {
    navigate('/login');
  }

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/recipe?search=${getQuery}&limit=8`,
        {}
      )
      .then((response) => {
        setGetRecipe(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getInput = (e, field) => {
    setSearchRecipe({
      ...searchRecipe,
      [field]: e.target.value
    });
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    // e.currentTarget.reset();
    setTimeout(() => {
      window.location.reload(false);
    }, 0);
    const query = {
      search: searchRecipe.title
    };

    navigate({
      pathname: '/search',
      search: `?q=${query.search}`
    });
  };

  return (
    <>
      <Navbar />
      <div className={('container-fluid', styles.container)}>
        <div className={styles.boxOfSearch}>
          <Form onSubmit={(e) => onSubmit(e)}>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="search..."
                defaultValue={getQuery ? getQuery : ''}
                onChange={(e) => getInput(e, 'title')}
              />
              <div>
                <BiSearch className={styles.icon} />
              </div>
            </div>
          </Form>
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
