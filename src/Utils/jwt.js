const jwtDecode = require("jwt-decode");

class JWT {
  setJWt(jwt) {
    localStorage.setItem("jwt", jwt);
  }
  logout() {
    localStorage.clear();
  }
  getId() {
    const data =
      localStorage.getItem("jwt") && jwtDecode(localStorage.getItem("jwt"));
    return data && data.id;
  }
  setAuthHeader() {
    return { Authorization: "Bearer " + localStorage.getItem("jwt") };
  }
  getJWT() {
    return localStorage.getItem("jwt");
  }
}

export default new JWT();
