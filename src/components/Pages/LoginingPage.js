import { useEffect, useRef, useState } from "react";
import { getAccessToken, getUserInfo, loginUser } from "../../LoginFuncs";
import { useUserDispatch } from "../Contexts/UserContext";
import LoginingPageTemplate from "../Templates/LoginingPageTemplate";

export default function LoginingPage({ setNowPage }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const getUserInfoFirstCnt = useRef(0);
  const loginUserFirstCnt = useRef(0);
  const userDispatch = useUserDispatch();

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    if (!storedAccessToken) {
      const url = new URL(window.location.href);
      const code = url.searchParams.get("code");
      getAccessToken(code).then((accessToken) => {
        localStorage.setItem("accessToken", accessToken);
        setAccessToken(accessToken);
      });
    } else {
      setAccessToken(storedAccessToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (getUserInfoFirstCnt.current <= 0) {
      getUserInfoFirstCnt.current = 1;
    } else {
      getUserInfo(accessToken).then((data) => {
        console.log(data);
        setUserInfo(data);
      });
    }
  }, [accessToken]);

  useEffect(() => {
    if (loginUserFirstCnt.current <= 0) {
      loginUserFirstCnt.current = 1;
    } else {
      loginUser(userInfo, userDispatch).then(() => setNowPage("todo"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  return <LoginingPageTemplate />;
}
