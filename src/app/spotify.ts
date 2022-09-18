const authEndpoint: string = "https://accounts.spotify.com/authorize";
const redirectUri: string = import.meta.env.VITE_APP_URI;
const clientId: string = import.meta.env.VITE_APP_CLIENT_ID;

const scopes: string[] = [
  // Got al the scopes, uncomment the ones you need to use
  // Images
  // "ugc-image-upload",
  // Spotify Connect
  // "user-modify-playback-state",
  // "user-read-playback-state",
  // "user-read-currently-playing",
  // Follow
  "user-follow-modify",
  "user-follow-read",
  // Listening History
  "user-read-recently-played",
  // "user-read-playback-position",
  "user-top-read",
  // Playlists
  "playlist-read-collaborative",
  // "playlist-modify-public",
  "playlist-read-private",
  // "playlist-modify-private",
  // Playback
  // "app-remote-control",
  "streaming",
  // Users // we need these for sure
  "user-read-email",
  "user-read-private",
  // Library
  // "user-library-modify",
  // "user-library-read",
];
export const loginUrl: string = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;
