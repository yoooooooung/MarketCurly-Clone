import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import "./slick.css";
import { useState } from "react";
import MenuIcon from "./ManuIcon";
import Carousel from "./Carousel";
import Layout from "../components/Layout";

export default function MainPage() {
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

  const [clickMenu, setClickMenu] = useState();

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
      <Layout>
        <Recommend>
          <div>이 상품 어때요?</div>
        </Recommend>
        <SliderTwo>
          <Slider {...settings2}>
            <div>
              <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1655461236903l0.jpeg" />

              <div>[워커스] 솔티드 카라멜 토피스 1.25kg</div>
              <div>16,980원</div>
            </div>
            <div>
              <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1657867084115l0.jpg" />
              <div>[설치배송] 솔티드 카라멜 토피스 1.25kg</div>
              <div>16,980원</div>
            </div>
            <div>
              <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1637922854753l0.jpeg" />
              <div>[대우청해수산] 솔티드 카라멜 토피스 1.25kg</div>
              <div>16,980원</div>
            </div>
            <div>
              <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1651820195567l0.jpg" />
              <div>[태우한우] 솔티드 카라멜 토피스 1.25kg</div>
              <div>16,980원</div>
            </div>
          </Slider>
        </SliderTwo>
        <ThirdPic>
          {/* 한우 먹기 좋은 날 */}
          <img src="https://product-image.kurly.com/banner/random-band/pc/img/92aa1dca-7103-4fc3-9d2f-b6755ae43767.jpg" />
        </ThirdPic>
      </Layout>
      <Wrap>
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
                        setClickMenu(index);
                      }}
                    >
                      <MenuIcon
                        name={item}
                        index={index}
                        clickMenu={clickMenu}
                      />{" "}
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
                      <MenuIcon
                        name={item}
                        index={index}
                        clickMenu={clickMenu}
                      />{" "}
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
                      <MenuIcon
                        name={item}
                        index={index}
                        clickMenu={clickMenu}
                      />{" "}
                    </div>
                  ) : (
                    ""
                  )}
                </>
              ))}
            </li>
          </ul>

          <div>
            <Carousel />
          </div>
        </InnerWrap>
      </Wrap>
    </>
  );
}

const Recommend = styled.div`
  margin-top: 50px;
  font-size: 28px;
  display: flex;
  justify-content: center;
`;

const SliderTwo = styled.div`
  img {
    width: 240px;
    height: 320px;
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

  ul {
    height: 180px;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  li {
    display: flex;
    height: 40px;
    margin-bottom: 20px;
    gap: 10px;
  }
`;

const Title = styled.div`
  height: 50xp;
  p {
    font-size: 28px;
    font-weight: 500;
  }
`;

// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 600,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
// };

// const settings2 = {
//   dots: false,
//   infinite: true,
//   speed: 600,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: true,
// };

// return (
//   <>
//     <SliderCtn>
//       <Slider {...settings}>
//         <div>
//           <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/db25c6a9-edab-46f3-9a23-95c9d16c1957.jpg" />
//         </div>
//         <div>
//           <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/cb7bd55a-61b3-4f55-bd4e-87ef4160da7b.jpg" />
//         </div>
//         <div>
//           <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/366fb022-663b-41dd-a3cf-cec96c57a5c3.jpg" />
//         </div>
//         <div>
//           <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/ff498d74-0310-462c-aa0b-9089564f0d1a.jpg" />
//         </div>
//         <div>
//           <img src="https://img-cf.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/f3dc61b3-068e-433e-a02d-c508a21cd578" />
//         </div>
//         <div>
//           <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/a65593cc-2346-43a6-83ab-a4b500204dcd.jpg" />
//         </div>
//       </Slider>
//     </SliderCtn>

//     <Layout>
//       <Recommend>
//         <div>이 상품 어때요?</div>
//       </Recommend>
//       <SliderTwo>
//         <Slider {...settings2}>
//           <div>
//             <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1655461236903l0.jpeg" />
//             <div>[워커스] 솔티드 카라멜 토피스 1.25kg</div>
//             <div>16,980원</div>
//           </div>
//           <div>
//             <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1657867084115l0.jpg" />
//             <div>[설치배송] 솔티드 카라멜 토피스 1.25kg</div>
//             <div>16,980원</div>
//           </div>
//           <div>
//             <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1637922854753l0.jpeg" />
//             <div>[대우청해수산] 솔티드 카라멜 토피스 1.25kg</div>
//             <div>16,980원</div>
//           </div>
//           <div>
//             <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1651820195567l0.jpg" />
//             <div>[태우한우] 솔티드 카라멜 토피스 1.25kg</div>
//             <div>16,980원</div>
//           </div>
//         </Slider>
//       </SliderTwo>
//       <ThirdImage>
//         <img src="https://product-image.kurly.com/banner/random-band/pc/img/92aa1dca-7103-4fc3-9d2f-b6755ae43767.jpg" />
//       </ThirdImage>
//     </Layout>
//   </>
// );
// }

// const SliderCtn = styled.div`
//   width: 100%;
//   min-width: 1050px;
//   max-width: 1920px;
//   height: 400px;
//   margin: 0 auto;
//   overflow-x: hidden;

//   div {
//     width: 100%;
//   }

//   div img {
//     width: 1920px;
//     margin: 0 auto;
//   }
// `;
// //gap
// //패딩
// //캐러셀 마진 위아래로
// // 유저가 좋아요 트루펄스 값 꼭 받기
// // state로 저장 후 트루일때 딜리트 디스패치 요청
// // false일대 add로 요청

// const Recommend = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 28px;
//   font-weight: bold;
//   margin-bottom: 27px;
// `;

// const ThirdImage = styled.div`
//   img {
//     margin-top: 27px;
//     width: 100%;
//   }
// `;

// const RecommendTwo = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 25px;
//   font-weight: bold;
//   margin-top: 27px;
// `;

// const SliderTwo = styled.div`
//   dispaly: flex;
//   margin: 0px;
// `;
