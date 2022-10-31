import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { FiSearch } from 'react-icons/fi';
import { BsCheckCircle } from 'react-icons/bs';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { useState } from 'react';

const Signup = () => {
   const {
      register,
      watch,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const password = useRef();
   password.current = watch('password');
   const onSubmit = (data) => {
      console.log('data', data);
   };

   const open = useDaumPostcodePopup();
   const [fullAddress, setFullAddress] = useState();

   const handleComplete = (data) => {
      let fullAddress = data.address;
      let extraAddress = '';

      if (data.addressType === 'R') {
         if (data.bname !== '') {
            extraAddress += data.bname;
         }
         if (data.buildingName !== '') {
            extraAddress +=
               extraAddress !== ''
                  ? `, ${data.buildingName}`
                  : data.buildingName;
         }
         fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }
      setFullAddress(fullAddress);
   };

   const handleClick = () => {
      open({ onComplete: handleComplete });
   };

   return (
      <Layout>
         <Wrapper>
            <SignupTerm>회원가입</SignupTerm>
            <SubmitForm onSubmit={handleSubmit(onSubmit)}>
               <InputAlert>
                  <span style={{ color: 'red' }}>*</span>
                  필수입력사항
               </InputAlert>
               <InputDiv>
                  <InputTitle>
                     아이디
                     <span style={{ color: 'red' }}>*</span>
                  </InputTitle>
                  <InputForm>
                     <InputBox
                        type='id'
                        name='id'
                        {...register('id', {
                           required: true,
                           minLength: 4,
                        })}
                        placeholder='아이디를 입력해주세요'
                     />
                     {errors.id && errors.id.type === 'required' && (
                        <p>아이디를 입력해주세요.</p>
                     )}
                     {errors.id && errors.id.type === 'minLength' && (
                        <p>4글자 이상의 아이디를 입력해주세요.</p>
                     )}
                  </InputForm>
                  <ConfirmBtn>중복확인</ConfirmBtn>
               </InputDiv>
               <InputDiv>
                  <InputTitle>
                     비밀번호
                     <span style={{ color: 'red' }}>*</span>
                  </InputTitle>
                  <InputForm>
                     <InputBox
                        name='password'
                        type='password'
                        {...register('password', {
                           required: true,
                           minLength: 5,
                        })}
                        placeholder='비밀번호를 입력해주세요'
                     />
                     {errors.password &&
                        errors.password.type === 'required' && (
                           <p>비밀번호를 입력해주세요.</p>
                        )}
                     {errors.password &&
                        errors.password.type === 'minLength' && (
                           <p>비밀번호를 다섯 글자 이상 입력해주세요.</p>
                        )}
                  </InputForm>
               </InputDiv>
               <InputDiv>
                  <InputTitle>
                     비밀번호확인
                     <span style={{ color: 'red' }}>*</span>
                  </InputTitle>
                  <InputForm>
                     <InputBox
                        name='password_confirm'
                        type='password'
                        {...register('password_confirm', {
                           required: true,
                           validate: (value) => value === password.current,
                        })}
                        placeholder='비밀번호를 한번 더 입력해주세요'
                     />
                     {errors.password_confirm &&
                        errors.password_confirm.type === 'required' && (
                           <p>다시 한번 비밀번호를 입력해주세요.</p>
                        )}
                     {errors.password_confirm &&
                        errors.password_confirm.type === 'validate' && (
                           <p>비밀번호가 일치하지 않습니다.</p>
                        )}
                  </InputForm>
               </InputDiv>
               <InputDiv>
                  <InputTitle>
                     이름
                     <span style={{ color: 'red' }}>*</span>
                  </InputTitle>
                  <InputForm>
                     <InputBox
                        type='name'
                        name='name'
                        {...register('name', { required: true, minLength: 1 })}
                        placeholder='이름을 입력해주세요'
                     />
                     {errors.name && errors.name.type === 'required' && (
                        <p>이름을 입력해주세요.</p>
                     )}
                  </InputForm>
               </InputDiv>
               <InputDiv style={{ marginBottom: '0px' }}>
                  <InputTitle>
                     주소
                     <span style={{ color: 'red' }}>*</span>
                  </InputTitle>
                  <AddressBtn type='button' onClick={handleClick}>
                     <FiSearch />
                     주소 검색
                  </AddressBtn>
               </InputDiv>

               <InputDiv style={{ marginBottom: '40px' }}>
                  <AddressTitle>
                     상세주소
                     <span style={{ color: 'red' }}>*</span>
                  </AddressTitle>
                  <AdressBox>
                     {/* {Boolean({ fullAddress }) === true ? (
                        <AddressConfirm>{fullAddress} </AddressConfirm>
                     ) : null} */}
                     <AddressConfirm>{fullAddress}</AddressConfirm>
                     <AddressInput
                        type='address'
                        name='address'
                        {...register('address', { required: true })}
                        placeholder='상세 주소를 입력해주세요'
                     />
                     {errors.address && errors.address.type === 'required' && (
                        <p>상세 주소를 입력해주세요.</p>
                     )}
                  </AdressBox>
               </InputDiv>

               <AgreeBox>
                  <Agree>
                     <span
                        style={{
                           fontSize: '14px',
                           marginLeft: '18px',
                           fontWeight: '500',
                        }}>
                        이용약관동의
                     </span>
                     <span style={{ color: 'red' }}>*</span>
                  </Agree>
                  <AgreeAll>
                     <BsCheckCircle size={'20px'} style={{ color: 'gray' }} />
                  </AgreeAll>
                  <div>
                     <div>
                        <span style={{ fontSize: '18px', fontWeight: '500' }}>
                           전체 동의합니다.
                        </span>
                        <div>
                           <span style={{ fontSize: '12px', color: 'gray' }}>
                              선택항목에 동의하지 않은 경우도 회원가입 및
                              일반적인 서비스를 이용할 수 있습니다.
                           </span>
                        </div>
                     </div>
                  </div>
               </AgreeBox>
               <ButtonArea>
                  <SignUpBtn>가입하기</SignUpBtn>
               </ButtonArea>
            </SubmitForm>
         </Wrapper>
      </Layout>
   );
};

export default Signup;

const SubmitForm = styled.form`
   p {
      color: red;
      font-size: 12px;
   }
`;
const Wrapper = styled.div`
   width: 640px;
   margin: 0 auto;
   justify-content: center;
   align-items: center;
`;

const SignupTerm = styled.div`
   font-size: 27px;
   font-weight: 500;
   margin: 50px 0px 50px 0px;
   text-align: center;
`;

const InputAlert = styled.div`
   text-align: end;
   font-size: 12px;
   padding-bottom: 8px;
   border-bottom: 2px solid black;
`;

const InputDiv = styled.div`
   display: flex;
   align-items: center;
`;

const InputTitle = styled.span`
   font-size: 14px;
   font-weight: 500;
   padding: 20px;
   margin-right: 20px;
   width: 140px;
`;

const InputBox = styled.input`
   width: 330px;
   height: 45px;
   border-radius: 5px;
   border: 0.5px solid gray;
   vertical-align: middle;
   margin: 10px 10px 10px 0px;

   ::placeholder {
      font-size: medium;
      padding-left: 10px;
   }
`;

const ConfirmBtn = styled.button`
   width: 110px;
   height: 45px;
   border-radius: 3px;
   border: 1.2px solid purple;
   background-color: transparent;
   color: purple;
`;

const AddressBtn = styled.button`
   width: 330px;
   height: 45px;
   background-color: transparent;
   border: 1px solid purple;
   border-radius: 5px;
   color: purple;
   font-size: 15px;
   font-weight: 500;
`;

const AgreeBox = styled.div`
   border-top: 1px solid black;
   padding-top: 20px;
   display: flex;
`;

const Agree = styled.div`
   margin-right: 0px;
   width: 155px;
`;

const AgreeAll = styled.div`
   margin-right: 10px;
   margin-top: 5px;
`;

const ButtonArea = styled.div`
   height: 100px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 20px;
   border-top: #cfd1d3;
`;

const SignUpBtn = styled.button`
   width: 240px;
   height: 60px;
   font-size: medium;
   font-weight: 500;
   color: white;
   background-color: #69269d;
   border-radius: 5px;
   border: none;
`;

const InputForm = styled.div`
   flex-direction: column;
`;

const AddressConfirm = styled.div`
   background-color: #bab7b7;
   height: 45px;
   width: 330px;
   margin: 10px 0px 5px 0px;
   border-radius: 5px;
   padding: 10px;
`;

const AdressBox = styled.div`
   margin: 0px;
`;

const AddressInput = styled.input`
height: 45px;
width: 330px;
border-radius: 5px;
border: 0.5px solid gray;
::placeholder {
      font-size: medium;
      padding-left: 10px;
}
`;

const AddressTitle = styled.div`
   margin-top: -40px;
   margin-left: 20px;
   margin-right: 80px;
   font-size: 14px;
   font-weight: 500;
`;
