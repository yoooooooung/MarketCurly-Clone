import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

export default function RightList({ totalDevide, checkItems }) {
  const token = localStorage.getItem("token");
  // const [checkItems, setCheckItems] = useState([]);

  const orderAlert = async (a) => {
    await Swal.fire({
      title: "주문하시겠습니까?",
      confirmButtonColor: "#7a2295",
    }).then((result) => {
      if (result.isConfirmed) {
        //컨펌시 해당 카트 아이디 모두 다 지우고
        checkItems.map((b) => {
          axios.delete(`https://kyuudukk.shop/carts/${b}`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
        });
        // 알람창 띄우기
        Swal.fire({
          title: "주문 완료 !",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
    window.location.replace("/cart");
  };
  console.log("totalDevide", totalDevide);

  // const handleSingleCheck = (checked, id) => {
  //   if (checked) {
  //     setCheckItems([...checkItems, id]);
  //   } else {
  //     // 체크 해제
  //     setCheckItems(checkItems.filter((el) => el !== id));
  //   }
  // };

  const onClickDeleteButtonHandler = (a) => {
    axios.delete(`https://kyuudukk.shop/carts/${a}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <div>
      <Right>
        <Info>
          <span>배송지</span>
          <Place>{localStorage.getItem("address")}</Place>
          <p>
            <span>샛별배송</span> 18~22시 낮배송
          </p>
          <button>배송지 변경</button>
        </Info>
        {totalDevide == undefined ? (
          <>
            <Amount>
              <div>
                <span>상품금액</span>
                <span>
                  <Prc>0</Prc>원
                </span>
              </div>
              <div>
                <span>상품할인금액</span>
                <span>
                  <Prc>0</Prc>원
                </span>
              </div>
              <div>
                <span>배송비</span>
                <span>
                  + <Prc>0</Prc>원
                </span>
              </div>
              {/* <p>
            12,000원 추가주문시, <strong>무료배송</strong>
          </p> */}
              <Total>
                <span>결제예정금액</span>
                <span>
                  <PrcB>
                    <strong>0</strong>
                  </PrcB>
                  원
                </span>
              </Total>
              <p>
                <YL>적립</YL>
                <span>로그인 후 회원 등급에 따라 적립</span>
              </p>
            </Amount>
          </>
        ) : (
          <>
            <Amount>
              <div>
                <span>상품금액</span>
                <span>
                  <Prc>{Number(totalDevide).toLocaleString("ko-KR")}</Prc>원
                </span>
              </div>
              <div>
                <span>상품할인금액</span>
                <span>
                  <Prc>0</Prc>원
                </span>
              </div>
              <div>
                <span>배송비</span>
                <span>
                  + <Prc>3,000</Prc>원
                </span>
              </div>
              {/* <p>
            12,000원 추가주문시, <strong>무료배송</strong>
          </p> */}
              <Total>
                <span>결제예정금액</span>
                <span>
                  <PrcB>
                    <strong>
                      {Number(totalDevide + 3000).toLocaleString("ko-KR")}
                    </strong>
                  </PrcB>
                  원
                </span>
              </Total>
              <p>
                <YL>적립</YL>
                <span>로그인 후 회원 등급에 따라 적립</span>
              </p>
            </Amount>
          </>
        )}

        <Bt>
          <Order onClick={(a) => orderAlert(a)}>주문하기</Order>
          <ul>
            <li>· [주문완료] 상태일 경우에만 주문 취소 가능합니다.</li>
            <li>
              · [마이컬리&gt;주문내역 상세페이지] 에서 직접 취소하실 수
              있습니다.
            </li>
          </ul>
        </Bt>
      </Right>
    </div>
  );
}

const Right = styled.div`
  width: 284px;
  margin-top: 60px;
`;

const Place = styled.div``;
const Info = styled.div`
  border: 1px solid #eee;
  border-bottom: none;
  padding: 22px 20px;
  & > span {
    padding-left: 24px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    background: url(https://res.kurly.com/pc/service/cart/2007/ico_location.svg)
      0 50% no-repeat;
    background-size: 20px 20px;
  }
  ${Place} {
    padding-top: 12px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    word-break: break-word;
  }
  & > p {
    padding: 7px 0px 12px;
    font-size: 14px;
    color: #777;
    span {
      color: purple;
    }
  }

  button {
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 36px;
    border-radius: 3px;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);
  }
`;

const Prc = styled.span``;
const PrcB = styled.span``;
const Total = styled.div``;
const YL = styled.span``;
const Amount = styled.div`
  border: 1px solid #eee;
  background-color: #fafafa;
  padding: 19px;
  & > div {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    &:first-child {
      margin: 0;
    }
  }
  ${Total} {
    margin-top: 16px;
    padding-top: 18px;
    border-top: 1px solid #eee;
  }
  p {
    display: block;
    padding-top: 2px;
    color: rgb(95, 0, 128);
    font-size: 12px;
    line-height: 18px;
    text-align: right;

    ${YL} {
      display: inline-block;
      height: 18px;
      margin-right: 4px;
      padding: 0px 6px;
      border: 1px solid rgb(255, 191, 1);
      border-radius: 9px;
      background-color: rgb(255, 191, 0);
      font-weight: 500;
      font-size: 10px;
      line-height: 16px;
      color: rgb(255, 255, 255);
    }

    &:last-child {
      padding-top: 12px;
    }
  }
  p:last-child {
    span:last-child {
      color: black;
    }
  }
  ${Prc} {
    font-size: 18px;
  }
  ${PrcB} {
    font-size: 20px;
  }
`;

const Bt = styled.div`
  margin-top: 20px;
  ul {
    padding: 16px 0;
    li {
      font-size: 12px;
      list-style-type: none;
      padding-top: 4px;
      color: #666;
    }
  }
`;
const Order = styled.button`
  display: block;
  padding: 0 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 56px;
  border-radius: 3px;
  color: #fff;
  background-color: #5f0080;
  border: 0 none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
