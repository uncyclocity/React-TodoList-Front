import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled from "styled-components";
import { spin_360 } from "../../../keyfremes/LoginingAnimation";

// IcoLoadingRing
// 분류 : 아이콘
// 용도 : 댓글 및 포스팅 삭제 시 표시되는 로딩 링

const Styles = styled.div`
  font-size: 70px;
  color: #20c997;
  animation: ${spin_360} infinite 5s linear;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function IcoLoadingRing() {
  return (
    <Styles>
      <AiOutlineLoading3Quarters />
    </Styles>
  );
}
