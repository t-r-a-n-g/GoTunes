import axios from "axios";
import { favoritesPlaylistEndpoint, baseUrl } from "../components/API";

class UserService {
  constructor(id) {
    this.id = id;
  }

  // eslint-disable-next-line
  async getFavoritesPlaylist() {
    const res = await axios(favoritesPlaylistEndpoint);
    return res.data;
  }

  async getPlaylists() {
    const res = await axios(
      `${baseUrl}/api/users/${this.id}/playlists?source=internal`
    );
    return res.data;
  }
}

export default UserService;
