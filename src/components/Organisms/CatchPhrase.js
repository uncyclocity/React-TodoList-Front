import styled from "styled-components";
import TxtCatchPhrase from "../Atoms/Text/TxtCatchPhrase";

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CatchPhrase({ onClick }) {
  return (
    <Styles>
      <TxtCatchPhrase />
    </Styles>
  );
}
