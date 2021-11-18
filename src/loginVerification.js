import axios from "axios";

export default async function loginVerification() {
  if (typeof window !== "undefined") {
    const storedAccessToken = localStorage.getItem("token");
    if (storedAccessToken) {
      await axios({
        method: "GET",
        url: "https://kapi.kakao.com/v2/user/me",
        headers: {
          Authorization: `Bearer ${storedAccessToken}`,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error("액세스 토큰 검증 도중 오류가 발생했습니다.");
          console.error(err);
        });
    }
  }
}
