import React from "react";
import styled from "styled-components;";

export default function Header() {
  return (
    <HeaderHeader>
      {" "}
      {/* 제일 넓은 친구  */}{" "}
      <HeaderLayout>
        {/*  */}
        <Row1>회원가입 로그인 고객센터</Row1>
        <Row2>
          <Logo>
            <img />
            <div>마켓컬리/뷰티컬리</div>
          </Logo>
          <Search>
            <input>검색어를 입력해주세요</input>
          </Search>
          <Icons>
            <p>위치아이콘</p>
            <p>찜목록</p>
            <p>카트</p>
          </Icons>
        </Row2>
        <Row3>
          <Ctgs>
            중복 카테고리 화이팅..
            <Ctg>채소</Ctg>
            <Ctg>과일</Ctg>
            <Ctg>정육</Ctg>
            <Ctg>반찬</Ctg>
          </Ctgs>
          <Menus>
            <Menu>신상품</Menu>
            <Menu>베스트</Menu>
            <Menu>알뜰쇼핑</Menu>
            <Menu>특가/혜택</Menu>
          </Menus>
          <div>샛별.낮 배송안내</div>
        </Row3>
      </HeaderLayout>
    </HeaderHeader>
  );
}

const HeaderHeader = styled.div`
  width: 100vw;
  height: 100px;
`;
const HeaderLayout = styled.div`
  width: 1050px;
  margin: 0 auto;
  background-color: gray;
`;

const Row1 = styled.div``;

const Logo = styled.div``;
const Search = styled.div``;
const Icons = styled.div`
  p {
  }
`;
const Row2 = styled.div`
  width: 100px;
  ${Logo} {
  }
`;

const Ctgs = styled.div``;
const Ctg = styled.div``;

const Menus = styled.div``;
const Menu = styled.div``;
const Row3 = styled.div``;
