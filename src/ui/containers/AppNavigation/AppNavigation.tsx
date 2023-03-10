import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Preloader from '../PreLoader';

const SignUp = React.lazy(() => import('../../pages/SignUp'));
const SignIn = React.lazy(() => import('../../pages/SignIn'));
const ProtectedNoAuthRoute = React.lazy(() => import('../../../utils/privateRoute/ProtectedUserNoAuth'));
const ProtectedAuthRoute = React.lazy(() => import('../../../utils/privateRoute/ProtectedUserAuth'));
const Cart = React.lazy(() => import('../../pages/CartPage'));
const ProductPage = React.lazy(() => import('../../pages/ProductPage'));
const Account = React.lazy(() => import('../../pages/UserAccount'));
const Favorites = React.lazy(() => import('../../pages/FavoritePage'));
const MainPage = React.lazy(() => import('../../pages/MainPage'));

const AppNavigation = () => {
  return (
    <div>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/productCard/:bookId" element={<ProductPage />} />
          <Route element={<ProtectedAuthRoute />}>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
          </Route>
          <Route element={<ProtectedNoAuthRoute />}>
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
          <Route path="*" element={<MainPage />} />
        </Routes >
      </Suspense>
    </div>
  );
};

export default AppNavigation;
