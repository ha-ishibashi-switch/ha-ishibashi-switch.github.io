# ha-ishibashi-switch.github.io

Create React App project for GitHub Pages.

## Routes

- `/` — karaoke club survey
- `/karaoke-club/Aug-Enquate` — karaoke club survey

The project includes a `public/404.html` SPA fallback so the nested route
continues to work when the page is refreshed or opened directly on GitHub Pages.

## Deploy

1. Push this repository to `ha-ishibashi-switch/ha-ishibashi-switch.github.io`.
2. Run:

```bash
npm install
npm run build
```

3. In GitHub, open **Settings → Pages**.
4. Select **Deploy from a branch**, choose your branch, and select the folder
   containing the generated site.

For the existing `docs`-based workflow, build and copy the generated `build`
directory to `docs`, then push `docs` to the selected branch.

## Important

The GitHub Pages URL for this repository is:

`https://ha-ishibashi-switch.github.io/`

The karaoke route is:

`https://ha-ishibashi-switch.github.io/karaoke-club/Aug-Enquate`
