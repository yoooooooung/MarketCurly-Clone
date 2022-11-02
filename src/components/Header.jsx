import React from "react";
import styled from "styled-components";
import Navbar from "../features/hamburgerMenu/Navbar";
import { AiOutlineMenu } from "react-icons/ai";
import kurlyLogo from "../img/logo2.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const userName = localStorage.getItem("userName");
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <HeaderHeader>
      {/* 제일 넓은 친구  */}
      <HeaderLayout>
        {/*  */}
        <Row1>
          {!userName ? (
            <>
              <DivTwo>
                <a href="/signup">회원가입</a>
              </DivTwo>
              <DivTwo>
                <a href="/login">로그인</a>
              </DivTwo>
              <div>고객센터</div>
            </>
          ) : (
            <>
              <StatusBox>
                <center>일반</center>
              </StatusBox>
              <Div>{userName}&nbsp;님</Div>
              {/* <DropDown>
                        <DropBtn>{loginId}님</DropBtn>
                        <DropContent>
                          <button onClick={logout} style={{ cursor: 'pointer' }}>로그아웃</button>
                        </DropContent>
                     </DropDown> */}
              <Div>고객센터</Div>
              <div onClick={logout} style={{ cursor: "pointer" }}>
                로그아웃
              </div>
            </>
          )}
        </Row1>
        <Row2>
          <Logo>
            <img
              src={kurlyLogo}
              alt="마켓컬리"
              onClick={() => window.location.replace("/")}
            />
            <div>
              <p onClick={() => window.location.replace("/")}>마켓컬리</p>
              <p>|</p>
              <p>뷰티컬리</p>
            </div>
          </Logo>
          <Search placeholder="검색어를 입력해주세요" />
          <Icons>
            <button>{/* 위치 */}</button>
            <button>{/* 찜목록 */}</button>
            <button onClick={() => window.location.replace("/cart")}>
              {/* 장바구니 */}
            </button>
          </Icons>
        </Row2>
        <Row3>
          <Ctgs>
            <p>
              <AiOutlineMenu />
            </p>
            <Navbar />
          </Ctgs>
          <Menus>
            <Menu onClick={() => window.location.replace("/category")}>
              신상품
            </Menu>
            <Menu>베스트</Menu>
            <Menu>알뜰쇼핑</Menu>
            <Menu>특가/혜택</Menu>
          </Menus>
          <Bn>
<b>샛별·낮</b> &nbsp; <span style={{ color: "gray" }}>배송안내</span>
          </Bn>
        </Row3>
      </HeaderLayout>
    </HeaderHeader>
  );
}

// 마켓컬리 컬러코드 #512772

const HeaderHeader = styled.div`
  width: 100%;
  box-shadow: 0 5px 7px -5px lightgray;
`;
const HeaderLayout = styled.div`
  width: 1050px;
  margin: 0 auto;
`;

const Div = styled.div``;
const DivTwo = styled.div``;

const Row1 = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 5px 0;

  ${Div} {
    border-right: 1px solid lightgray;
  }

  ${DivTwo} {
    font-size: 12px;
    border-right: 1px solid lightgray;
    padding-right: 10px;
  }
  div {
    font-size: 12px;
    /* height: 12px; */
    /* line-height: 12px; */
    /* border-right: 1px solid lightgray; */
    padding-right: 10px;

    a {
      text-decoration: none;
    }
  }
  div:first-child {
    color: purple;
  }

  div:last-child {
    border-right: none;
  }
`;

const Logo = styled.div``;
const Search = styled.input``;
const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 10px 0 10px 10px;
  button {
    border: none;
    width: 34px;
    height: 34px;
    /* overflow: hidden; */
    cursor: pointer;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 130%;
    /* img {
      width: 150%;
      height: 150%;
      margin-left: -25%;
      margin-top: -40%;
      object-fit: cover;
      &:hover {
      }
    } */
  }
  button:first-child {
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsPSIjM2QzZDNkIj4KICA8cGF0aCBkPSJtMzc2IDU5Ny45OWMtMy42NTYyIDAtNy4xODM2LTEuMzUxNi05Ljg5ODQtMy44MDA4LTYuMjQyMi01LjYyMTEtMTUyLjg5LTEzOS4xOS0xNTIuODktMjc3LjM5IDAtNTguMTYgMzEuMDI3LTExMS45IDgxLjM5OC0xNDAuOTggNTAuMzY3LTI5LjA3OCAxMTIuNDMtMjkuMDc4IDE2Mi43OSAwIDUwLjM2NyAyOS4wODIgODEuMzk1IDgyLjgyNCA4MS4zOTUgMTQwLjk4IDAgMTM4LjItMTQ2LjY1IDI3MS43Ny0xNTIuODkgMjc3LjM5aDAuMDAzOTA2Yy0yLjcxODggMi40NDkyLTYuMjQ2MSAzLjgwMDgtOS45MDIzIDMuODAwOHptMC00MTQuMzhjLTM1LjMxMiAwLjAzOTA2My02OS4xNjggMTQuMDg2LTk0LjEzNyAzOS4wNTUtMjQuOTczIDI0Ljk2OS0zOS4wMTYgNTguODI4LTM5LjA1NSA5NC4xNDEgMCAxMDUuNTYgMTAwLjc2IDIxMy44MSAxMzMuMiAyNDUuODkgMzIuNDEtMzIuMTEzIDEzMy4xOS0xNDAuNDkgMTMzLjE5LTI0NS44OS0wLjAzOTA2Mi0zNS4zMTItMTQuMDgyLTY5LjE3Mi0zOS4wNTUtOTQuMTQxLTI0Ljk2OS0yNC45NjktNTguODI0LTM5LjAxNi05NC4xNDEtMzkuMDU1eiIvPgogIDxwYXRoIGQ9Im0zNzYgMzkwLjhjLTE5LjYyNSAwLTM4LjQ0NS03Ljc5NjktNTIuMzI0LTIxLjY3Mi0xMy44NzUtMTMuODc5LTIxLjY3Mi0zMi42OTktMjEuNjcyLTUyLjMyNHM3Ljc5NjktMzguNDQ5IDIxLjY3Mi01Mi4zMjRjMTMuODc5LTEzLjg3OSAzMi42OTktMjEuNjcyIDUyLjMyNC0yMS42NzJzMzguNDQ5IDcuNzkzIDUyLjMyNCAyMS42NzJjMTMuODc5IDEzLjg3NSAyMS42NzYgMzIuNjk5IDIxLjY3NiA1Mi4zMjQtMC4wMjM0MzggMTkuNjE3LTcuODI4MSAzOC40MjYtMjEuNjk5IDUyLjI5Ny0xMy44NzUgMTMuODcxLTMyLjY4IDIxLjY3Ni01Mi4zMDEgMjEuNjk5em0wLTExOC4zOWMtMTEuNzczIDAtMjMuMDY2IDQuNjc1OC0zMS4zOTUgMTMuMDA0LTguMzI0MiA4LjMyNDItMTMuMDA0IDE5LjYxNy0xMy4wMDQgMzEuMzk1IDAgMTEuNzczIDQuNjc5NyAyMy4wNjYgMTMuMDA0IDMxLjM5NSA4LjMyODEgOC4zMjQyIDE5LjYyMSAxMy4wMDQgMzEuMzk1IDEzLjAwNCAxMS43NzcgMCAyMy4wNy00LjY3OTcgMzEuMzk1LTEzLjAwNCA4LjMyODEtOC4zMjgxIDEzLjAwNC0xOS42MjEgMTMuMDA0LTMxLjM5NS0wLjAxMTcxOS0xMS43NzMtNC42OTUzLTIzLjA1OS0xMy4wMTYtMzEuMzgzLTguMzI0Mi04LjMyMDMtMTkuNjA5LTEzLjAwNC0zMS4zODMtMTMuMDE2eiIvPgogPC9nPgo8L3N2Zz4K");
    &:hover {
      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsPSIjNTEyNzcxIj4KICA8cGF0aCBkPSJtMzc2IDU5Ny45OWMtMy42NTYyIDAtNy4xODM2LTEuMzUxNi05Ljg5ODQtMy44MDA4LTYuMjQyMi01LjYyMTEtMTUyLjg5LTEzOS4xOS0xNTIuODktMjc3LjM5IDAtNTguMTYgMzEuMDI3LTExMS45IDgxLjM5OC0xNDAuOTggNTAuMzY3LTI5LjA3OCAxMTIuNDMtMjkuMDc4IDE2Mi43OSAwIDUwLjM2NyAyOS4wODIgODEuMzk1IDgyLjgyNCA4MS4zOTUgMTQwLjk4IDAgMTM4LjItMTQ2LjY1IDI3MS43Ny0xNTIuODkgMjc3LjM5aDAuMDAzOTA2Yy0yLjcxODggMi40NDkyLTYuMjQ2MSAzLjgwMDgtOS45MDIzIDMuODAwOHptMC00MTQuMzhjLTM1LjMxMiAwLjAzOTA2My02OS4xNjggMTQuMDg2LTk0LjEzNyAzOS4wNTUtMjQuOTczIDI0Ljk2OS0zOS4wMTYgNTguODI4LTM5LjA1NSA5NC4xNDEgMCAxMDUuNTYgMTAwLjc2IDIxMy44MSAxMzMuMiAyNDUuODkgMzIuNDEtMzIuMTEzIDEzMy4xOS0xNDAuNDkgMTMzLjE5LTI0NS44OS0wLjAzOTA2Mi0zNS4zMTItMTQuMDgyLTY5LjE3Mi0zOS4wNTUtOTQuMTQxLTI0Ljk2OS0yNC45NjktNTguODI0LTM5LjAxNi05NC4xNDEtMzkuMDU1eiIvPgogIDxwYXRoIGQ9Im0zNzYgMzkwLjhjLTE5LjYyNSAwLTM4LjQ0NS03Ljc5NjktNTIuMzI0LTIxLjY3Mi0xMy44NzUtMTMuODc5LTIxLjY3Mi0zMi42OTktMjEuNjcyLTUyLjMyNHM3Ljc5NjktMzguNDQ5IDIxLjY3Mi01Mi4zMjRjMTMuODc5LTEzLjg3OSAzMi42OTktMjEuNjcyIDUyLjMyNC0yMS42NzJzMzguNDQ5IDcuNzkzIDUyLjMyNCAyMS42NzJjMTMuODc5IDEzLjg3NSAyMS42NzYgMzIuNjk5IDIxLjY3NiA1Mi4zMjQtMC4wMjM0MzggMTkuNjE3LTcuODI4MSAzOC40MjYtMjEuNjk5IDUyLjI5Ny0xMy44NzUgMTMuODcxLTMyLjY4IDIxLjY3Ni01Mi4zMDEgMjEuNjk5em0wLTExOC4zOWMtMTEuNzczIDAtMjMuMDY2IDQuNjc1OC0zMS4zOTUgMTMuMDA0LTguMzI0MiA4LjMyNDItMTMuMDA0IDE5LjYxNy0xMy4wMDQgMzEuMzk1IDAgMTEuNzczIDQuNjc5NyAyMy4wNjYgMTMuMDA0IDMxLjM5NSA4LjMyODEgOC4zMjQyIDE5LjYyMSAxMy4wMDQgMzEuMzk1IDEzLjAwNCAxMS43NzcgMCAyMy4wNy00LjY3OTcgMzEuMzk1LTEzLjAwNCA4LjMyODEtOC4zMjgxIDEzLjAwNC0xOS42MjEgMTMuMDA0LTMxLjM5NS0wLjAxMTcxOS0xMS43NzMtNC42OTUzLTIzLjA1OS0xMy4wMTYtMzEuMzgzLTguMzI0Mi04LjMyMDMtMTkuNjA5LTEzLjAwNC0zMS4zODMtMTMuMDE2eiIvPgogPC9nPgo8L3N2Zz4K);
    }
  }
  button:nth-child(2) {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNTU3Ljc5IDQwMC41M2MyNi4xNzYtMjQuMTcyIDQyLjU1OS01OC43NzcgNDIuNTU5LTk3LjE2OCAwLTcyLjk5Mi01OS4yNy0xMzIuMjYtMTMyLjI3LTEzMi4yNi0zNS44NTkgMC02OC43MDMgMjQuMzMyLTkyLjQ4OCA1MS4zMDktMjQuMDM5LTI2Ljk2NS01Ny41NzQtNTEuMzA5LTkzLjM5NS01MS4zMDktNzIuOTk2IDAtMTMyLjI3IDU5LjI3LTEzMi4yNyAxMzIuMjYgMCAzNS41IDE0LjAwNCA2Ny43NDIgMzYuNzg5IDkxLjUwNGw2LjA1ODYgNS45MjU4Yy0wLjI0MjE5LTAuMjIyNjYgMTcwLjI2IDE2OS4yOSAxNzAuMjYgMTY5LjI5IDYuOTg0NCA2Ljk0NTMgMTguMjczIDYuOTI5NyAyNS4yNDItMC4wMzkwNjJsMTY5LjUxLTE2OS41MnptLTI0LjQ3Ny0yNi4wNTVjLTAuMTg3NSAwLjE3MTg4LTAuMzc1IDAuMzQ3NjYtMC41NTQ2OSAwLjUyNzM0bC0xNTcuMTUgMTU3LjE3LTE1OC4xMi0xNTcuMi00Ljk2NDgtNC44NDM4Yy0xNi42MjUtMTcuMzMyLTI2Ljg0LTQwLjg1OS0yNi44NC02Ni43NTggMC01My4yNjYgNDMuMjUtOTYuNTIgOTYuNTItOTYuNTIgMzIuNzM4IDAgNjEuMTUyIDI5Ljg2MyA3OC45MyA1NC41OSAzLjM1OTQgNC42NzU4IDguNzYxNyA3LjQ0NTMgMTQuNTE2IDcuNDQxNCA1Ljc1IDAgMTEuMTUyLTIuNzY5NSAxNC41MTItNy40NDUzIDE3Ljc0Mi0yNC42OTkgNDUuMjIzLTU0LjU4NiA3Ny45MjYtNTQuNTg2IDUzLjI2NiAwIDk2LjUyIDQzLjI1NCA5Ni41MiA5Ni41MiAwIDI4LjEyNS0xMi4wNTUgNTMuNDYxLTMxLjI4OSA3MS4xMTN6IiBmaWxsPSIjM2QzZDNkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==);
    &:hover {
      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNTU3Ljc5IDQwMC41M2MyNi4xNzYtMjQuMTcyIDQyLjU1OS01OC43NzcgNDIuNTU5LTk3LjE2OCAwLTcyLjk5Mi01OS4yNy0xMzIuMjYtMTMyLjI3LTEzMi4yNi0zNS44NTkgMC02OC43MDMgMjQuMzMyLTkyLjQ4OCA1MS4zMDktMjQuMDM5LTI2Ljk2NS01Ny41NzQtNTEuMzA5LTkzLjM5NS01MS4zMDktNzIuOTk2IDAtMTMyLjI3IDU5LjI3LTEzMi4yNyAxMzIuMjYgMCAzNS41IDE0LjAwNCA2Ny43NDIgMzYuNzg5IDkxLjUwNGw2LjA1ODYgNS45MjU4Yy0wLjI0MjE5LTAuMjIyNjYgMTcwLjI2IDE2OS4yOSAxNzAuMjYgMTY5LjI5IDYuOTg0NCA2Ljk0NTMgMTguMjczIDYuOTI5NyAyNS4yNDItMC4wMzkwNjJsMTY5LjUxLTE2OS41MnptLTI0LjQ3Ny0yNi4wNTVjLTAuMTg3NSAwLjE3MTg4LTAuMzc1IDAuMzQ3NjYtMC41NTQ2OSAwLjUyNzM0bC0xNTcuMTUgMTU3LjE3LTE1OC4xMi0xNTcuMi00Ljk2NDgtNC44NDM4Yy0xNi42MjUtMTcuMzMyLTI2Ljg0LTQwLjg1OS0yNi44NC02Ni43NTggMC01My4yNjYgNDMuMjUtOTYuNTIgOTYuNTItOTYuNTIgMzIuNzM4IDAgNjEuMTUyIDI5Ljg2MyA3OC45MyA1NC41OSAzLjM1OTQgNC42NzU4IDguNzYxNyA3LjQ0NTMgMTQuNTE2IDcuNDQxNCA1Ljc1IDAgMTEuMTUyLTIuNzY5NSAxNC41MTItNy40NDUzIDE3Ljc0Mi0yNC42OTkgNDUuMjIzLTU0LjU4NiA3Ny45MjYtNTQuNTg2IDUzLjI2NiAwIDk2LjUyIDQzLjI1NCA5Ni41MiA5Ni41MiAwIDI4LjEyNS0xMi4wNTUgNTMuNDYxLTMxLjI4OSA3MS4xMTN6IiBmaWxsPSIjNTEyNzcxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==);
    }
  }

  button:last-child {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsPSIjM2QzZDNkIj4KICA8cGF0aCBkPSJtNTMzLjc1IDUyOC4wMmMwLTEzLjAyNy01LjE3NTgtMjUuNTItMTQuMzg3LTM0LjczLTkuMjE0OC05LjIxMDktMjEuNzExLTE0LjM4My0zNC43MzgtMTQuMzc5cy0yNS41MiA1LjE4MzYtMzQuNzI3IDE0LjQwMmMtOS4yMDcgOS4yMTQ4LTE0LjM3NSAyMS43MTEtMTQuMzY3IDM0LjczOCAwLjAwNzgxMiAxMy4wMzEgNS4xOTE0IDI1LjUyIDE0LjQxIDM0LjcyMyA5LjIxODggOS4yMDcgMjEuNzE5IDE0LjM3MSAzNC43NDYgMTQuMzU5IDEzLjAxMi0wLjAyNzM0MyAyNS40ODQtNS4yMTA5IDM0LjY4NC0xNC40MTggOS4xOTUzLTkuMjAzMSAxNC4zNjctMjEuNjggMTQuMzc5LTM0LjY5NXptLTYwLjI4NSAwYzAtNC41MzkxIDIuNzM0NC04LjYzMjggNi45Mjk3LTEwLjM2NyA0LjE5MTQtMS43MzgzIDkuMDE5NS0wLjc3NzM0IDEyLjIzIDIuNDMzNiAzLjIxMDkgMy4yMDcgNC4xNzE5IDguMDM1MiAyLjQzMzYgMTIuMjMtMS43MzgzIDQuMTk1My01LjgzMiA2LjkyOTctMTAuMzcxIDYuOTI5Ny0yLjk3NjYgMC01LjgzMi0xLjE4MzYtNy45Mzc1LTMuMjg5MS0yLjEwMTYtMi4xMDU1LTMuMjg1Mi00Ljk2MDktMy4yODUyLTcuOTM3NXoiLz4KICA8cGF0aCBkPSJtNTY4LjIzIDI0My40aC0yOTkuMDJsLTQuNzM0NC0zMS42ODRjLTEuNDI1OC0xMC4xNzYtNi40ODQ0LTE5LjQ5Mi0xNC4yMzgtMjYuMjM4LTcuNzUtNi43NDIyLTE3LjY4LTEwLjQ2MS0yNy45NTctMTAuNDY1aC0zOC41MDRjLTYuNzY1NiAwLTEzLjAyIDMuNjEzMy0xNi40MDIgOS40NzI3LTMuMzg2NyA1Ljg2MzMtMy4zODY3IDEzLjA4MiAwIDE4Ljk0NSAzLjM4MjggNS44NTk0IDkuNjM2NyA5LjQ2ODggMTYuNDAyIDkuNDY4OGgzOC41NTFjMi40MTAyLTAuMDE1NjI2IDQuNDQ1MyAxLjc3NzMgNC43MzQ0IDQuMTY4bDI5LjE3MiAxOTkuOTVoMC4wMDM5MDZjMS45MzM2IDEyLjMwMSA4LjE4NzUgMjMuNTA4IDE3LjY0MSAzMS42MTMgOS40NDkyIDguMTA1NSAyMS40OCAxMi41ODIgMzMuOTMgMTIuNjIxaDE5Ny4wNmMxMi4wMTIgMC4wMTU2MjUgMjMuNjU2LTQuMTIxMSAzMi45NjktMTEuNzA3IDkuMzEyNS03LjU4NTkgMTUuNzE5LTE4LjE1NiAxOC4xMjktMjkuOTIybDMwLjgzMi0xNTMuNjhjMS4wNzQyLTUuNTQ2OS0wLjM4NjcyLTExLjI4MS0zLjk3NjYtMTUuNjQxLTMuNTg5OC00LjM2MzMtOC45NDE0LTYuODkwNi0xNC41OS02LjkwMjN6bS00OS40NDEgMTY4Ljc5Yy0xLjQyNTggNi41MzkxLTcuMjI2NiAxMS4xOTUtMTMuOTIyIDExLjE3NmgtMTk3LjA2Yy03LjExMzMgMC4wNzQyMTktMTMuMTg4LTUuMTI4OS0xNC4yMDctMTIuMTcybC0xOC44OTUtMTI5LjloMjcwLjM3eiIvPgogIDxwYXRoIGQ9Im0zMTcuNDcgNTc3LjA4YzE3LjQzOC0wLjIwNzAzIDMzLjQ1My05LjY3MTkgNDIuMDUxLTI0Ljg0NCA4LjU5NzctMTUuMTc2IDguNDg4My0zMy43NzctMC4yOTY4OC00OC44NDQtOC43ODEyLTE1LjA3LTI0LjkwNi0yNC4zNC00Mi4zNDgtMjQuMzRzLTMzLjU3IDkuMjY5NS00Mi4zNTIgMjQuMzRjLTguNzgxMiAxNS4wNjYtOC44OTA2IDMzLjY2OC0wLjI5Mjk3IDQ4Ljg0NCA4LjU5NzcgMTUuMTcyIDI0LjYxMyAyNC42MzcgNDIuMDUxIDI0Ljg0NHptLTEyLjUwNC00OC43NzdjLTAuMDc4MTI1LTIuOTcyNyAxLjAzNTItNS44NTE2IDMuMDg1OS04LjAwMzkgMi4wNTQ3LTIuMTQ4NCA0Ljg3ODktMy4zOTQ1IDcuODUxNi0zLjQ1N2gwLjI4NTE2YzUuOTEwMiAwLjMxNjQxIDEwLjU2MiA1LjE3MTkgMTAuNjI1IDExLjA5IDAuMDYyNSA1LjkxOC00LjQ4NDQgMTAuODcxLTEwLjM4NyAxMS4zMTItMi45Njg4IDAuMDY2NDA2LTUuODQ3Ny0xLjAzOTEtOC4wMDM5LTMuMDc4MS0yLjE2MDItMi4wNTQ3LTMuNDAyMy00Ljg4NjctMy40NTctNy44NjMzeiIvPgogPC9nPgo8L3N2Zz4K);
    &:hover {
      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsPSIjNTEyNzcxIj4KICA8cGF0aCBkPSJtNTMzLjc1IDUyOC4wMmMwLTEzLjAyNy01LjE3NTgtMjUuNTItMTQuMzg3LTM0LjczLTkuMjE0OC05LjIxMDktMjEuNzExLTE0LjM4My0zNC43MzgtMTQuMzc5cy0yNS41MiA1LjE4MzYtMzQuNzI3IDE0LjQwMmMtOS4yMDcgOS4yMTQ4LTE0LjM3NSAyMS43MTEtMTQuMzY3IDM0LjczOCAwLjAwNzgxMiAxMy4wMzEgNS4xOTE0IDI1LjUyIDE0LjQxIDM0LjcyMyA5LjIxODggOS4yMDcgMjEuNzE5IDE0LjM3MSAzNC43NDYgMTQuMzU5IDEzLjAxMi0wLjAyNzM0MyAyNS40ODQtNS4yMTA5IDM0LjY4NC0xNC40MTggOS4xOTUzLTkuMjAzMSAxNC4zNjctMjEuNjggMTQuMzc5LTM0LjY5NXptLTYwLjI4NSAwYzAtNC41MzkxIDIuNzM0NC04LjYzMjggNi45Mjk3LTEwLjM2NyA0LjE5MTQtMS43MzgzIDkuMDE5NS0wLjc3NzM0IDEyLjIzIDIuNDMzNiAzLjIxMDkgMy4yMDcgNC4xNzE5IDguMDM1MiAyLjQzMzYgMTIuMjMtMS43MzgzIDQuMTk1My01LjgzMiA2LjkyOTctMTAuMzcxIDYuOTI5Ny0yLjk3NjYgMC01LjgzMi0xLjE4MzYtNy45Mzc1LTMuMjg5MS0yLjEwMTYtMi4xMDU1LTMuMjg1Mi00Ljk2MDktMy4yODUyLTcuOTM3NXoiLz4KICA8cGF0aCBkPSJtNTY4LjIzIDI0My40aC0yOTkuMDJsLTQuNzM0NC0zMS42ODRjLTEuNDI1OC0xMC4xNzYtNi40ODQ0LTE5LjQ5Mi0xNC4yMzgtMjYuMjM4LTcuNzUtNi43NDIyLTE3LjY4LTEwLjQ2MS0yNy45NTctMTAuNDY1aC0zOC41MDRjLTYuNzY1NiAwLTEzLjAyIDMuNjEzMy0xNi40MDIgOS40NzI3LTMuMzg2NyA1Ljg2MzMtMy4zODY3IDEzLjA4MiAwIDE4Ljk0NSAzLjM4MjggNS44NTk0IDkuNjM2NyA5LjQ2ODggMTYuNDAyIDkuNDY4OGgzOC41NTFjMi40MTAyLTAuMDE1NjI2IDQuNDQ1MyAxLjc3NzMgNC43MzQ0IDQuMTY4bDI5LjE3MiAxOTkuOTVoMC4wMDM5MDZjMS45MzM2IDEyLjMwMSA4LjE4NzUgMjMuNTA4IDE3LjY0MSAzMS42MTMgOS40NDkyIDguMTA1NSAyMS40OCAxMi41ODIgMzMuOTMgMTIuNjIxaDE5Ny4wNmMxMi4wMTIgMC4wMTU2MjUgMjMuNjU2LTQuMTIxMSAzMi45NjktMTEuNzA3IDkuMzEyNS03LjU4NTkgMTUuNzE5LTE4LjE1NiAxOC4xMjktMjkuOTIybDMwLjgzMi0xNTMuNjhjMS4wNzQyLTUuNTQ2OS0wLjM4NjcyLTExLjI4MS0zLjk3NjYtMTUuNjQxLTMuNTg5OC00LjM2MzMtOC45NDE0LTYuODkwNi0xNC41OS02LjkwMjN6bS00OS40NDEgMTY4Ljc5Yy0xLjQyNTggNi41MzkxLTcuMjI2NiAxMS4xOTUtMTMuOTIyIDExLjE3NmgtMTk3LjA2Yy03LjExMzMgMC4wNzQyMTktMTMuMTg4LTUuMTI4OS0xNC4yMDctMTIuMTcybC0xOC44OTUtMTI5LjloMjcwLjM3eiIvPgogIDxwYXRoIGQ9Im0zMTcuNDcgNTc3LjA4YzE3LjQzOC0wLjIwNzAzIDMzLjQ1My05LjY3MTkgNDIuMDUxLTI0Ljg0NCA4LjU5NzctMTUuMTc2IDguNDg4My0zMy43NzctMC4yOTY4OC00OC44NDQtOC43ODEyLTE1LjA3LTI0LjkwNi0yNC4zNC00Mi4zNDgtMjQuMzRzLTMzLjU3IDkuMjY5NS00Mi4zNTIgMjQuMzRjLTguNzgxMiAxNS4wNjYtOC44OTA2IDMzLjY2OC0wLjI5Mjk3IDQ4Ljg0NCA4LjU5NzcgMTUuMTcyIDI0LjYxMyAyNC42MzcgNDIuMDUxIDI0Ljg0NHptLTEyLjUwNC00OC43NzdjLTAuMDc4MTI1LTIuOTcyNyAxLjAzNTItNS44NTE2IDMuMDg1OS04LjAwMzkgMi4wNTQ3LTIuMTQ4NCA0Ljg3ODktMy4zOTQ1IDcuODUxNi0zLjQ1N2gwLjI4NTE2YzUuOTEwMiAwLjMxNjQxIDEwLjU2MiA1LjE3MTkgMTAuNjI1IDExLjA5IDAuMDYyNSA1LjkxOC00LjQ4NDQgMTAuODcxLTEwLjM4NyAxMS4zMTItMi45Njg4IDAuMDY2NDA2LTUuODQ3Ny0xLjAzOTEtOC4wMDM5LTMuMDc4MS0yLjE2MDItMi4wNTQ3LTMuNDAyMy00Ljg4NjctMy40NTctNy44NjMzeiIvPgogPC9nPgo8L3N2Zz4K);
    }
  }
`;
const Row2 = styled.div`
  width: 100%;
  padding: 14px 0;
  display: flex;
  justify-content: space-around;

  ${Logo} {
    display: inline-flex;
    gap: 14px;

    img {
      width: 90px;
      height: 60px;
      object-fit: cover;
      cursor: pointer;
    }
    div {
      font-size: 18px;
      display: inline-flex;
      vertical-align: middle;
      gap: 14px;
      padding-top: 20px;

      p {
        color: purple;
        font-weight: 500;
        cursor: pointer;
      }
      p:nth-child(2) {
        padding: 5px 0;
        font-size: 12px;
        color: lightgray;
        cursor: default;
      }
      p:last-child {
        color: lightgray;
        font-weight: 400;
        &:hover {
          color: purple;
          font-weight: 500;
        }
      }
    }
  }

  ${Search} {
    font-size: 16px;
    font-weight: 400;
    width: 360px;
    height: 46px;
    padding: 0 10px;
    border-radius: 5px;
    border: 0.5px solid purple;
    background-color: white;
    margin: 6px 180px 0 60px;

    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNTM0LjUgNTEzLjQ5LTcxLjQ4LTcxLjMzMmMzMC41NjItMzcuNzYyIDM5LjUyLTg4LjYwMiAyMy42OTUtMTM0LjUzLTE1LjgyLTQ1LjkzLTU0LjE4OC04MC40NjktMTAxLjUyLTkxLjM5NS00Ny4zMzYtMTAuOTI2LTk2Ljk1NyAzLjMwNDctMTMxLjMxIDM3LjY1Ni0zNC4zNTIgMzQuMzUyLTQ4LjU4MiA4My45NzMtMzcuNjU2IDEzMS4zMSAxMC45MjYgNDcuMzM2IDQ1LjQ2NSA4NS43MDMgOTEuMzk1IDEwMS41MiA0NS45MyAxNS44MjQgOTYuNzcgNi44NjcyIDEzNC41My0yMy42OTVsNzEuMzMyIDcxLjQ4YzIuNzc3MyAyLjgwMDggNi41NjI1IDQuMzc1IDEwLjUwOCA0LjM3NSAzLjk0NTMgMCA3LjcyNjYtMS41NzQyIDEwLjUwOC00LjM3NSAyLjgwMDgtMi43ODEyIDQuMzc1LTYuNTYyNSA0LjM3NS0xMC41MDggMC0zLjk0NTMtMS41NzQyLTcuNzMwNS00LjM3NS0xMC41MDh6bS0xODAuNy00OC42OTFjLTI5LjQzOCAwLTU3LjY2OC0xMS42OTEtNzguNDg0LTMyLjUwOC0yMC44MTYtMjAuODE2LTMyLjUwOC00OS4wNTEtMzIuNTA4LTc4LjQ4OHMxMS42OTEtNTcuNjY4IDMyLjUwOC03OC40ODQgNDkuMDQ3LTMyLjUwOCA3OC40ODQtMzIuNTA4IDU3LjY3MiAxMS42OTEgNzguNDg4IDMyLjUwOGMyMC44MTYgMjAuODE2IDMyLjUwOCA0OS4wNDcgMzIuNTA4IDc4LjQ4NHMtMTEuNjkxIDU3LjY3Mi0zMi41MDggNzguNDg4Yy0yMC44MTYgMjAuODE2LTQ5LjA1MSAzMi41MDgtNzguNDg4IDMyLjUwOHoiIGZpbGw9IiM1MTI3NzEiLz4KPC9zdmc+Cg==);
    background-repeat: no-repeat;
    background-position: right;
    background-size: 10%;

    &:focus,
    &:active,
    &:hover {
      outline: none;
    }
  }
`;

const Ctgs = styled.div`
  display: flex;
  > p {
    margin: 5px 2px 0px 0px;
  }
`;

const Ctg = styled.div``;
const Bn = styled.div``;
const Menus = styled.div``;
const Menu = styled.div``;
const Row3 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 0;
  ${Ctgs} {
    font-size: 16px;
    /* font-weight: 500; */
    ${Ctg} {
      display: none;
      &:hover {
        color: purple;
      }
    }
    a {
      display: flex;
      text-decoration: none;
      color: black;
      gap: 10px;
      /* margin-top: -6px; */
      text-decoration: none;
      color: black;
      &:hover {
        color: purple;
        p {
          background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsPSIjNTEyNzcxIj4KICA8cGF0aCBkPSJtMjE4LjE0IDIzNy44OGgzMTUuNzJ2MzkuNDY1aC0zMTUuNzJ6Ii8+CiAgPHBhdGggZD0ibTIxOC4xNCAzNTYuMjdoMzE1LjcydjM5LjQ2NWgtMzE1LjcyeiIvPgogIDxwYXRoIGQ9Im0yMTguMTQgNDc0LjY2aDMxNS43MnYzOS40NjVoLTMxNS43MnoiLz4KIDwvZz4KPC9zdmc+Cg==);
        }
      }
    }
    a > div {
      line-height: 34px;
    }
    a > p {
      width: 34px;
      height: 34px;
      overflow: hidden;
      margin-bottom: 5px;
      cursor: pointer;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 130%;
      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsPSIjM2QzZDNkIj4KICA8cGF0aCBkPSJtMjE4LjE0IDIzNy44OGgzMTUuNzJ2MzkuNDY1aC0zMTUuNzJ6Ii8+CiAgPHBhdGggZD0ibTIxOC4xNCAzNTYuMjdoMzE1LjcydjM5LjQ2NWgtMzE1LjcyeiIvPgogIDxwYXRoIGQ9Im0yMTguMTQgNDc0LjY2aDMxNS43MnYzOS40NjVoLTMxNS43MnoiLz4KIDwvZz4KPC9zdmc+Cg==);
    }
  }

  ${Menus} {
    display: flex;
    justify-content: space-between;
    gap: 100px;
    height: 38px;

    ${Menu} {
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
    }
  }

  ${Bn} {
    color: purple;
    font-size: 13px;
    height: 28px;
    line-height: 22px;
    padding: 2px 16px;
    border: 0.5px solid lightgray;
    border-radius: 30px;
  }

  ${Ctgs} {
  }
`;

const StatusBox = styled.div`
  /* background-color: blue; */
  width: 50px;
  margin-right: 5px;
  padding-left: 12px;
  padding-right: none;
  border-radius: 10px;
  border: 1px solid purple;
`;

const DropBtn = styled.button`
  background-color: transparent;
  border: none;
`;
const DropDown = styled.div`
  display: inline-block;

  :hover {
  }
`;

const DropContent = styled.div`
  display: none;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  a {
    color: black;
    display: block;
  }

  a:hover {
    background-color: #f1f1f1;
  }
  //
`;
