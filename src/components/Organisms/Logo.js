import styled from "styled-components";
import IcoLogo from "../Atoms/Icon/IcoLogo";
import TxtLogo from "../Atoms/Text/TxtLogo";

const Styles = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #20c997;
  border-radius: 16px 16px 0 0;

  @media screen and (max-width: 700px) {
    height: 250px;
  }
`;

export default function Logo() {
  return (
    <Styles>
      <IcoLogo />
      <TxtLogo />
    </Styles>
  );
}
