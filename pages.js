// ---------------------------------------------------------------
// Landing pages. Edit this file to add, change or remove pages.
//
// Each page is reached with ?p=name, for example:
//   https://yourusername.github.io/ytpage/               -> page "youtube"
//   https://yourusername.github.io/ytpage/?p=playlist1   -> page "playlist1"
//   https://yourusername.github.io/ytpage/?p=playlist2   -> page "playlist2"
//
// Button types: "spotify" and "apple" force-open the app, "youtube" opens the YouTube app.
// "event" is the Meta Pixel event fired when someone taps that button.
// "background" is an image file in the same folder as index.html.
//
// Spotify link format: https://open.spotify.com/playlist/XXXXXXXX
// Apple Music link:    the full link from Share > Copy Link on the playlist
// ---------------------------------------------------------------

window.PAGES = {

  // Default page (used when there is no ?p=)
  youtube: {
    title: "Hinoku",
    subtitle: "Ambient mixes for focus, sleep and late nights.",
    note: "Tap to listen and subscribe in the app",
    background: "bg.jpg",
    event: "OpenYouTubeTap",
    buttons: [
      { type: "youtube", label: "Watch on YouTube",
        url: "https://www.youtube.com/watch?v=V7wgzfX9DYY" }
    ]
  },

  // ?p=playlist1
  playlist1: {
    title: "PLAYLIST 1 NAME",
    subtitle: "One line about the vibe of this playlist.",
    note: "Tap to open the playlist in the app",
    background: "bg.jpg",
    event: "OpenPlaylistTap",
    buttons: [
      { type: "spotify", label: "Listen on Spotify", event: "OpenSpotifyTap",
        url: "https://open.spotify.com/playlist/0iJ7YkOd39sEOefybU8iXJ?si=35259048f32e4787" },
      { type: "apple", label: "Listen on Apple Music", event: "OpenAppleMusicTap",
        url: "https://music.apple.com/de/playlist/nostalgic-ambient-music/pl.u-qxylEeDu3aXgoGd" }
    ]
  },

  // ?p=playlist2
  playlist2: {
    title: "PLAYLIST 2 NAME",
    subtitle: "One line about the vibe of this playlist.",
    note: "Tap to open the playlist in the app",
    background: "bg.jpg",
    event: "OpenPlaylistTap",
    buttons: [
      { type: "spotify", label: "Listen on Spotify", event: "OpenSpotifyTap",
        url: "https://open.spotify.com/playlist/3gbNhrjidyJRVGDaQGDBYP?si=356fffaff4a64d5f" },
      { type: "apple", label: "Listen on Apple Music", event: "OpenAppleMusicTap",
        url: "https://music.apple.com/de/playlist/nostalgic-ambient-music/pl.u-qxylEeDu3aXgoGd" }
    ]
  }

};
