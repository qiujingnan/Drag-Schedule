// dashboard页面所有的接口请求函数
import request from "@/utils/request";

const BASE = "";

// 获取cardList
export const reqGetCardList = (param) =>
  request({
    url: BASE + "api/token",
    method: "POST",
    param,
  });

// 新增cardList
export const reqAddCardList = (param) =>
  request({
    url: BASE + "api/token",
    method: "POST",
    param,
  });
