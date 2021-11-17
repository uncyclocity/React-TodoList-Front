import styled from "styled-components";

// CtnWindow
// 분류 : 컨테이너
// 용도 : 윈도우 형태의 컨테이너

const Styles = styled.div`
  width: 512px;
  height: 768px;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
`;

export default function CtnWindow({ children }) {
  return <Styles>{children}</Styles>;
}
