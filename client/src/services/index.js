import http from "../http-common";

class TutorialDataService {

  getUser(id) {
    return http.get(`/user/${id}`);
  }

  signUp(data) {
    return http.post("/signup", data);
  }

  login(data) {
    return http.post("/login", data);
  }


}

export default new TutorialDataService();