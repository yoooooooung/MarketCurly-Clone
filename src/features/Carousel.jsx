import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { useState } from "react";
import MenuIcon from "./MenuIcon";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { __getGoodsVege } from "../redux/modules/vegeSlice";

const Carousel = ({ goodsItems }) => {
  const dispatch = useDispatch();
  const [clickMenu, setClickMenu] = useState("all");
  console.log(goodsItems);
  const cate = ["vege", "fruit", "sea", "meat"];

  // console.log(cate[clickMenu]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  const itemList = [
    "채소",
    "과일∙견과∙쌀",
    "수산∙해산∙건어물",
    "정육∙계란",
    "국∙반찬∙메인요리",
    "샐러드∙간편식",
    "면∙양념∙오일",
    "생수∙음료∙우유∙커피",
    "간식∙과자∙떡",
    "베이커리∙치즈∙델리",
    "건강식품",
    "와인",
    "전통주",
    "생활용품∙리빙∙캠핑",
    "스킨케어∙메이크업",
    "헤어∙바디∙구강",
    "주방용품",
    "가전제품",
    "선물하기",
    "반려동물",
    "베이지∙키즈∙완구",
  ];

  return (
    <InnerWrap>
      <Title>
        <p>MD의 추천</p>
      </Title>
      <ul>
        <li>
          {itemList.map((item, index) => (
            <>
              {index < 7 ? (
                <div
                  onClick={() => {
                    dispatch(__getGoodsVege(cate[index]));
                  }}
                >
                  <MenuIcon name={item} index={index} clickMenu={clickMenu} />{" "}
                </div>
              ) : (
                ""
              )}
            </>
          ))}
        </li>
        <li>
          {itemList.map((item, index) => (
            <>
              {index > 6 && index < 14 ? (
                <div
                  onClick={() => {
                    setClickMenu(index);
                  }}
                >
                  <MenuIcon name={item} index={index} clickMenu={clickMenu} />{" "}
                </div>
              ) : (
                ""
              )}
            </>
          ))}
        </li>
        <li>
          {itemList.map((item, index) => (
            <>
              {index > 13 ? (
                <div
                  onClick={() => {
                    setClickMenu(index);
                  }}
                >
                  <MenuIcon name={item} index={index} clickMenu={clickMenu} />
                </div>
              ) : (
                ""
              )}
            </>
          ))}
        </li>
      </ul>
      <CarouselStyle {...settings}>
        {goodsItems.map((goodsItems) => (
          <div>
            <div key={goodsItems.goodsId}>
              <img src={goodsItems.goodsImage} />
              <div className="goodsname">{goodsItems.goodsName}</div>
              <div className="pricename">
                {goodsItems.price}
                {"원"}
              </div>
            </div>
          </div>
        ))}
      </CarouselStyle>
    </InnerWrap>
  );
};

export default Carousel;

const CarouselStyle = styled(Slider)`
  img {
    width: 240px;
    height: 320px;
  }

  .slick-list {
    width: 1000px;
    height: 400px;
    margin: auto;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
    /* border: 1px solid gray; */
    border-radius: 50px;
  }
`;

const Title = styled.div`
  margin-bottom: 50px;
  height: 50xp;
  p {
    font-size: 28px;
    font-weight: bold;
  }
`;

const InnerWrap = styled.div`
  width: 1050px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    height: 180px;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  li {
    /* margin-top: 3px; */
    display: flex;
    height: 40px;
    margin-bottom: 20px;
    gap: 10px;
  }
`;
