import { useEffect, useRef, useState } from "react";
import {
  getAccessToken,
  getUserInfo,
  loginUser,
  refreshAccessToken,
} from "../../LoginFuncs";
import { useUserDispatch } from "../Contexts/UserContext";
import LoginingPageTemplate from "../Templates/LoginingPageTemplate";

export default function LoginingPage({ setNowPage }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const getUserInfoFirstCnt = useRef(0);
  const loginUserFirstCnt = useRef(0);
  const userDispatch = useUserDispatch();
  const storedAccessToken = localStorage.getItem("accessToken");
  const storedRefreshToken = localStorage.getItem("refreshToken");

  const goBackToLoginPage = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setNowPage("login");
  };

  const _getAccessToken = () => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    getAccessToken(code)
      .then(({ accessToken, refreshToken }) => {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        setAccessToken(accessToken);
      })
      .catch((err) => {
        console.error("액세스 토큰을 받아오는 도중 오류가 발생했습니다.");
        goBackToLoginPage();
      });
  };

  const _refreshAccessToken = () => {
    refreshAccessToken(storedRefreshToken)
      .then(({ accessToken }) => {
        localStorage.setItem("accessToken", accessToken);
        setAccessToken(accessToken);
      })
      .catch((err) => {
        console.error("액세스 토큰을 받아오는 도중 오류가 발생했습니다.");
        goBackToLoginPage();
      });
  };

  const _getUserInfo = () => {
    getUserInfo(accessToken)
      .then((data) => setUserInfo(data))
      .catch((err) => {
        const errStatus = err.response.status;
        if (errStatus === 422) {
          _refreshAccessToken();
        } else {
          console.error("사용자 정보를 받아오는 도중 오류가 발생했습니다.");
          goBackToLoginPage();
        }
      });
  };

  useEffect(() => {
    if (!storedAccessToken) {
      _getAccessToken();
    } else {
      setAccessToken(storedAccessToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (getUserInfoFirstCnt.current <= 0) {
      getUserInfoFirstCnt.current = 1;
    } else {
      _getUserInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
