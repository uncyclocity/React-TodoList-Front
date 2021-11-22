import CtnWindow from "../Atoms/Container/CtnWindow";
import Login from "../Organisms/Login";
import Logo from "../Organisms/Logo";

export default function LoginPageTemplate({ onClick }) {
  return (
    <CtnWindow>
      <Logo />
      <Login onClick={onClick} />
    </CtnWindow>
  );
}
