import LoginPageTemplate from "../Templates/LoginPageTemplate";

export default function LoginPage() {
  const redirectUri = "https://react-todolist.herokuapp.com";

  const kakaoLogin = () => {
    const { Kakao } = window;
    Kakao.Auth.authorize({
      redirectUri,
    });
  };

  return <LoginPageTemplate onClick={kakaoLogin} />;
}
