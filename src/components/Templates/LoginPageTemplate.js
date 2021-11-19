import CtnWindow from "../Atoms/Container/CtnWindow";
import Login from "../Organisms/Login";
import Logo from "../Organisms/Logo";

export default function LoginPageTemplate() {
  return (
    <CtnWindow>
      <Logo />
      <Login />
    </CtnWindow>
  );
}
