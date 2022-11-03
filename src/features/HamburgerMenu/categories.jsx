import { AiOutlineMenu } from 'react-icons/ai';

export const categories = [
   {
      ctg: (
         <div style={{ display: 'flex', fontWeight: '500'}}>
            <div style={{ marginRight: '10px'}}>
               <AiOutlineMenu />
            </div>
            <div style={{marginTop: '-2px'}}>카테고리</div>
         </div>
      ),
      url: '/',
      subCtg: [
         {
            ctg: '정육·계란',
            url: '/',
            subCtg: [
               {
                  ctg: '국내산 소고기',
                  url: '/',
               },
               {
                  ctg: '수입산 소고기',
                  url: '/',
               },
               {
                  ctg: '돼지고기',
                  url: '/',
               },
               {
                  ctg: '계란류',
                  url: '/',
               },
               {
                  ctg: '닭·오리고기',
                  url: '/',
               },
               {
                  ctg: '양념육·돈까스',
                  url: '/',
               },
               {
                  ctg: '양고기',
                  url: '/',
               },
            ],
         },
         {
            ctg: '채소',
            url: '/',
            subCtg: [
               {
                  ctg: '친환경',
                  url: '/',
               },
               {
                  ctg: '고구마·감자·당근',
                  url: '/',
               },
               {
                  ctg: '시금치·쌈채소·나물',
                  url: '/',
               },
               {
                  ctg: '브로콜리·파프리카·양배추',
                  url: '/',
               },
               {
                  ctg: '양파·대파·마늘·대추',
                  url: '/',
               },
               {
                  ctg: '오이·호박·고추',
                  url: '/',
               },
               {
                  ctg: '냉동·이색·간편채소',
                  url: '/',
               },
               {
                  ctg: '콩나물·버섯',
                  url: '/',
               },
            ],
         },
         {
            ctg: '과일·견과·쌀',
            url: '/',
            subCtg: [
               {
                  ctg: '친환경',
                  url: '/',
               },
               {
                  ctg: '제철과일',
                  url: '/',
               },
               {
                  ctg: '국산과일',
                  url: '/',
               },
               {
                  ctg: '수입과일',
                  url: '/',
               },
               {
                  ctg: '간편과일',
                  url: '/',
               },
               {
                  ctg: '냉동·건과일',
                  url: '/',
               },
               {
                  ctg: '견과류',
                  url: '/',
               },
               {
                  ctg: '쌀·잡곡',
                  url: '/',
               },
            ],
         },
         {
            ctg: '국·반찬·메인요리',
            url: '/',
            subCtg: [
               {
                  ctg: '국·탕·찌개',
                  url: '/',
               },
               {
                  ctg: '밀키트·메인요리',
                  url: '/',
               },
               {
                  ctg: '밑반찬',
                  url: '/',
               },
               {
                  ctg: '김치·젓갈·장류',
                  url: '/',
               },
               {
                  ctg: '두부·어묵·부침개',
                  url: '/',
               },
               {
                  ctg: '베이컨·햄·통조림',
                  url: '/',
               },
            ],
         },
         {
            ctg: '샐러드·간편식',
            url: '/',
         },
         {
            ctg: '면·양념·오일',
            url: '/',
         },
         {
            ctg: '생수·음료·우유·커피',
            url: '/',
         },
         {
            ctg: '간식·과자·떡',
            url: '/',
         },
         {
            ctg: '베이커리·치즈·델리',
            url: '/',
         },
         {
            ctg: '건강식품',
            url: '/',
         },
         {
            ctg: '와인',
            url: '/',
         },
         {
            ctg: '전통주',
            url: '/',
         },
      ],
   },
];
