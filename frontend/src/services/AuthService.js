import axios from "axios";
import { meEndpoint, favoritesPlaylistEndpoint } from "@components/API";

class AuthService {
  constructor(callback) {
    this.me = null;
    this.callback = callback;
    this.token = this.getToken();
    if (this.token) this.setAuthHeader();
  }

  async getCurrentUser() {
    if (!this.token) this.me = null;
    else {
      try {
        let res = await axios(meEndpoint);
        this.me = res.data;

        this.me.token = this.token;

        res = await axios(favoritesPlaylistEndpoint);
        this.me.favoritesPlaylist = res.data;
      } catch (err) {
        console.error(err);
        this.logout();
      }
    }

    return this.me;
  }

  getToken() {
    if (!this.token) {
      try {
        this.token = JSON.parse(localStorage.getItem("userToken"));
      } catch (err) {
        this.logout();
      }
    }

    return this.token;
  }

  setToken(token) {
    localStorage.setItem("userToken", JSON.stringify(token));
    this.token = token;
    this.setAuthHeader();

    this.getCurrentUser().then((user) => {
      this.callback(user);
    });
  }

  // eslint-disable-next-line
  logout() {
    localStorage.removeItem("userToken");
    this.token = null;
    this.setAuthHeader();
    this.me = null;
    this.callback(null);
  }

  setAuthHeader() {
    axios.defaults.headers.common = {
      "x-access-token": this.token,
    };
  }
}

export default AuthService;
