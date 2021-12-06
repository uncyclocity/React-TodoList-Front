import styled from "styled-components";
import CtnWindow from "../Atoms/Container/CtnWindow";
import CatchPhrase from "../Organisms/CatchPhrase";
import Login from "../Organisms/Login";
import Logo from "../Organisms/Logo";

const Styles = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    margin: 30px 0;
  }
`;

export default function LoginPageTemplate({ onClick }) {
  return (
    <CtnWindow>
      <Styles>
        <Logo />
        <CatchPhrase />
        <Login onClick={onClick} />
      </Styles>
    </CtnWindow>
  );
}
