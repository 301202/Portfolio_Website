/*
  PROJECTS DATA
  =============
  Edit this array to add/remove/reorder your work. Nothing else needs to change —
  script.js reads this file and builds the grid + filters automatically.

  Each project object:
    title      - string, shown under the thumbnail
    tags       - array of lowercase strings, must match filter buttons in index.html
                 (3d, 2d, art, animation, gamedev) — use as many as apply
    thumb      - path or URL to the thumbnail image shown in the grid
    type       - "video-local"  -> plays a local video file in the lightbox
                 "image-local"  -> shows a local image in the lightbox
                 "external"     -> opens the link in a new tab (Vimeo/YouTube/ArtStation etc.)
    src        - for video-local / image-local: path to the file in /media
                 for external: the full URL to open
*/

const PROJECTS = [
  {
    title: "Men's Mental Health Month",
    tags: ["3d", "animation"],
    thumb: "media/thumbnails/Still_2.png",
    type: "external",
    src: "https://www.artstation.com/artwork/rzErKe" 
  },
  {
    title: "007 First Light FanArt",
    tags: ["3d", "art"],
    thumb: "media/thumbnails/007Test_lighting.png",
    type: "external",
    src: "https://www.artstation.com/artwork/nJol14"
  },
  {
    title: "Spider-Man Brand New Day Short",
    tags: ["3d", "animation"],
    thumb: "media/thumbnails/SMBND.png",
    type: "external",
    src: "https://youtube.com/shorts/jhpHqOb03bI?si=hlXwilFTo1q5Q20y"
  },
  {
    title: "Fear CL All Medium October 2025 submission",
    tags: ["3d", "animation"],
    thumb: "media/thumbnails/Fear.png",
    type: "external",
    src: "https://youtu.be/PE3-Ft6ShhM"
  },
  {
    title: "Monte Demo",
    tags: ["2d", "gamedev"],
    thumb: "media/thumbnails/monte.png",
    type: "external",
    src: "https://seyram-gamedev.itch.io/monte"
  },
];
