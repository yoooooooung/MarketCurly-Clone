import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import LeftList from "../features/Cart/LeftList";
import Footer from "../features/footer/Footer";
import FooterBottom from "../features/footer/FooterBottom";
import FooterRights from "../features/footer/FooterRights";
import Swal from "sweetalert2";

export const Cart = () => {
  if (!localStorage.getItem("token")) {
    Swal.fire({
      title: "로그인 후 이용해주세요",
      timer: 1000,
      showConfirmButton: false,
    }).then(() => {
      window.location.replace("/");
    });
  } else
    return (
      <>
        <Layout>
          <Page>장바구니</Page>
          <LeftList />

          <Footer />
          <FooterBottom />
          <FooterRights />
        </Layout>
      </>
    );
};

export default Cart;

const Page = styled.div`
  text-align: center;
  padding: 50px 0;
  font-size: 28px;
  font-weight: 500;
`;

const Ctn = styled.div`
  display: flex;
  gap: 20px;
`;
