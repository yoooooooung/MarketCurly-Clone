import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import Layout from "../components/Layout";
import "./slick.css";

export default function MainPage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  // nextArrows: <SampleNextArrow />,
  // centeredSlides: false,
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
  };

  return (
    <>
      <SliderCtn>
        <Slider {...settings}>
          <div>
            <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/db25c6a9-edab-46f3-9a23-95c9d16c1957.jpg" />
          </div>
          <div>
            <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/cb7bd55a-61b3-4f55-bd4e-87ef4160da7b.jpg" />
          </div>
          <div>
            <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/366fb022-663b-41dd-a3cf-cec96c57a5c3.jpg" />
          </div>
          <div>
            <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/ff498d74-0310-462c-aa0b-9089564f0d1a.jpg" />
          </div>
          <div>
            <img src="https://img-cf.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/f3dc61b3-068e-433e-a02d-c508a21cd578" />
          </div>
          <div>
            <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/a65593cc-2346-43a6-83ab-a4b500204dcd.jpg" />
          </div>
        </Slider>
      </SliderCtn>

      <Layout>
        {/* 두번 째  헤더 */}
        <Recommend>
          <div>이 상품 어때요?</div>
        </Recommend>
        <Slider {...settings2}>
          <div>
            <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1655461236903l0.jpeg" />
          </div>
          <div>
            <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1657867084115l0.jpg" />
          </div>
          <div>
            <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1637922854753l0.jpeg" />
          </div>
          <div>
            <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1651820195567l0.jpg" />
          </div>
        </Slider>
        <ThirdImage>
          <img src="https://product-image.kurly.com/banner/random-band/pc/img/92aa1dca-7103-4fc3-9d2f-b6755ae43767.jpg" />
        </ThirdImage>
        <div>MD의 추천</div>
      </Layout>
    </>
  );
}

const SliderCtn = styled.div`
  width: 100%;
  min-width: 1050px;
  max-width: 1920px;
  height: 400px;
  margin: 0 auto;
  overflow-x: hidden;

  div {
    width: 100%;
    /* margin:0 auto; */
  }

  div img {
    /* margin-left: calc(50vw - 50%); */
    width: 1920px;
    margin: 0 auto;

    /* 창크기에 따라 위치 조정하는 거 하다 말았심~ */
  }
`;

const Recommend = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 27px;
  /* border: 1px solid black; */
`;

const ThirdImage = styled.div`
  img {
    width: 100%;
  }
`;
