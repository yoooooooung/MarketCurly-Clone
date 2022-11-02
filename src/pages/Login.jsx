import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import loginUser from "../redux/modules/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginId, setloginId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!loginId) {
      return alert("아이디를 입력하세요");
    } else if (!password) {
      return alert("비밀번호를 입력하세요");
    } else {
      let body = {
        loginId,
        password,
      };

      axios
        .post("https://kyuudukk.shop/users/login", body)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            localStorage.setItem("token", response.data.data.token);
            // console.log(response.data.data.token)
            localStorage.setItem(
              "userName",
              response.data.data.userinfo.userName
            );
            // console.log(response.data.data.userinfo.userName)
            // 아래줄 진영이 추가 (address 받아야해서)
            localStorage.setItem(
              "address",
              response.data.data.userinfo.address
            );
            console.log(response.data.data.userinfo);
            // dispatch(loginUser(response.data.data.userinfo))
            navigate("/");
            window.location.reload();
          }
        })
        .catch((error) => {
          // console.log(error);
          if (error.response?.status === 401) {
            alert("아이디 또는 비밀번호를 확인해주세요.");
          } else {
            alert("알 수 없는 오류가 발생했습니다.");
          }
        });
    }
  };

  return (
    <Layout>
      <Wrapper>
        <form onSubmit={onSubmitHandler}>
          <LoginTerm>로그인</LoginTerm>
          <LoginInput
            id="loginId"
            name="loginId"
            type="text"
            placeholder="아이디를 입력해주세요"
            value={loginId}
            autoComplete="off"
            onChange={(e) => setloginId(e.target.value)}
          />
          <LoginInput
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FindUserInfo>아이디 찾기 | 비밀번호 찾기</FindUserInfo>
          <LoginBtn type="submit">로그인</LoginBtn>
          <SignupBtn>회원가입</SignupBtn>
        </form>
      </Wrapper>
    </Layout>
  );
};

export default Login;

const Wrapper = styled.div`
  width: 340px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginTerm = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 80px 0px 20px 0px;
  text-align: center;
`;

const LoginInput = styled.input`
  width: 100%;
  height: 54px;
  border-radius: 4px;
  border: 0.5px solid gray;
  vertical-align: middle;
  margin-bottom: 10px;
  padding: 10px;

  :focus {
    outline: 1px solid black;
  }

  ::placeholder {
    font-size: 14px;
    padding-left: 10px;
  }
`;

const FindUserInfo = styled.div`
  font-size: 13px;
  float: right;
  margin-bottom: 20px;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 54px;
  margin-bottom: 10px;
  background-color: #7a2295;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

const SignupBtn = styled.button`
  width: 100%;
  height: 54px;
  margin-bottom: 10px;
  border: 1px solid #7a2295;
  background-color: white;
  color: #7a2295;
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
`;
