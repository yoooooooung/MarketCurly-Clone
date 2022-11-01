import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import LeftList from "../features/Cart/LeftList";
import RightList from "../features/Cart/RightList";

export default function Cart() {
  return (
    <>
      <Layout>
        <Page>장바구니</Page>
        <Ctn>
          <LeftList />
          <RightList />
        </Ctn>
      </Layout>
    </>
  );
}

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
