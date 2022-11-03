import React from "react";
import styled from "styled-components";
import instagram from "../image/ico_instagram.png";
import facebook from "../image/ico_fb.png";
import youtube from "../image/ico_youtube.png";
import marketkurly from "../image/ico_naverpost.png";
import marketkurlyTwo from "../image/ico_blog.png";

export default function IntroduceDetail() {
  return (
    <Detail>
      <DetailText>
        법인명(상호) : 주식회사 7조 | 사업자등록번호 : 261-81-23456
        <MoreText> 사업자정보 확인</MoreText>
      </DetailText>
      <DetailText>
        통신판매업: 제 2018-서울강남-01456호 | 개인정보보호책임자 : 김미래
      </DetailText>
      <DetailText>
        주소: 서울특별시 강남구 테헤란로 133, 18층(역삼동) | 대표이사 : 이상현
      </DetailText>
      <DetailText>
        입점문의: <MoreText>입점문의하기</MoreText> | 마케팅제휴 :
        <MoreText> 진영99@gmail.com</MoreText>
      </DetailText>
      <DetailText>
        채용문의: <MoreText> 상현99@sparta.com</MoreText>
      </DetailText>
      <DetailText>
        팩스: 080-3423-2342 | 이메일 : <MoreText> 미래99@sparta.com</MoreText>
      </DetailText>
      <DetailText>대량주문 문의: hanghe99@nave.com</DetailText>

      <a href="https://www.instagram.com/marketkurly/" target="_blank">
        <Img src={instagram}></Img>
      </a>
      <a href="https://www.facebook.com/marketkurly" target="_blank">
        <Img src={facebook}></Img>
      </a>
      <a href="https://blog.naver.com/marketkurly" target="_blank">
        <Img src={marketkurly}></Img>
      </a>
      <a href="https://m.post.naver.com/marketkurly" target="_blank">
        <Img src={marketkurlyTwo}></Img>
      </a>
      <a
        href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg"
        target="_blank"
      >
        <Img src={youtube}></Img>
      </a>
    </Detail>
  );
}

const Detail = styled.div``;
const DetailText = styled.p`
  margin-top: 5px;

  color: gray;
  font-size: 12px;
`;

const MoreText = styled.a`
  color: gray;
`;

const Img = styled.img`
  margin-top: 30px;
  margin-right: 10px;
  width: 30px;
`;
