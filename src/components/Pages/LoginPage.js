import LoginPageTemplate from "../Templates/LoginPageTemplate";

export default function LoginPage() {
  const redirectUri = "https://react-todo-list-lyart-tau.vercel.app";

  const kakaoLogin = () => {
    const { Kakao } = window;
    Kakao.Auth.authorize({
      redirectUri,
    });
  };

  return <LoginPageTemplate onClick={kakaoLogin} />;
}
