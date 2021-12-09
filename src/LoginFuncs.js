import instance from "./instance";

export const doGet = {
  accessToken: async (code) => {
    const res = await instance({
      method: "GET",
      url: `/get/accesstoken?code=${code}`,
    });
    return {
      accessToken: res.data.ACCESS_TOKEN,
      refreshToken: res.data.REFRESH_TOKEN,
    };
  },
  userinfo: async (accessToken) => {
    const res = await instance({
      method: "POST",
      url: `/get/userinfo?ACCESS_TOKEN=${accessToken}`,
      data: { ACCESS_TOKEN: accessToken },
    });
    return res.data;
  },
}

export const doPost = {
  member: async (userInfo, userDispatch) => {
    const { id, nickname, platform } = userInfo;
    userDispatch({
      type: "initiate",
      id,
      platform,
      nickname,
    });
    await instance({
      method: "POST",
      url: `/post/member`,
      data: {
        id,
        nickname,
        platform,
      },
    });
  },
  accessToken: async (refreshToken) => {
    const res = await instance({
      method: "POST",
      url: `/post/accesstoken`,
      data: { REFRESH_TOKEN: refreshToken },
    });
    return {
      accessToken: res.data.ACCESS_TOKEN,
    };
  }
}
