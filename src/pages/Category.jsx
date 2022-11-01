import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Menubar from "../features/CategoryPage/Menubar"
import ListPage from "../features/CategoryPage/ListPage";

export default function Category() {
  return (
  <Layout>
    <div><BigBannerImg src={require('../img/shinsang.png')} /> </div>
    <Title>신상품</Title>
    <div style={{display:"flex", justifyContent:"space-between", margin:"50px 0px 75px"}}>
      <Menubar />
      <ListPage />
    </div>
    
    </Layout>);
}

const BigBannerImg = styled.img `
width: 1050px;
`;

const Title = styled.div `
width: 1050px;
margin-top: 50px;
font-weight: 500;
font-size: 28px;
color: rgb(51, 51, 51);
line-height: 35px;
letter-spacing: -1px;
text-align: center;`;
