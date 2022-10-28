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
    // nextArrows: <SampleNextArrow />,
    // centeredSlides: false,
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
        <div>이 상품 어때요?</div>
        <div className="imgFrame">
          <img src="https://product-image.kurly.com/banner/random-band/pc/img/08eaf324-b1ce-4147-8d4a-a29d37336e63.jpg" />
        </div>
        <div></div>
      </Layout>
    </>
  );
}
//저 조금만 쉬다올게요 ㅠㅠㅠㅠ흑 배곱하요... 넷 !!! 감챱니다
//창을 줄이면 사진이 가운데 정렬이 아니게되네요 ㅠㅠ흑흑 하지만 이게 최선,,
//Layout을 이아이만 적용 안시키려고 Layout 다른 페이지에 다 따로 입혔어요 ㅋㅋㅋ ㅠㅠ

const SliderCtn = styled.div`
  width: 100%;
  min-width: 1050px;
  max-width: 1920px;
  height: 400px;
  margin: 0 auto;
  overflow-x: hidden;

  div {
    width: 100%;
  }

  div img {
    margin-left: calc(50vw - 50%);
    /* 창크기에 따라 위치 조정하는 거 하다 말았심~ */
  }
`;
