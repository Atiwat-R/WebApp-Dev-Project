import axios from "axios";
import NProgress from "nprogress";

const apiClient = axios.create({
  baseURL: "https://vue-test-71b83-default-rtdb.asia-southeast1.firebasedatabase.app/preregis.json/",
});

// Do the middleware thigns...
apiClient.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

apiClient.interceptors.response.use((response) => {
  NProgress.done();
  return response;
});

export default {
  postPreRegis(theObj) {
    return apiClient.post("", theObj);
  },
  getPreRegis() {
    return apiClient.get("");
  },
};
