import styled from "styled-components";
import BtnKakaoLogin from "../Atoms/Button/BtnKakaoLogin";

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;

export default function Login({ onClick }) {
  return (
    <Styles onClick={onClick}>
      <BtnKakaoLogin />
    </Styles>
  );
}
