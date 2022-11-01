import React from 'react';
import styled from 'styled-components';


const Menubar = () => {
    return (
        <MenubarLayout>
            <Filter>
                <span>필터</span>
                <button>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.78 3.96303C12.504 2.16973 10.4086 1 8.04 1C4.15192 1 1 4.15192 1 8.04C1 11.9281 4.15192 15.08 8.04 15.08C11.9281 15.08 15.08 11.9281 15.08 8.04" stroke="#ddd" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="round"></path><path d="M14.4933 1L14.4933 4.52H10.9733" stroke="#ddd" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="round"></path></svg>
                    <span>초기화</span>
                </button>
            </Filter>
            <Menus>
                <ListTitle>
                    <div>카테고리</div>
                    <img />
                </ListTitle>
                <Lists>
                    <li><a href="#">
                        <button>체크</button>
                        <span>국, 메인, 반찬요리</span>    
                        <span>121</span>    
                    </a></li>
                    <li><a href="#">
                        <button>체크</button>
                        <span>샐러드, 간편식</span>    
                        <span>100</span>    
                    </a></li>
                    <More>카테고리 더보기</More>
                </Lists>
            </Menus>

        </MenubarLayout>
    );
}


export default Menubar;

const MenubarLayout = styled.div`
    height:569px;
    background-color:pink;

    button{
        cursor: pointer;
        font-size: 14px;
        color: #333;
        background-color: transparent;
        border: none;
        font: inherit;
        margin: 0;
        padding:0;
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

    & > button {
        cursor:pointer;
    }
    & > button > svg {
        width:12px;
        height:12px;
        margin-right:3px;
    }


 
`;

const ListTitle = styled.button``;
const Menus = styled.div `
height:52px;
    ${ListTitle} {
        font-size:15px;
        line-height:20px;
        padding:16px 0;
        background-color:yellow;
        width:100%;
        display:flex;
        justify-content: space-between;
    } 
`;

const More = styled.button``;
const Lists = styled.ul`

li {
    width:220px;
    height:18px;
    margin: 9px 0 18px;
    margin-bottom:18px;
    list-style: none;

    &:first-child {
        margin-top:9px;
    }
    &:last-child {
        margin-bottom:21px;
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

li > a > button {
    margin-right:10px;
}

li > a > span {
    font-size:14px;
    margin-right:4px;
    
    &:last-child {
        font-size:12px;
        color:#cccccc;
    }
}

${More} {
    width:220px;
    font-size:12px;
    font-weight:500;
    text-align: center;
    margin-bottom:12px;
}
`;