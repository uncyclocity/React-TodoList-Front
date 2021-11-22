import CtnWindow from "../Atoms/Container/CtnWindow";
import Logining from "../Organisms/Logining";

export default function LoginingPageTemplate({ setNowPage }) {
  return (
    <CtnWindow>
      <Logining setNowPage={setNowPage} />
    </CtnWindow>
  );
}
