import React from "react";
import styled from "styled-components";
import Header from "./Header";

export default function Layout(props) {
  return (
    <LayoutCtn>
      <LayoutBody>{props.children}</LayoutBody>
    </LayoutCtn>
  );
}

const LayoutCtn = styled.div`
  width: 100%;
`;
const LayoutBody = styled.div`
  width: 1050px;
  margin: 0 auto;
  /* overflow-x: hidden; */
`;
