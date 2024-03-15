export const environment = {
  production: false,
}

export const SpotifyConfig = {
  clientId: 'f0a7eabcf289479e8463d2ca64d57277',
  redirectUrl: 'https://radinho.netlify.app/login/',
  authEndPoint: 'https://accounts.spotify.com/authorize',
  scopes: [
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-recently-played",
    "user-top-read",
    "user-read-playback-position",
    "user-library-read",
    "user-library-modify",
    "playlist-read-private",
    "playlist-read-collaborative",
  ]
}
