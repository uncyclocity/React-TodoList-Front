import styled from "styled-components";
import IcoLogo from "../Atoms/Icon/IcoLogo";
import TxtLogo from "../Atoms/Text/TxtLogo";

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function Logo() {
  return (
    <Styles>
      <IcoLogo />
      <TxtLogo />
    </Styles>
  );
}
