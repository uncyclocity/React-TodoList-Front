export default function VerifyAccessToken({ setNowPage, children }) {
  let storedAccessToken = localStorage.getItem("accessToken");

  if (storedAccessToken) {
    setNowPage("logining");
  } else {
    setNowPage("login");
  }

  return <>{children}</>;
}
