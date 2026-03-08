# Cat Gogh Studio landing page

This project uses [Astro](https://astro.build/) and deploys automatically to **GitHub Pages** with a GitHub Actions workflow.

## Deploy with GitHub Actions

1. Push this repository to GitHub.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Ensure your default branch is `main` (or update `.github/workflows/deploy-pages.yml` to match your branch name).
5. Push to `main` and GitHub Actions will:
   - install dependencies,
   - build the site with `npm run build`,
   - publish `dist/` to GitHub Pages.

For a `*.github.io` repository (like this one), no extra Astro `base` path is needed.

## Local development

```bash
npm ci
npm run dev
```

## Manual production build

```bash
npm run build
```
