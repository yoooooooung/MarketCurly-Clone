import styled from 'styled-components';
import Layout from '../../components/Layout';
import { FiThumbsUp } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { __getComments } from '../../redux/modules/commentSlice';
import { useParams } from 'react-router-dom';

const GetReivew = () => {
   const id = useParams();
   const dispatch = useDispatch();
//    const { isLoading, error } = useSelector((state)=>state.comments)
   const comments = useSelector((state) => state.review.comments);

   useEffect(() => {
      dispatch(__getComments(id.goodsId));
   }, [dispatch]);

   return (
      <Layout>
         <ReviewSubject>상품 후기</ReviewSubject>
         <RiviewTerm>
            <span>
               사진 후기 100원, 글후기 50원 적립금 혜택이 있어요.
               <br />
            </span>
            <span>
               · 퍼플, 더퍼플은 2배 적립 (사진 200원, 글 100원) / 주간 베스트
               후기로 선정 시, 5,000원을 추가 적립
               <br />
               · 후기 작성은 배송완료일로부터 30일 이내 가능합니다.
               <br />· 작성하신 후기는 확인 후 적립금이 지급됩니다. (영업일 기준
               평균 1~2일 소요)
            </span>
         </RiviewTerm>
         <div>
            {comments.map((comment) => (
            <ReviewDiv key={comment.commentsId}>
            <div>{comment.userName}</div>
               <div>
                  <div></div>
                  <Name>상품명</Name>
                  <Review>{comment.content}</Review>
                  <Img src={comment.commentImage}/>
                  <Date>{comment.updatedAt.substr(0,10)}</Date>
                  <div></div>
               </div>
               <ThumbBtn>
                  <FiThumbsUp />
                  도움돼요
               </ThumbBtn>
            </ReviewDiv>
         ))}
         </div>
      </Layout>
   );
};

export default GetReivew;

const ReviewSubject = styled.div`
   font-size: 18px;
   font-weight: 600;
   margin-bottom: 20px;
`;

const RiviewTerm = styled.div`
   margin-bottom: 30px;
   span {
      font-size: 14px;
      color: #7b7b7b;
   }

   span:first-child {
      color: #525252;
      font-weight: 500;
   }
`;

const ReviewDiv = styled.div`
   border-top: 1px solid black;
   padding-top: 20px;
   padding-bottom: 20px;
   display: flex;
   font-size: 14px;

   div:first-child {
      width: 250px;
      padding-left: 20px;
   }

   div:last-child {
      margin-left: 330px;
   }
`;

const Name = styled.div`
   color: gray;
   padding-bottom: 10px;
`;

const Review = styled.div`
   padding-bottom: 20px;
`;

const Date = styled.div`
   color: gray;
`;

const ThumbBtn = styled.div`
   width: 80px;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 30px;
   color: gray;
   border: 1px solid #cbcbcb;
   border-radius: 15px;
   /* margin-top: 60px; */
   font-size: 12px;
`;

const Img = styled.img`
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
    border-radius: 10px;
`