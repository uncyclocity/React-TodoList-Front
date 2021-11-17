import styled from "styled-components";
import CtnWindow from "../Atoms/Container/CtnWindow";
import Login from "../Organisms/Login";
import Logo from "../Organisms/Logo";

const Styles = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 96px;
  margin-bottom: 32px;
`;

export default function LoginPageTemplate() {
  return (
    <Styles>
      <CtnWindow>
        <Logo />
        <Login />
      </CtnWindow>
    </Styles>
  );
}
