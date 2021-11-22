import styled from "styled-components";
import BtnKakaoLogin from "../Atoms/Button/BtnKakaoLogin";

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
`;

export default function Login({ onClick }) {
  return (
    <Styles>
      <div onClick={onClick}>
        <BtnKakaoLogin />
      </div>
    </Styles>
  );
}
