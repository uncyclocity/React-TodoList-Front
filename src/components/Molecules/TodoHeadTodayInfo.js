import TxtTodayDay from "../Atoms/Text/TxtTodayDay";
import TxtTodayMonthAndDate from "../Atoms/Text/TxtTodayMonthAndDate";

export default function TodoHeadTodayInfo({ dateString, day }) {
  return (
    <>
      <TxtTodayMonthAndDate dateString={dateString} />
      <TxtTodayDay day={day} />
    </>
  );
}
