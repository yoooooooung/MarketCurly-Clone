import React from "react";
import styled from "styled-components";
import "./slick.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "./Carousel";
import Layout from "../components/Layout";
import axios from "axios";
import Footer from "../features/footer/Footer";
import FooterBottom from "../features/footer/FooterBottom";
import FooterRights from "../features/footer/FooterRights";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { __getGoods } from "../redux/modules/mainpageSlice";
import { __getGoodsVege } from "../redux/modules/vegeSlice";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

export default function MainPage() {
  const { isLoading, error, goods } = useSelector(
    (state) => state.mainpageSlice
  );

  const { goodsItem } = useSelector((state) => state.vegeSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getGoods("all"));
  }, [dispatch]);

  if (isLoading) {
    return;
    <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/db25c6a9-edab-46f3-9a23-95c9d16c1957.jpg" />
        </div>
        <div>
          <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/cb7bd55a-61b3-4f55-bd4e-87ef4160da7b.jpg" />
        </div>
        <div>
          <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/d70548b0-ac14-4755-bfe7-a5699781da24.png" />
        </div>
        <div>
          <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/ff498d74-0310-462c-aa0b-9089564f0d1a.jpg" />
        </div>
        <div>
          <img src="https://img-cf.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/f3dc61b3-068e-433e-a02d-c508a21cd578" />
        </div>
        <div>
          <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/77f7f3bc-49d3-423b-810f-bd0e846259be.jpg" />
        </div>
      </Slider>
      <Layout>
        <Recommend>
          <div>이 상품 어때요?</div>
        </Recommend>

        <SliderTwo>
          <Slider {...settings2}>
            {goods.map((abc) => (
              <div key={abc.goodsId}>
                <Link to={`detail/${Number(abc.goodsId)}`}>
                  <img src={abc.goodsImage} />
                </Link>
                <div className="goodsname">{abc.goodsName}</div>
                <div className="pricename">
                  {Number(abc.price).toLocaleString("kr")}
                  {"원"}
                </div>
              </div>
            ))}
          </Slider>
        </SliderTwo>
        <ThirdPic>
          {/* 한우 먹기 좋은 날 */}
          <img src="https://product-image.kurly.com/banner/random-band/pc/img/92aa1dca-7103-4fc3-9d2f-b6755ae43767.jpg" />
        </ThirdPic>
      </Layout>
      <Wrap>
        <InnerWrap>
          <div>
            <Carousel
              // vege={vege} fruit={fruit}
              goodsItems={goodsItem}
            />
          </div>
        </InnerWrap>
      </Wrap>

      <Layout>
        <Footer />
        <FooterBottom />
        <FooterRights />
      </Layout>
    </>
  );
}

const Recommend = styled.div`
  font-weight: bold;
  margin-top: 30px;
  font-size: 28px;
  display: flex;
  justify-content: center;
`;

const SliderTwo = styled.div`
  margin-top: 30px;
  img {
    width: 240px;
    height: 320px;
  }
  .goodsname {
    margin-top: 5px;
  }
  .pricename {
    font-weight: bold;
    font-size: 14px;
    margin-top: 3px;
  }
`;

const ThirdPic = styled.div`
  img {
    margin-top: 50px;
    width: 100%;
  }
`;
const Wrap = styled.div`
  margin-top: 50px;
  max-width: 1920px;
  min-width: 1050px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InnerWrap = styled.div`
  width: 1050px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//,점 찎기
//.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
