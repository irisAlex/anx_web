import service from "@/utils/request";

export const getAuthorityList = (data) => {
  return service({
    url: "/authority/getAuthorityList",
    method: "post",
    data,
  });
};

export const getGenreList = (data) => {
  return service({
    url: "/type/getAllTypeList",
    method: "post",
    data,
  });
};

export const getSupplierList = (data) => {
  return service({
    url: "/supplier/getAllSupplierList",
    method: "post",
    data,
  });
};

export const getProjectList = (data) => {
  return service({
    url: "/project/getAllProjectList",
    method: "post",
    data,
  });
};

//manage
export const getManageList = (data) => {
  return service({
    url: "/manage/getAllManageList",
    method: "post",
    data,
  });
};

// @Tags Api
// @Summary 创建基础api
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body api.CreateApiParams true "创建api"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /api/createApi [post]
export const createManage = (data) => {
  return service({
    url: "/manage/createManage",
    method: "post",
    data,
  });
};

// @Tags menu
// @Summary 根据id获取菜单
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body api.GetById true "根据id获取菜单"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /menu/getApiById [post]
export const getManageById = (data) => {
  return service({
    url: "/manage/getManageById",
    method: "post",
    data,
  });
};

// @Tags Api
// @Summary 更新api
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body api.CreateApiParams true "更新api"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /api/updateApi [post]
export const updateManage = (data) => {
  return service({
    url: "/manage/updateManage",
    method: "post",
    data,
  });
};

export const deleteManage = (data) => {
  return service({
    url: "/manage/deleteManage",
    method: "post",
    data,
  });
};

//upload
export const uploadFile = (data) => {
  return service({
    url: "/fileUploadAndDownload/upload",
    method: "post",
    transformRequest: [
      function (data, headers) {
        // 去除post请求默认的Content-Type
        // delete headers["Content-Type"];
        return data;
      },
    ],
    data: data,
    timeout: 300000,
  });
};
