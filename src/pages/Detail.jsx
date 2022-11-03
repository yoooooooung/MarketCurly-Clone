import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { BiShareAlt } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { SlBell } from "react-icons/sl";
import GetReivew from "../features/review/GetReview";
import { useDispatch, useSelector } from "react-redux";
import { __getDetails } from "../redux/modules/detailSlice";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Detail = () => {
  const id = useParams();
  const userName = localStorage.getItem("userName");
  const dispatch = useDispatch();
  const { isLoading, error, detail } = useSelector((state) => state.detail);
  const [qty, setQty] = useState(1);
  const [toCart, setToCart] = useState({
    quantity: qty,
  });

  useEffect(() => {
    dispatch(__getDetails(id.goodsId));
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const token = localStorage.getItem("token");
  const onSubmitHandler = (toCart) => {
    axios.post(`https://kyuudukk.shop/carts/${id.goodsId}`, toCart, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    Swal.fire({
      title: "주문완료 되었습니다 !",
      confirmButtonColor: "#7a2295",
    });
    setQty(1);
  };

  console.log("qty :", qty);
  console.log("toCart확인 :", toCart);

  return (
    <Layout>
      <UpperWrapper>
        <Img src={detail.goodsImage} />
        <GoodsInfo>
          <div>
            <SpanGray>{detail.delivery}</SpanGray>
          </div>
          <div>
            <GoodsName>
              {detail.goodsName}
              <ShareBtn type="button">
                <BiShareAlt />
              </ShareBtn>
            </GoodsName>
          </div>
          <div>
            <GoodsPrice>
              {Number(detail.price).toLocaleString("ko-KR")}
            </GoodsPrice>
            <span>원</span>
            <div style={{ marginTop: "10px" }}>
              {!userName ? (
                <span style={{ color: "purple" }}>
                  로그인 후, 적립 혜택이 제공됩니다.
                </span>
              ) : (
                <span>
                  <SpanGray>일반 0.1% | </SpanGray>개당 {detail.price * 0.001}원
                  적립
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
              <Content>{detail.weight}</Content>
            </GoodsSecondInfo>
            <GoodsSecondInfo>
              <Subject>원산지</Subject>
              <Content>{detail.from}</Content>
            </GoodsSecondInfo>
            <GoodsSecondInfo>
              <Subject>상품선택</Subject>
              <Qtybox>
                <div>{detail.goodsName}</div>
                <div style={{ display: "flex" }}>
                  <Count>
                    {qty === 0 ? (
                      <button
                        disabled
                        onClick={() => {
                          setQty(qty - 1);
                          setToCart({ ...toCart, quantity: qty - 1 });
                        }}
                      >
                        -
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setQty(qty - 1);
                          setToCart({ ...toCart, quantity: qty - 1 });
                        }}
                      >
                        -
                      </button>
                    )}

                    <div>{qty}</div>
                    <button
                      onClick={() => {
                        setQty(qty + 1);
                        setToCart({ ...toCart, quantity: qty + 1 });
                      }}
                    >
                      +
                    </button>
                  </Count>
                  <Cost>
                    <b>{Number(detail.price).toLocaleString("ko-KR")}</b>
                  </Cost>
                </div>
              </Qtybox>
            </GoodsSecondInfo>
            <TotalBox>
              <div>
                <span>총 상품금액: </span>
                <span style={{ fontSize: "30px", fontWeight: "600" }}>
                  {Number(detail.price * qty).toLocaleString("ko-KR")}
                </span>{" "}
                <span>원</span>
              </div>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "end",
                }}
              >
                <SaveBox>적립</SaveBox>
                <SaveTerm>로그인 후, 적립 혜택 제공</SaveTerm>
              </div>
            </TotalBox>
            <Btns>
              <div>
                <FiHeart style={{ fontSize: "27px", color: "purple" }} />
              </div>
              <div>
                <SlBell style={{ fontSize: "27px", color: "lightGray" }} />
              </div>
              <div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    onSubmitHandler(toCart);
                  }}
                >
                  장바구니 담기
                </div>
              </div>
            </Btns>
          </UpperInner>
        </GoodsInfo>
      </UpperWrapper>
      <Menubar>
        <div>상품설명</div>
        <div>후기</div>
      </Menubar>
      <BigImg src={detail.goodsImage} />
      <NameFeild>{detail.goodsName}</NameFeild>
      <GetReivew />
    </Layout>
  );
};

export default Detail;

const UpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Img = styled.img`
  width: 430px;
  height: 552px;
`;

const BigImg = styled.img`
  transform: rotate(90deg);
  width: 810px;
  margin-left: 120px;
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

  button {
    font-size: 20px;
    background-color: transparent;
    border: none;
    margin-top: -5px;
    cursor: pointer;
  }
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

const Menubar = styled.div`
  background-color: #ececec;
  display: flex;
  height: 60px;

  div {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: gray;
    border: 0.5px solid #bebebe;
  }

  div:first-child {
    background-color: #fff;
    border-bottom: none;
    color: purple;
  }
`;

const NameFeild = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  font-weight: 600;
  color: gray;
  margin-top: -100px;
  margin-bottom: 60px;
`;
