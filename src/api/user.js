import request from "@/utils/request";

// user 
export function apiGetUserData(params) {
  return request({
    url: "/api/user/list",
    method: "GET",
    params,
  });
}

// role
export function apiGetRoleData(params) {
  return request({
    url: "/api/role/list",
    method: "GET",
    params,
  });
}


// form
export function apiGetFormData(params) {
  return request({
    url: "/api/form/list",
    method: "GET",
    params,
  });
}
