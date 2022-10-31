import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <CarouselStyle {...settings}>
      <div>
        <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1637921725520l0.jpeg" />
        <p>김장용 해남 절임 배추 20kg(예약일 수령)</p>
      </div>
      <div>
        <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1572931731508l0.jpg" />
        <p>김장용 해남 절임 배추 20kg(예약일 수령)</p>
      </div>
      <div>
        <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1636612949553l0.jpg" />
        <p>[김장세트] 4인 가족 간편 김장 패키지(예약일 수령)</p>
      </div>
      <div>
        <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1626678498777l0.jpg" />
        <p>[김장세트] 4인 가족 간편 김장 패키지(예약일 수령)</p>
      </div>
      <div>
        <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/153543279519l0.jpg" />
        <p>[김장세트] 4인 가족 간편 김장 패키지(예약일 수령)</p>
      </div>
    </CarouselStyle>
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
