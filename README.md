# SCM Demo — Static site with CI/CD and ESLint

This repository is a ready-to-push template for the assignment:
- A static site (HTML/CSS/JS) containing an "ugly UI" screenshot and an explanation of improvements.
- A GitHub Actions workflow that runs ESLint and, if successful, publishes the repository to GitHub Pages using `peaceiris/actions-gh-pages`.
- An intentionally broken JavaScript file (`script.js`) missing a semicolon to demonstrate the linter catching an error.

## How to use

1. Create a new **public** GitHub repository (e.g. `scm-demo-ugly-ui`) and set the default branch to `main`.
2. Clone the repo locally, copy the contents of this zip into the repo, commit, and push to `main`.
3. On first push, GitHub Actions will run:
   - `npm ci` to install devDependencies.
   - `npm run lint` which uses ESLint and is expected to fail because `script.js` is missing a semicolon.
4. Fix the linting error (add the missing semicolon in `script.js`), commit, and push again.
5. After the lint step passes, the workflow deploys the repository files to GitHub Pages (gh-pages branch) via the action.

## Notes
- The workflow uses Node 18 and ESLint as a devDependency. If you prefer, you can install ESLint globally on your machine instead.
- If you want the site to be served from the `main` branch's `/` root instead of `gh-pages`, adjust the `peaceiris/actions-gh-pages` settings or enable GitHub Pages from repository settings.

