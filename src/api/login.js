import request from "@/utils/request";


// code 获取token
export function apiGetToken(data) {
    return request({
      url: "api/token",
      method: "POST",
      data,
    });
  }
// 获取用户信息
export function apiGetUserInfo(data) {
  return request({
    url: "api/userInfo",
    method: "POST",
    data,
  });
}
