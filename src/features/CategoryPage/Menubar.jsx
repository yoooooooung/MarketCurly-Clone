import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Menubar = () => {
  const [toggle, setToggle] = useState(true);
  // if (qty = 1) {};

  const clickToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <MenubarLayout>
      <Filter>
        <span>필터</span>
        <button>
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.78 3.96303C12.504 2.16973 10.4086 1 8.04 1C4.15192 1 1 4.15192 1 8.04C1 11.9281 4.15192 15.08 8.04 15.08C11.9281 15.08 15.08 11.9281 15.08 8.04"
              stroke="#ddd"
              stroke-width="1.6"
              stroke-linecap="square"
              stroke-linejoin="round"
            ></path>
            <path
              d="M14.4933 1L14.4933 4.52H10.9733"
              stroke="#ddd"
              stroke-width="1.6"
              stroke-linecap="square"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span>초기화</span>
        </button>
      </Filter>
      <Menus>
        <ListTitle>
          {/* <div>카테고리</div>
          <img /> */}
          <button onClick={clickToggle}>
            <div>카테고리</div>
            <p>
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
            </p>
          </button>
        </ListTitle>
        {toggle ? (
          <Lists>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" />
                  <span>국·메인·반찬요리</span>
                  <span>121</span>
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" />
                  <span>샐러드·간편식</span>
                  <span>100</span>
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" />
                  <span>간식·과자·떡</span>
                  <span>71</span>
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" />
                  <span>생활용품·리빙·캠핑</span>
                  <span>70</span>
                </label>
              </a>
            </li>
            <More>카테고리 더보기 &gt;</More>
          </Lists>
        ) : null}
      </Menus>
    </MenubarLayout>
  );
};

export default Menubar;

const MenubarLayout = styled.div`
  height: 569px;
  /* background-color: pink; */

  button {
    cursor: pointer;
    font-size: 14px;
    color: #333;
    background-color: transparent;
    border: none;
    font: inherit;
    margin: 0;
    padding: 0;
  }
`;

const Filter = styled.div`
  width: 220px;
  position: sticky;
  top: 0px;
  display: flex;
  z-index: 20;
  background-color: rgb(255, 255, 255);
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(238, 238, 238);
  line-height: 20px;

  & > span {
    font-weight: 500;
    font-size: 15px;
  }

  & > button {
    cursor: pointer;
  }
  & > button > svg {
    width: 12px;
    height: 12px;
    margin-right: 3px;
  }
  & > button > span {
    font-weight: 500;
    font-size: 13px;
    color: rgb(221, 221, 221);
  }
`;

const ListTitle = styled.button``;
const Menus = styled.div`
  height: 52px;
  ${ListTitle} {
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
    padding: 16px 0;
    /* background-color: yellow; */
    width: 100%;

    & > button {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    & p {
      width: 18px;
      height: 18px;
      padding: 1px 0;
      img {
        width: 100%;
        margin-left: -25%;
        margin-top: -10%;
      }
    }
  }
`;

const More = styled.button``;
const Lists = styled.ul`
  li {
    width: 220px;
    height: 18px;
    margin: 9px 0 18px;
    margin-bottom: 18px;
    list-style: none;

    &:first-child {
      margin-top: 9px;
    }
    &:last-child {
      margin-bottom: 21px;
    }
  }

  li > a {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }
  label {
    /* background-color: blue; */
    display: inline-flex;
    font-size: 14px;
    line-height: 26px;
    color: #333;
    cursor: pointer;
    span {
      padding: 0 0 0 28px;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K);
      background-repeat: no-repeat;
      background-position: 3px;
      background-size: 18px 18px;
      font-size: 14px;
      margin-right: 4px;

      &:last-child {
        padding: 0 0 0 5px;
        background: none;
        font-size: 12px;
        color: #cccccc;
      }
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

  li > a > button {
    margin-right: 10px;
  }

  ${More} {
    width: 220px;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 12px;
    color: #888;
  }
`;
