import styled from "styled-components";

const MenuIcon = (props) => {
  const { name, index, clickMenu } = props;

  return (
    <ButtonStyle index={index} clickMenu={clickMenu}>
      {name}
    </ButtonStyle>
  );
};
export default MenuIcon;

const ButtonStyle = styled.div`
  /* background-color: ${(props) =>
    props.clickMenu === props.index ? "#5f0080" : "#F7F7F7"};
  color: ${(props) => (props.clickMenu === props.index ? "white" : "black")}; */

  color: black;
  background: #f7f7f7;
  font-size: 14px;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    color: #5f0080;
  }
`;

//프롭스 타고 가는것
