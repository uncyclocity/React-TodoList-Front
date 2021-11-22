import LoginPageTemplate from "../Templates/LoginPageTemplate";

export default function LoginPage() {
  const redirectUri = "http://localhost:3000";

  const kakaoLogin = () => {
    const { Kakao } = window;
    Kakao.Auth.authorize({
      redirectUri,
    });
  };

  return <LoginPageTemplate onClick={kakaoLogin} />;
}
