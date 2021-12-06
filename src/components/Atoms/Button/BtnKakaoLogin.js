import styled from "styled-components";

// BtnKakaoLogin
// 분류 : 버튼
// 용도 : 로그인 페이지에서의 카카오 로그인

const Styles = styled.div`
  cursor: pointer;
`;

export default function BtnKakaoLogin() {
  return (
    <Styles>
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        alt="kakao Login"
        width="222"
      />
    </Styles>
  );
}
