# Portfolio Site — Starter Template

A fully static portfolio (HTML/CSS/JS only, no build step, no backend) styled
as a dark "3D viewport" — filterable project grid, hover selection brackets,
and a lightbox for local videos/images. External projects (Vimeo, YouTube,
ArtStation) open in a new tab instead.

## Files

```
index.html      Page structure
style.css       All styling (the visual theme lives here)
script.js       Renders the grid, handles filtering + the lightbox
projects.js     <-- YOUR CONTENT GOES HERE (array of project objects)
media/
  thumbnails/   Grid thumbnail images
  videos/       Local .mp4 files for the lightbox
  images/       Local full-size images for the lightbox
```

## 1. Customize

- **Name & links**: edit the `<header class="site-header">` block and the
  `<section class="hero">` block in `index.html`.
- **Projects**: edit the `PROJECTS` array in `projects.js`. Each entry needs
  a title, tags (must match `3d`, `2d`, `art`, `animation`, `gamedev` — or
  add your own and a matching filter button in `index.html`), a thumbnail,
  and a type (`video-local`, `image-local`, or `external`). Full details are
  in the comment at the top of `projects.js`.
- **Colors/fonts**: everything is driven by CSS variables at the top of
  `style.css` under `:root` — change `--accent`, `--bg`, etc. and the whole
  site updates.

## 2. Add your media

Drop thumbnails into `media/thumbnails/`, videos into `media/videos/`, and
full images into `media/images/`. Keep video files reasonably compressed
(H.264 mp4, under ~20–30MB each) since GitHub has file size limits — for
longer or heavier reels, host on Vimeo/YouTube and use `type: "external"`
instead so the repo stays light.

## 3. Preview locally

Just open `index.html` in a browser — no server or build step needed. If a
video won't autoplay locally due to browser file:// restrictions, run a
quick local server instead:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## 4. Deploy on GitHub Pages

1. Create a new GitHub repo and push these files to it (e.g. to the `main`
   branch, at the repo root).
2. On GitHub: **Settings → Pages → Build and deployment → Source**, choose
   `Deploy from a branch`, pick `main` and `/ (root)`, then Save.
3. GitHub gives you a URL like `https://yourusername.github.io/reponame/`
   within a minute or two.
4. Want a custom domain (like the reference site's `.xyz`)? Add a `CNAME`
   file at the repo root containing just your domain, then point your
   domain's DNS at GitHub Pages (GitHub's docs walk through the exact DNS
   records).

No backend, database, or server is needed anywhere in this flow — GitHub
Pages just serves these static files directly.

## Optional: a contact form without a backend

If you want a working "Contact" form later without running your own server,
use a free static-form service like Formspree or Getform: point your
`<form>`'s `action` at the endpoint they give you, keep `method="POST"`, and
they handle emailing you the submission. Still 100% frontend on your end.
