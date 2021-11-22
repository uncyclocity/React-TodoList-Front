import styled from "styled-components";
import { IoIosCloudOutline } from "react-icons/io";

// IcoLogo
// 분류 : 아이콘
// 용도 : 로그인 창의 로고

const Styles = styled.div`
  font-size: 100px;
  height: 100px;
  color: #ffffff;
`;

export default function IcoLogo() {
  return (
    <Styles>
      <IoIosCloudOutline />
    </Styles>
  );
}
