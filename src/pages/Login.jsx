import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Layout from '../components/Layout';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils';

const Login = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [loginId, setloginId] = useState('');
   const [password, setPassword] = useState('');
   const [msg, setMsg] = useState();

   const onSubmitHandler = (e) => {
      e.preventDefault();
      if (!loginId) {
         return alert("아이디를 입력하세요");
      } else if (!password) {
         return alert("비밀번호를 입력하세요");
      } else {
         let body = {
            loginId, password
         };

         axios.post('http://15.164.250.6:3000/users/login', body)
         .then((response) => {
            console.log(response);
            // if(response.data.code === 200) {
            //    localStorage.setItem('token', response.data.token);
            //    navigate("/");
            // }
            // if(response.data.code === 401) {
            //    alert("다시 시도해주세요.");
            // }
         });
      }
   }

   // async function loginUser(credentials) {
   //    return fetch('http://13.125.49.96:3000/users/login', {
   //       method: 'POST',
   //       headers: {
   //          'Content-Type': 'application/json'
   //       },
   //       body: JSON.stringify(credentials)
   //    })
   //    .then(data => data.json())
   // }

   // const [loginId, setloginId] = useState('');
   // const [password, setPassword] = useState('');

   // const onSubmitHandler = async e => {
   //    e.preventDefault();
   //    const response = await loginUser({
   //       loginId,
   //       password
   //    });

   //    if ('token' in response) {
   //       swal("Success", response.message, "success", {
   //          buttons: false,
   //          timer: 2000,
   //       })
   //       .then((value) => {
   //          localStorage.setItem('token', response['token']);
   //          localStorage.setItem('user', JSON.stringify(response['user']));
   //          window.location.href = "/";
   //       })
   //    } else {
   //       swal("Failed", response.message, "error");
   //    }
   // }
   // ;

   return (
      <Layout>
         <Wrapper>
            <form onSubmit={onSubmitHandler}>
               <LoginTerm>로그인</LoginTerm>
               <LoginInput
                  id='loginId'
                  name='loginId'
                  type='text'
                  placeholder='아이디를 입력해주세요'
                  value={loginId}
                  autoComplete='off'
                  onChange={(e) => setloginId(e.target.value)}
               />
               <LoginInput
                  id='password'
                  name='password'
                  type='password'
                  placeholder='비밀번호를 입력해주세요'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <FindUserInfo>아이디 찾기 | 비밀번호 찾기</FindUserInfo>
               <LoginBtn type='submit'>로그인</LoginBtn>
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
