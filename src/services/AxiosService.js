import axios from "axios";
import NProgress from "nprogress";



const apiClient = axios.create({
  baseURL: "https://webapp-forum-v2-default-rtdb.asia-southeast1.firebasedatabase.app/",
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
  // Posts will be kept in a single place, allPost
  postPost(theObj) { 
    return apiClient.post("/allPost.json", theObj); // ?auth=333
  },
  getPost() {
    return apiClient.get("/allPost.json");
  },

  // API for comments
  // Each comment will be kept in a node named after a postID of the post it is commented under
  postComment(theObj) {
    let nodeName = "/" + theObj.postID + ".json"; // Ex. /1234.json 
    return apiClient.post(nodeName, theObj);
  },
  getComment(postID) {
    let nodeName = "/" + postID + ".json";
    return apiClient.get(nodeName);
  },
};
