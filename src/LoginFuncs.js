import instance from "./instance";

export const getAccessToken = async (code) => {
  const res = await instance({
    method: "GET",
    url: `/api/getAccessToken?code=${code}`,
  });
  return res.data.ACCESS_TOKEN;
};

export const getUserInfo = async (accessToken) => {
  const res = await instance({
    method: "GET",
    url: `/api/getUserInfo?ACCESS_TOKEN=${accessToken}`,
  });
  return res.data;
};

export const loginUser = async (userInfo, userDispatch) => {
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