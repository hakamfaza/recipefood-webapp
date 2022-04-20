import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Vidio from '../views/Vidio';
import AddRecipe from '../views/AddRecipe';
import Login from '../views/Login';
import SignUp from '../views/SignUp';
import Profile from '../views/Profile';
import Search from '../views/Search';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} /> {/*localhost: 3000/ */}
          <Route path="item/:id" element={<Detail />} />{' '}
          {/*localhost: 3000/123 */}
          <Route path="vidio" element={<Vidio />} /> {/*localhost: 3000/new */}
          <Route path="addrecipe" element={<AddRecipe />} />{' '}
          {/*localhost: 3000/new */}
          <Route path="login" element={<Login />} />{' '}
          {/*localhost: 3000/login */}
          <Route path="signup" element={<SignUp />} />{' '}
          {/*localhost: 3000/signup */}
          <Route path="/profile" element={<Profile />} />{' '}
          {/*localhost: 3000/profile */}
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
