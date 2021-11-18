import styled from "styled-components";
import instance from "../../instance";
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

  const sendAuthCode = async (code) => {
    await instance({
      method: "GET",
      url: `/api/getAccessToken?code=${code}`,
    });
  };

  useEffect(() => {
    sendAuthCode(code);
  });

  return (
    <Styles>
      <IcoLoadingRing />
    </Styles>
  );
}
