import styled from "styled-components";
import axios from "axios";
import IcoLoadingRing from "../Atoms/Icon/IcoLoadingRing";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  const redirectUri = "http://localhost:3000/logining";
  const navigate = useNavigate();
  const { Kakao } = window;

  const getAuthCode = async (code) => {
    await axios({
      method: "POST",
      url: "https://kauth.kakao.com/oauth/token",
      params: {
        grant_type: "authorization_code",
        client_id: process.env.REACT_APP_CLIENT_ID,
        redirect_uri: redirectUri,
        code,
      },
    })
      .then((res) => {
        const ACCESS_TOKEN = res.data.access_token;
        Kakao.Auth.setAccessToken(ACCESS_TOKEN);
      })
      .catch((err) => {
        console.error("소셜 로그인 도중 오류가 발생했습니다.");
        console.error(err);
        window.history.back();
        navigate("/login");
      });
  };

  const getUserInfo = () => {
    Kakao.API.request({
      url: "/v2/user/me",
      success: (res) => {
        console.log(res);
      },
      fail: (err) => {
        console.log(err);
      },
    });
  };

  useEffect(() => {
    getAuthCode(code);
    getUserInfo();
  });

  return (
    <Styles>
      <IcoLoadingRing />
    </Styles>
  );
}
