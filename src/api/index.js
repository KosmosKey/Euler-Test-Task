import axios from "../axios";

export const retrievingAssets = async () => {
  try {
    return axios.get("/assets?order_direction=desc&offset=0&limit=50");
  } catch (error) {
    console.log("error", error);
  }
};

export const retrievingSingleAsset = async (data) => {
  try {
    return axios.get(`/asset/${data.address}/${data.token_id}/`);
  } catch (error) {
    console.log("error", error);
  }
};
