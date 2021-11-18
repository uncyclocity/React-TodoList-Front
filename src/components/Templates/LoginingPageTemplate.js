import styled from "styled-components";
import loginVerification from "../../loginVerification";
import CtnWindow from "../Atoms/Container/CtnWindow";
import Logining from "../Organisms/Logining";

const Styles = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 96px;
  margin-bottom: 32px;
`;

export default function LoginingPageTemplate() {
  return (
    <Styles>
      <CtnWindow>
        <Logining />
      </CtnWindow>
    </Styles>
  );
}
