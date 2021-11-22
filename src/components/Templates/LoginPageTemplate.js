import CtnWindow from "../Atoms/Container/CtnWindow";
import CatchPhrase from "../Organisms/CatchPhrase";
import Login from "../Organisms/Login";
import Logo from "../Organisms/Logo";

export default function LoginPageTemplate({ onClick }) {
  return (
    <CtnWindow>
      <Logo />
      <CatchPhrase />
      <Login onClick={onClick} />
    </CtnWindow>
  );
}
