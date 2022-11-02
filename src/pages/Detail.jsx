import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { BiShareAlt } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import { SlBell } from 'react-icons/sl';

const Detail = () => {
   const userName = localStorage.getItem('userName');

   return (
      <Layout>
         <UpperWrapper>
            <ImgDiv>사진430*552</ImgDiv>
            <GoodsInfo>
               <div>
                  <SpanGray>샛별배송(delivery)</SpanGray>
               </div>
               <div>
                  <GoodsName>
                     상품명(goodsName){' '}
                     <ShareBtn type='button'>
                        <BiShareAlt />
                     </ShareBtn>
                  </GoodsName>
               </div>
               <div>
                  <GoodsPrice>12,900</GoodsPrice>
                  <span>원</span>
                  <div style={{ marginTop: '10px' }}>
                     {!userName ? (
                        <span style={{ color: 'purple' }}>
                           로그인 후, 적립 혜택이 제공됩니다.
                        </span>
                     ) : (
                        <span>
                           <SpanGray>일반 0.1% | </SpanGray>개당 ?원 적립
                        </span>
                     )}
                  </div>
               </div>
               <UpperInner>
                  <GoodsSecondInfo>
                     <Subject>배송</Subject>
                     <Content>
                        샛별배송
                        <br />
                        <p>
                           23시 전 주문 시 내일 아침 7시 전 도착
                           <br />
                           (대구·부산·울산 샛별배송 운영시간 별도 확인)
                        </p>
                     </Content>
                  </GoodsSecondInfo>
                  <GoodsSecondInfo>
                     <Subject>판매자</Subject>
                     <Content>컬리</Content>
                  </GoodsSecondInfo>
                  <GoodsSecondInfo>
                     <Subject>중량/용량</Subject>
                     <Content>(weight)</Content>
                  </GoodsSecondInfo>
                  <GoodsSecondInfo>
                     <Subject>원산지</Subject>
                     <Content>(from)</Content>
                  </GoodsSecondInfo>
                  <GoodsSecondInfo>
                     <Subject>상품선택</Subject>
                     <Qtybox>
                        <div>(상품 이름)</div>
                        <div style={{ display: 'flex' }}>
                           <Count>
                              <div>-</div>
                              <div>0</div>
                              <div>+</div>
                           </Count>
                           <Cost>
                              <b>(가격)</b>
                           </Cost>
                        </div>
                     </Qtybox>
                  </GoodsSecondInfo>
                  <TotalBox>
                     <div>
                        <span>총 상품금액: </span>
                        <span style={{ fontSize: '30px', fontWeight: '600' }}>
                           12,900
                        </span>{' '}
                        <span>원</span>
                     </div>
                     <div
                        style={{
                           display: 'inline-flex',
                           justifyContent: 'end',
                        }}>
                        <SaveBox>적립</SaveBox>
                        <SaveTerm>로그인 후, 적립 혜택 제공</SaveTerm>
                     </div>
                  </TotalBox>
                  <Btns>
                     <div>
                        <FiHeart
                           style={{ fontSize: '27px', color: 'purple' }}
                        />
                     </div>
                     <div>
                        <SlBell
                           style={{ fontSize: '27px', color: 'lightGray' }}
                        />
                     </div>
                     <div>
                        <div>장바구니 담기</div>
                     </div>
                  </Btns>
               </UpperInner>
            </GoodsInfo>
         </UpperWrapper>
      </Layout>
   );
};

export default Detail;

const UpperWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 30px;
`;

const ImgDiv = styled.div`
   width: 430px;
   height: 552px;
   background-color: aliceblue;
`;

const GoodsName = styled.div`
   justify-content: space-between;
`;
const GoodsPrice = styled.span``;
const SpanGray = styled.span``;

const GoodsInfo = styled.div`
   width: 560px;
   height: auto;

   span {
      font-size: 12px;
   }
   /* background-color: beige; */

   div {
      margin-bottom: 5px;
   }

   span {
      font-size: 14px;
      font-weight: 500;
   }

   ${SpanGray} {
      font-size: 14px;
      font-weight: 500;
      color: gray;
   }

   ${GoodsName} {
      font-size: 25px;
      font-weight: 450;
   }

   ${GoodsPrice} {
      font-size: 29px;
      font-weight: 600;
      margin-bottom: 20px;
   }
`;

const ShareBtn = styled.button`
   background-color: transparent;
   font-size: 20px;
   border: 1px solid #e1e1e1;
   width: 35px;
   height: 35px;
   border-radius: 30px;
   float: right;
`;

const GoodsSecondInfo = styled.div`
   display: flex;
   margin: 15px 0px 0px 0px;
   border-top: 0.5px solid #e1e1e1;
   padding-top: 15px;
`;

const UpperInner = styled.div`
   /* background-color: aliceblue; */
   margin-top: 20px;
   /* border-top: 0.5px solid #e1e1e1;
   padding-top: 20px; */
`;

const Subject = styled.div`
   width: 140px;
   font-size: 14px;
   color: #626161;
`;

const Content = styled.div`
   font-size: 15px;

   p {
      font-size: 12px;
      font-weight: 400;
      padding: 5px 0px 0px 0px;
      color: #626161;
   }
`;

const Qtybox = styled.div`
   width: 100%;
   border: 0.5px solid #d5d5d5;
   font-size: 12px;
   padding: 10px;

   p {
      text-align: end;
   }
`;

const Count = styled.div`
   width: 90px;
   border: 0.5px solid #afafaf;
   border-radius: 3px;
   display: flex;
   justify-content: space-between;
   padding: 0px 10px 0px 10px;
   font-size: 17px;
   font-weight: 400;
`;

const Cost = styled.div`
   margin: 10px 0px 00px 280px;
   text-decoration: solid;
`;

const TotalBox = styled.div`
   text-align: end;
   margin-top: 20px;
   border-top: 0.5px solid #afafaf;
   padding-top: 30px;
   padding-bottom: 30px;

   span:first-child {
      font-size: 13px;
   }

   span:last-child {
      font-size: 20px;
   }
`;

const SaveBox = styled.div`
   font-size: 11px;
   background-color: #eb9c09;
   color: white;
   width: 35px;
   height: 18px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   font-weight: 500;
   margin-right: 5px;
`;

const SaveTerm = styled.div`
   font-size: 14px;
   margin: -3px 0px 0px 0px;
   font-weight: 500;
   color: gray;
`;

const Btns = styled.div`
   display: flex;
   padding-bottom: 70px;

   div {
      height: 60px;
      width: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      border: 1px solid #afafaf;
      border-radius: 2px;
   }

   div:last-child {
      background-color: #7a2295;
      width: 100%;
      margin-right: 0px;
      color: #fff;
      border: none;
      height: 60px;
      margin-top: 2px;
      font-weight: 500;
   }
`;
