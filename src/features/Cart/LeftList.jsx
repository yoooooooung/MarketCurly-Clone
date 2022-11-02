import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function LeftList() {
  const [toggle, setToggle] = useState(true);
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState([]);
  const token = localStorage.getItem("token");

  console.log("localStorage", localStorage);
  console.log("token값", token);

  const clickToggle = () => {
    setToggle((prev) => !prev);
  };

  const newistGet = async () => {
    try {
      const { data } = await axios.get("https://kyuudukk.shop/carts/list", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log("data두번", data.data);
      return setCart(data.data);
    } catch (error) {
      return alert(error);
    }
  };

  useEffect(() => {
    newistGet();
  }, []);

  const amountHandler = (abc, value) => {
    // e.preventDefault();
    // onChangeAmount(this.cartsId, "quantity", this.quantity + 1);
    onChangeAmount(abc.cartsId, "quantity", abc.quantity + value);
  };

  const onChangeAmount = (id, key, value) => {
    console.log("id값", id);
    console.log("key값", key);
    console.log("value값", value);

    setCart(
      cart.map((ccc) =>
        ccc.cartsId == id ? { ...ccc, [key]: value } : { ...ccc }
      )
    );
  };

  return (
    <div>
      <Left>
        <Row1>
          <label>
            <input type="checkbox" />
            <span>전체선택</span>
          </label>
          <p></p>
          <button>선택삭제</button>
        </Row1>
        <Row2>
          <Title>
            <p style={{}}>
              <img
                alt="#"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsPSIjZmZiMjU4Ij4KICA8cGF0aCBkPSJtMzYwLjY5IDI1My43Yy0xMDYuMjcgMTMuMjM4LTEzMy4yNSAxMTQuNi0xMjguMjggMjA4LjA0IDQuMzEyNSA4MS4wODYgNzMuNDMgMTQwLjU4IDE1My4wNiAxMzkuNDYgNDQuNzU0LTAuNjMyODEgNzEuMDMxLTEwLjc4OSA5Ni45MjYtNDguODAxIDI1LjUyMy0zNy40NzMgMzYuMzQtODQuNSAzNy42NTItMTI5LjMxIDEuNDMzNi00OC43OTctMTMuMDU5LTk2Ljc2Mi00NC45MS0xMzQuNDQtMjcuMDYyLTMyLjAxMi02Ni43MzgtMzEuNzgxLTEwNi4xLTMyLjE3Ni0xNC42NTYtMC4xNDg0NC0xNC42NjggMjIuNjIxIDAgMjIuNzcgNDMuMzQ0IDAuNDM3NSA3NS4zMjggMy4zNjMzIDEwMS4wOSA0MS41NjYgMTkuMDk4IDI4LjMxNiAyNi45NjUgNjAuNDc3IDI3LjQxIDk0LjMyNCAwLjkzMzU5IDcxLjQ1Ny0yOC4wOTQgMTYyLjExLTExMi4wNyAxNjMuMy02MS42ODQgMC44NzEwOS0xMjMuNzEtNDMuMDQzLTEyOS43LTEwOC4xNi03LjMwODYtNzkuMzQgMTAuMDM5LTE4MS45NyAxMDQuOTMtMTkzLjggMTQuMzQ0LTEuNzg5MSAxNC41Mi0yNC41NzgtMC4wMDc4MTMtMjIuNzd6Ii8+CiAgPHBhdGggZD0ibTMxMi4xMiAyOTEuMjdjMTcuMjczIDE3LjU4NiA0My41MzUgMjMuMDc4IDY1LjE1NiAzMy43NDIgMjkuMjkzIDE0LjQ0NSA1OC4yMyAyOS42NTIgODcuMzIgNDQuNTA4IDEzLjAyMyA2LjY1MjMgMjQuNTU5LTEyLjk4OCAxMS40OTItMTkuNjYtMjUuOTkyLTEzLjI3My01MS45MzQtMjYuNjQ4LTc3Ljk4NC0zOS44MTItMjAuOTQxLTEwLjU4Mi01My41NzgtMTguMjczLTY5Ljg4Ny0zNC44NzUtMTAuMjg1LTEwLjQ3My0yNi4zNzkgNS42MzI4LTE2LjA5OCAxNi4wOTh6Ii8+CiAgPHBhdGggZD0ibTQzMi4wMiAyNjkuNzNjLTM0LjA0MyA4LjM2MzMtNTQuODU5IDI5LjY4OC04NS4wNzQgNDQuNzg1LTMxLjM5OCAxNS42OTEtNjMuMzkxIDI4LjY1Mi05NC4xOTEgNDUuOTQxLTEyLjc3NyA3LjE3MTktMS4zMTI1IDI2Ljg0OCAxMS40OTIgMTkuNjYgMjkuOTQ1LTE2LjgwOSA2MC44ODMtMjkuNTIgOTEuNjgtNDQuMzg3IDI5LjEyOS0xNC4wNjYgNDkuMjkzLTM1Ljk3MyA4Mi4xNDgtNDQuMDQzIDE0LjIxOS0zLjQ5NjEgOC4xOTUzLTI1LjQ1Ny02LjA1NDctMjEuOTU3eiIvPgogIDxwYXRoIGQ9Im0yNzIuMjEgMzc4LjAyYzMxLjU3IDE0LjMzMiA2MS45NjUgMzAuNzc3IDk0LjM0IDQzLjgyIDM1LjU0NyAxNC4zMiA2OC45NDUgMjYuOTYxIDk5LjkzOCA1MC4wMjMgMTEuNzYyIDguNzUzOSAyMy4xMjUtMTEuMDA0IDExLjQ5Mi0xOS42Ni0yNC44NzktMTguNTEyLTUxLjE2LTMxLjYxNy04MC4wNTktNDIuNTU5LTM5LjQxLTE0LjkyMi03Ni4xNDEtMzQtMTE0LjIyLTUxLjI4NS0xMy4yNDItNi4wMDc4LTI0LjgyOCAxMy42MDUtMTEuNDkyIDE5LjY2eiIvPgogIDxwYXRoIGQ9Im00ODMuMTUgMzQwLjAxYy0yOC4yOTMgMjYuMjM4LTc0LjUyIDQwLjcwNy0xMDguNjEgNjEuMDM5LTQwLjU0NyAyNC4xODQtNzkuMTQxIDQ2LjY0MS0xMjMuNiA2My4yMDMtMTMuNjA5IDUuMDcwMy03LjcxODggMjcuMDg2IDYuMDUwOCAyMS45NTMgNDYuMDgyLTE3LjE3MiA4Ni44NjctNDAuMzQ4IDEyOS4wNC02NS41IDM4LjUzNS0yMi45ODQgNzkuOTY1LTMzLjc2NiAxMTMuMjEtNjQuNTk4IDEwLjc3My05Ljk4MDUtNS4zNTU1LTI2LjA1NS0xNi4wOTQtMTYuMDk4eiIvPgogIDxwYXRoIGQ9Im00OTYuNjkgNDQyLjYyYy0zMC4yNSAxNS40OTYtNjEuNDggMjkuNzE1LTg5LjI5NyA0OS4zOTUtMzMuNzQyIDIzLjg3MS02My41NjIgNDUuMDM1LTEwMy4zIDU4LjQzNC0xMy44MTIgNC42NTYyLTcuODg2NyAyNi42NTIgNi4wNTA4IDIxLjk1MyAzNi43NDYtMTIuMzg3IDY2LjYyMS0yOS42NTYgOTcuODEyLTUyLjY5OSAzMS4zMjQtMjMuMTQxIDY1LjY1Ni0zOS43MTUgMTAwLjIyLTU3LjQyMiAxMy4wNDctNi42ODM2IDEuNTQzLTI2LjMzNi0xMS40ODgtMTkuNjZ6Ii8+CiAgPHBhdGggZD0ibTI2OS41OSA0ODEuNTJjMzcuMzIgMTMuMjczIDcyLjcxOSAyOS45MTggMTA2LjU5IDUwLjQzOCAyNi4zMTYgMTUuOTM4IDUxLjQ0MSAzMS43MzQgODEuMDQzIDQwLjgwOSAxNC4wMzkgNC4zMDQ3IDIwLjA0My0xNy42NjQgNi4wNTA4LTIxLjk1My0zNS42NDUtMTAuOTMtNjUuMDE2LTMzLjI4OS05Ny4yODEtNTEuMTQ4LTI4Ljk0OS0xNi4wMjctNTkuMjA3LTI5LjAxNi05MC4zNTUtNDAuMDk4LTEzLjgyOC00LjkyMTktMTkuNzgxIDE3LjA2Ni02LjA1MDggMjEuOTUzeiIvPgogIDxwYXRoIGQ9Im00NDYuMzggMTgyLjU0YzEuMjgxMiAxOC4zMjQtNi4yNjU2IDI3Ljg1OS0xOS41NDcgMzguOTgtNS44NjcyIDQuOTE0MS0xMS4xOCAxMS4xNTItMTguMjQ2IDE0LjM3OS02LjkyNTggMy4xNjQxLTE1LjAxMiAyLjQ0NTMtMjIuNDQxIDMuOTc2NiA0LjY2OCA0LjY2OCA5LjMzNTkgOS4zMzU5IDE0LjAwNCAxNC4wMDQgNC43MTA5LTE0Ljg2MyA3LjUwMzktMzAuMDQzIDE4LjYzNy00MS40MzQgMTAuMzE2LTEwLjU1MSAyMi4wMjMtMTMuMTI5IDM2LjAzOS0xNy4zNzEgMTMuOTg4LTQuMjM0NCA4LjAyNzMtMjYuMjE5LTYuMDUwOC0yMS45NTMtMTguMjczIDUuNTMxMi0zMi42MjUgOS40Mzc1LTQ2LjA4NiAyMy4yMjctMTQuNTIzIDE0Ljg3NS0xOC4zMjggMzIuMDI3LTI0LjQ5MiA1MS40OC0yLjc4MTIgOC43NzczIDUuOTM3NSAxNS42NjggMTQuMDA0IDE0LjAwNCAxMC45MDItMi4yNSAyMC4zNTItMS41MTk1IDMwLjM0LTcuNTI3MyA5LjEwNTUtNS40NzY2IDE2LjcyMy0xMy41NyAyNC45NDktMjAuMjE1IDE1LjY5MS0xMi42NzYgMjMuMDY2LTMxLjQzNCAyMS42Ni01MS41NTEtMS4wMTU2LTE0LjUzNS0yMy43OTMtMTQuNjQ4LTIyLjc3IDB6Ii8+CiAgPHBhdGggZD0ibTM2MC4yIDE3MWM1LjEyNSA3Ljk4ODMgMTAuNTMxIDE1Ljg1OSAxNS4zOTEgMjQuMDEyIDQuOTE4IDguMjQ2MSA1LjM5MDYgMTcuOTg0IDYuOTY0OCAyNy4zMjQgMi40MjU4IDE0LjQxOCAyNC4zNzEgOC4zMDQ3IDIxLjk1My02LjA1MDgtMS43MDMxLTEwLjEyOS0yLjU0NjktMjAuNDQxLTcuNDE4LTI5LjY0MS00Ljk3MjctOS4zOTA2LTExLjQ5Mi0xOC4xOTUtMTcuMjMtMjcuMTMzLTcuODkwNi0xMi4yOTMtMjcuNjA1LTAuODkwNjItMTkuNjYgMTEuNDg4eiIvPgogIDxwYXRoIGQ9Im0zNTkgMTU4LjhjLTUuNzk2OSAxOS43ODUtMTMuODA1IDM0LjA1OS0xMy43NSA1NS4yNjYgMC4wMTk1MzIgNy40NjQ4LTAuNDQxNDEgMTUuNjcyIDIuNTUwOCAyMi42NjggMy42MDU1IDguNDM3NSAxMi4zOTEgMTYuNTEyIDE3Ljk1NyAyMy42MzMgOS4wMTU2IDExLjUzMSAyNS4wMjMtNC42Nzk3IDE2LjEwMi0xNi4xMDItMTAuMjkzLTEzLjE2OC0xNS4yMDMtMjMuOTQ5LTEzLjcyNy00MC44NTkgMS4yMDctMTMuODUyIDguOTY4OC0yNS4zNzkgMTIuODI4LTM4LjU1MSA0LjEyMTEtMTQuMDktMTcuODQ4LTIwLjEwOS0yMS45NjEtNi4wNTQ3eiIvPgogIDxwYXRoIGQ9Im0zNTcuMzYgMjQzYy0xNS4zNzEtMy4yNTc4LTI0LjUzMS0xMS45OTYtMzQuOTkyLTIzLjAyNy0zLjk2NDgtNC4xNzk3LTkuMzQ3Ny04LjU0NjktMTEuMzAxLTE0LjA4Ni0yLjMyODEtNi42MDE2LTEuMzU5NC0xMy44NzEtMy45MTQxLTIwLjU1OS0yLjY0ODQgNC42NjgtNS4zMDA4IDkuMzM1OS03Ljk0OTIgMTQuMDA0IDExLjAxMi0yLjMxMjUgMTguNDA2IDUuMTI4OSAyNC43MjMgMTIuNDIyIDYuNjc1OCA3LjcwNyAxNC41NzggMTAuMzQgMTUuNjEzIDIxLjUyMyAxLjMzNTkgMTQuNDY5IDI0LjExNyAxNC42MDkgMjIuNzcgMC0wLjc0NjA5LTguMDg5OC0xLjg4MjgtMTUuNjYtNi42NTIzLTIyLjQ0MS00LjY3OTctNi42NTIzLTExLjkwMi0xMS41LTE3LjIzOC0xNy42MTctMTEuMTI1LTEyLjc0Ni0yOC41Mi0xOS4zNTUtNDUuMjY2LTE1Ljg0LTUuNjE3MiAxLjE3OTctMTAuMDUxIDguNTAzOS03Ljk0OTIgMTQuMDA0IDMuMzM1OSA4LjcyNjYgMS45NzY2IDE4LjI0NiA2LjQ0OTIgMjYuNzE1IDMuNjE3MiA2Ljg1MTYgOS4zNDc3IDEyLjQxOCAxNC42MjEgMTcuOTc3IDEzLjA5NCAxMy44MDEgMjUuOTE0IDI0LjgyOCA0NS4wMzkgMjguODc5IDE0LjI4OSAzLjAzMTIgMjAuMzk4LTE4LjkxNCA2LjA0NjktMjEuOTUzeiIvPgogPC9nPgo8L3N2Zz4K"
              />
            </p>
            <p>신선 과일</p>
            <button onClick={clickToggle}>
              {toggle ? (
                <img
                  alt="#"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iN2EwMnFxZzNqYSIgZD0iTTExIDEyaDl2OSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMCAwaDMwdjMwSDB6Ii8+CiAgICAgICAgPHVzZSBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDE1LjUgMTYuNSkiIHhsaW5rOmhyZWY9IiM3YTAycXFnM2phIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                />
              ) : (
                <img
                  alt="#"
                  style={{ transform: "rotate(180deg)" }}
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iN2EwMnFxZzNqYSIgZD0iTTExIDEyaDl2OSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMCAwaDMwdjMwSDB6Ii8+CiAgICAgICAgPHVzZSBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDE1LjUgMTYuNSkiIHhsaW5rOmhyZWY9IiM3YTAycXFnM2phIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                />
              )}
            </button>
          </Title>
          {toggle ? (
            <Products>
              {cart?.map((abc) => (
                <li key={abc.cartsId}>
                  <label>
                    <input type="checkbox" />
                    <span></span>
                  </label>
                  <Img>
                    <img src={abc.Good.goodsImage} />
                  </Img>
                  <Name>
                    <p>{abc.Good.goodsName}</p>
                    <p>{abc.Good.delivery}</p>
                  </Name>
                  <Qty>
                    <button
                      onClick={() => amountHandler(abc, -1)}
                      disabled={abc.quantity === 1}
                    ></button>
                    <div>{abc.quantity}</div>
                    <button onClick={() => amountHandler(abc, 1)}></button>
                  </Qty>
                  <Price>
                    {/* 금액에 점찍기 */}
                    {Number(abc.quantity * abc.Good.price).toLocaleString(
                      "ko-KR"
                    )}
                    원
                  </Price>
                  <Del>✖</Del>
                </li>
              ))}
              <li>
                <label>
                  <input type="checkbox" />
                  <span></span>
                </label>
                <Img>
                  <img src={require(`../../img/cart_ex1.png`)} />
                </Img>
                <Name>
                  <p>상품이름</p>
                  <p>상품설명</p>
                </Name>
                <Qty>
                  <button
                    onClick={() => setQty(qty - 1)}
                    disabled={qty === 1}
                  ></button>
                  <div>{qty}</div>
                  <button onClick={() => setQty(qty + 1)}></button>
                </Qty>
                <Price>qty * Price원</Price>
                <Del>✖</Del>
              </li>
              <li>상품1</li>
              <li>상품2</li>
              <li>상품3</li>
            </Products>
          ) : null}
        </Row2>
        <Row1>
          <label>
            <input type="checkbox" />
            <span>전체선택</span>
          </label>
          <p></p>
          <button>선택삭제</button>
        </Row1>
      </Left>
    </div>
  );
}

const Row1 = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 18px 0;

  label {
    /* background-color: blue; */
    display: inline-flex;
    font-size: 14px;
    line-height: 26px;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    span {
      padding: 0 0 0 34px;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K);
      background-repeat: no-repeat;
      background-position: 3px;
    }
    input {
      overflow: hidden;
      position: absolute;
      clip: rect(0 0 0 0);
      -webkit-clip-path: inset(50%);
      clip-path: inset(50%);
      width: 1px;
      height: 1px;
    }
  }
  input:checked + span {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ni4wMDAwMDAsIC0xMDkwLjAwMDAwMCkgdHJhbnNsYXRlKDEwMC4wMDAwMDAsIDkzNi4wMDAwMDApIHRyYW5zbGF0ZSg2MC4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzVGMDA4MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K);
  }
  p {
    display: inline-block;
    width: 1px;
    height: 14px;
    background: #ddd;
    margin: 6px 21px 0 22px;
    vertical-align: top;
  }
  button {
    background-color: transparent;
    border: none;
    font-size: 14px;
    line-height: 26px;
    font-weight: 400;
  }
`;

const Title = styled.div``;
const Products = styled.ul``;
const Row2 = styled.div`
  ${Title} {
    display: flex;
    justify-content: space-around;
    /* background-color: pink; */
    border-top: 1px solid black;

    p {
      height: 30px;
      /* background-color: green; */
      font-size: 18px;
      font-weight: 400;
      margin: 20px 0;

      &:first-child {
        width: 30px;
        object-fit: cover;
        overflow: hidden;
        margin-right: 5px;

        img {
          width: 150%;
          margin-left: -25%;
          margin-top: -30%;
        }
      }
    }
    button {
      width: 30px;
      height: 30px;
      margin: 20px 0 20px 580px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      img {
        margin-left: -5%;
        margin-top: -5%;
      }
    }
  }

  ${Products} {
    li {
      padding: 20px 0;
      height: 118px;
      /* background-color: #f7e1f2; */
      list-style-type: none;
      display: flex;
      justify-content: space-around;
      /* border-bottom: 1px solid gray; */
      &:not(:first-of-type) {
        border-top: 1px solid rgb(244, 244, 244);
      }

      label {
        display: inline-flex;
        font-size: 14px;
        line-height: 26px;
        font-weight: 500;
        color: #333;
        cursor: pointer;
        span {
          padding: 0 0 0 34px;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K);
          background-repeat: no-repeat;
          background-position: 3px;
        }
        input {
          overflow: hidden;
          position: absolute;
          clip: rect(0 0 0 0);
          -webkit-clip-path: inset(50%);
          clip-path: inset(50%);
          width: 1px;
          height: 1px;
        }
      }
      input:checked + span {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ni4wMDAwMDAsIC0xMDkwLjAwMDAwMCkgdHJhbnNsYXRlKDEwMC4wMDAwMDAsIDkzNi4wMDAwMDApIHRyYW5zbGF0ZSg2MC4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzVGMDA4MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K);
      }
    }
  }
`;

const Left = styled.div`
  width: 742px;
  height: 300px;
`;

const Img = styled.div`
  img {
    width: 60px;
    height: 78px;
    object-fit: cover;
  }
`;
const Name = styled.div`
  width: 345px;
  height: 78px;
  p {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 400;
    &:last-child {
      color: #999;
      font-size: 14px;
    }
  }
`;
const Qty = styled.div`
  display: flex;
  margin: 0;
  width: 88px;
  height: 30px;
  margin: 24px 0;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  div {
    width: 28px;
    height: 28px;
    text-align: center;
  }
  button {
    width: 28px;
    height: 28px;
    border: none;
    font-size: 1px;
    color: transparent;
    background-size: cover;
    background-color: transparent;
    cursor: pointer;
    &:first-child {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=);
      /* background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iI0RERCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=); */
    }
    &:last-child {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K);
    }
    &:disabled {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iI0RERCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=);
    }
  }
`;
const Price = styled.div`
  width: 127px;
  height: 24px;
  margin: 24px 0;
  text-align: right;
  font-weight: 500;
`;
const Del = styled.div`
  width: 30px;
  height: 30px;
  margin: 24px 0;
  text-align: center;
  color: #999;
`;
