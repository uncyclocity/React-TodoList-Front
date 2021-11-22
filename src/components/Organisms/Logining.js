import styled from "styled-components";
import IcoLoadingRing from "../Atoms/Icon/IcoLoadingRing";

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;

export default function Logining() {
  return (
    <Styles>
      <IcoLoadingRing />
    </Styles>
  );
}
