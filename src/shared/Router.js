import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Detail from "../pages/Detail";
import Like from "../pages/Like";
import Category from "../pages/Category";
import Main from "../pages/Main";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/like" element={<Like />}></Route>
          <Route path="/datail/:goodsId" element={<Detail />}></Route>
          <Route path="/category" element={<Category />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
