import axios from "axios";
import { meEndpoint } from "@components/API";

class AuthService {
  constructor() {
    this.me = undefined;
    this.token = this.getToken();
    if (this.token) this.setAuthHeader();
  }

  async getCurrentUser() {
    if (this.me === undefined) {
      if (this.getToken()) {
        try {
          const res = await axios(meEndpoint);
          this.me = res.data;
          this.me.token = this.getToken();
        } catch (err) {
          console.error(err);
          this.logout();
          this.me = null;
        }
      } else this.me = null;
    }

    return this.me;
  }

  getToken() {
    if (!this.token) {
      try {
        this.token = JSON.parse(localStorage.getItem("userToken"));
      } catch (err) {
        this.token = null;
      }
    }

    return this.token;
  }

  setToken(token) {
    localStorage.setItem("userToken", JSON.stringify(token));
    this.token = token;
    this.setAuthHeader();
  }

  // eslint-disable-next-line
  logout() {
    localStorage.removeItem("userToken");
  }

  setAuthHeader() {
    axios.defaults.headers.common = {
      "x-access-token": this.token,
    };
  }
}

export default new AuthService();
