import styled from "styled-components";

// TxtCatchPhrase
// 분류 : 텍스트
// 용도 : 로그인 창의 캐치프레이즈

const Styles = styled.div`
  font-size: 24px;
  text-align: center;
  font-family: NanumSquareR;
  color: #5b5b5b;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;

export default function TxtCatchPhrase() {
  return (
    <Styles>
      빛나는 하루를 만들어 나갈
      <br />
      준비가 되었나요?
    </Styles>
  );
}
