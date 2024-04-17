import service from "@/utils/request";

//get ncr total
export const getManageList = (data) => {
    return service({
      url: "/manage/getAllManageList",
      method: "post",
      data,
    });
  };

