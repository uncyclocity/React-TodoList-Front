import styled from "styled-components";
import instance from "../../instance";
import IcoLoadingRing from "../Atoms/Icon/IcoLoadingRing";
import { useEffect, useRef, useState } from "react";

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
  const [userInfo, setUserInfo] = useState({});
  const userInfoFirstCnt = useRef(0);

  const sendAuthCode = async (code) => {
    await instance({
      method: "GET",
      url: `/api/getAccessToken?code=${code}`,
    }).then((res) => {
      const { id, nickname } = res.data;
      setUserInfo({ id, nickname });
    });
  };

  useEffect(() => {
    sendAuthCode(code);
  }, [code]);

  useEffect(() => {
    if (userInfoFirstCnt.current <= 0) {
      userInfoFirstCnt.current = 1;
    } else {
      console.log(userInfo);
    }
  }, [userInfo]);

  return (
    <Styles>
      <IcoLoadingRing />
    </Styles>
  );
}
