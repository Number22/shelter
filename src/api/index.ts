const SpotifyWebApi = require('spotify-web-api-js');

const spotifyApi = new SpotifyWebApi();

export default spotifyApi;

const hash = window.location.hash
  .substring(1)
  .split('&')
  .reduce(
    (initial, item) => {
      if (item) {
        const parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    },
    { access_token: '' },
  );
window.location.hash = '';

const token = hash.access_token;

if (token) {
  spotifyApi.setAccessToken(token);
}

const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = '1c267bc1911344e48e5381f6a443eb0f';
const redirectUri = 'https://localhost:4000';
const scopes = ['user-read-email', 'user-read-private'].join('%20');

if (!token) {
  window.location.href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token`;
}
