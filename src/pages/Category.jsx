import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Menubar from "../features/CategoryPage/Menubar";
import ListPage from "../features/CategoryPage/ListPage";
import Footer from "../features/footer/Footer";
import FooterBottom from "../features/footer/FooterBottom";
import FooterRights from "../features/footer/FooterRights";

export default function Category() {
  return (
    <Layout>
      <div>
        {/* <BigBannerImg src={require("../img/shinsang.png")} />{" "} */}
        <BigBannerImg
          src={
            "https://collection-image.kurly.com/product-collections/2451/QwAyaGZHzmHErgidNg01maHWb2l07ie67fE0Pa9d.jpg"
          }
        />
      </div>
      <Title>신상품</Title>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "50px 0px 75px",
        }}
      >
        <Menubar />
        <ListPage />
      </div>
      {/* <Footer />
      <FooterBottom />
      <FooterRights /> */}
    </Layout>
  );
}

const BigBannerImg = styled.img`
  width: 1050px;
`;

const Title = styled.div`
  width: 1050px;
  margin-top: 50px;
  font-weight: 500;
  font-size: 28px;
  color: rgb(51, 51, 51);
  line-height: 35px;
  letter-spacing: -1px;
  text-align: center;
`;
