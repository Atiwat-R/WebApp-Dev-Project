import axios from "axios";
import NProgress from "nprogress";



const apiClient = axios.create({
  baseURL: "https://webapp-discussion-forum-default-rtdb.asia-southeast1.firebasedatabase.app/",
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
  
  // API for posts
  postPost(theObj) {
    return apiClient.post("/allPost.json", theObj); // ?auth=333
  },
  getPost() {
    return apiClient.get("/allPost.json");
  },

  // API for comments
  postComment(theObj) {
    return apiClient.post("/allComment.json", theObj);
  },
  getComment() {
    return apiClient.get("/allComment.json");
  },
};
