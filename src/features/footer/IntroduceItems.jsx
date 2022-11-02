import React from "react";
import styled from "styled-components";

export default function IntroduceItems() {
  const contentArr = ["컬리소개", "컬리소개영상", "인재채용", "이용약관"];

  return (
    <Item>
      {contentArr.map((item, index) => (
        <ItemList key={index}>{item}</ItemList>
      ))}
      <ItemList>
        <p>개인정보처리방침</p>
      </ItemList>
      <ItemList>이용안내</ItemList>
    </Item>
  );
}

const Item = styled.ul`
  display: flex;

  margin: 20px 0px 25px 0px;
  font-size: black;
`;

const ItemList = styled.li`
  font-weight: none;
  margin-right: 13px;
  list-style-type: none;
`;
