import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Insert from '../views/Insert';
import AddRecipe from '../views/AddRecipe';
import Login from '../views/Login';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} /> {/*localhost: 3000/ */}
          <Route path=":id" element={<Detail />} /> {/*localhost: 3000/123 */}
          <Route path="new" element={<Insert />} /> {/*localhost: 3000/new */}
          <Route path="addrecipe" element={<AddRecipe />} />{' '}
          {/*localhost: 3000/new */}
          <Route path="login" element={<Login />} />{' '}
          {/*localhost: 3000/profile */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
