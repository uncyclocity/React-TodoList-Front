import styled from "styled-components";
import TxtCatchPhrase from "../Atoms/Text/TxtCatchPhrase";

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
`;

export default function CatchPhrase({ onClick }) {
  return (
    <Styles>
      <TxtCatchPhrase />
    </Styles>
  );
}
