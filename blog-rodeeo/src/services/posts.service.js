import api from "./api";

class PostsDataService {
  getAllPage() {
    return api.get("/post").then((response) => {
      //console.log(response.data);
      return response.data;
    });
  }
}

export default new PostsDataService();
