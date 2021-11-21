import styled from "styled-components";
import instance from "../../instance";
import IcoLoadingRing from "../Atoms/Icon/IcoLoadingRing";
import { useEffect, useRef, useState } from "react";
import { useUserDispatch } from "../../UserContext";
import { useNavigate } from "react-router";

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;

export default function Logining() {
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const getUserInfoFirstCnt = useRef(0);
  const loginUserFirstCnt = useRef(0);
  const userDispatch = useUserDispatch();
  const navigate = useNavigate();

  const getAccessToken = async (code) => {
    await instance({
      method: "GET",
      url: `/api/getAccessToken?code=${code}`,
    }).then((res) => {
      setAccessToken(res.data.ACCESS_TOKEN);
    });
  };

  const getUserInfo = async (accessToken) => {
    await instance({
      method: "GET",
      url: `/api/getUserInfo?ACCESS_TOKEN=${accessToken}`,
    }).then((res) => {
      setUserInfo(res.data);
    });
  };

  const loginUser = async (userInfo) => {
    const { id, nickname, platform } = userInfo;
    userDispatch({
      type: "initiate",
      id,
      platform,
      nickname,
    });
    await instance({
      method: "POST",
      url: `/api/createMember`,
      data: {
        id,
        nickname,
        platform,
      },
    });
  };

  useEffect(() => {
    getAccessToken(code);
  }, [code]);

  useEffect(() => {
    if (getUserInfoFirstCnt.current <= 0) {
      getUserInfoFirstCnt.current = 1;
    } else {
      localStorage.setItem("accessToken", accessToken);
      getUserInfo(accessToken);
    }
  }, [accessToken]);

  useEffect(() => {
    if (loginUserFirstCnt.current <= 0) {
      loginUserFirstCnt.current = 1;
    } else {
      loginUser(userInfo).then(() => navigate("/"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  return (
    <Styles>
      <IcoLoadingRing />
    </Styles>
  );
}
