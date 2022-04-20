import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Delete = () => {
  const navigate = useNavigate();
  const { id } = useParams([]);
  const [getRecipe, setRecipe] = useState([]);

  useEffect(() => {
    const getToken = localStorage.getItem('token');
    // const getUser = localStorage.getItem('user');
    console.log(getToken);
    axios
      .delete(`${process.env.REACT_APP_API_URL}/recipe/${id}`, {
        headers: {
          token: getToken
        }
      })
      .then((response) => {
        setRecipe(response.data.data);
        console.log(response);
        navigate('/profile');
      });
  }, []);
  return (
    <>
      <h1></h1>
    </>
  );
};

export default Delete;
