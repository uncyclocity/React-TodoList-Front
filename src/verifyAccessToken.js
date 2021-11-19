import instance from "./instance";

export default function verifyAccessToken(userDispatch, navigate) {
  const loginUser = async (userInfo) => {
    const { id, nickname, platform } = userInfo;
    await instance({
      method: "POST",
      url: `/api/createMember`,
      data: {
        id,
        nickname,
        platform,
      },
    });
    userDispatch({
      type: "initiate",
      id,
      platform,
      nickname,
    });
  };

  const getUserInfo = async (accessToken) => {
    await instance({
      method: "GET",
      url: `/api/getUserInfo?ACCESS_TOKEN=${accessToken}`,
    }).then((res) => {
      loginUser(res);
      navigate("/");
    });
  };

  let storedAccessToken = localStorage.getItem("accessToken");

  if (storedAccessToken) {
    console.log("ㅎㅇ");
    getUserInfo(storedAccessToken);
  } else {
    navigate("/login");
  }
}
