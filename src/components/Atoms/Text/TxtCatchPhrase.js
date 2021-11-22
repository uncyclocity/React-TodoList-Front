import styled from "styled-components";

// TxtCatchPhrase
// 분류 : 텍스트
// 용도 : 로그인 창의 캐치프레이즈

const Styles = styled.div`
  font-size: 25px;
  color: #20c997;
  text-align: center;
`;

export default function TxtCatchPhrase() {
  return (
    <Styles>
      빛나는 하루를 만들어 나갈
      <br />
      준비 되셨나요?
    </Styles>
  );
}
