# nuxt.js GitHub Contributors
An example nuxt.js app for analyzing contributors stats across the GitHub
repositories.

## Before you begin
GitHub is heavily limitinh unauthenticated API requests.
Follow these steps to generate an auth token needed for the app to work:

1. Go to [Personal access tokens](https://github.com/settings/tokens) page
2. Generate new token and grant it only `public_repo` (under `repo`) scope
3. Copy the generated token, go to the project root folder and create a new
file, call it `.github.json`
4. Paste the following in it:
```
{
  "GITHUB_USERNAME": "YOUR_USERNAME",
  "GITHUB_PASSWORD": "GENERATED_TOKEN"
}
```

Of course, replace the placeholders with your GitHub username and token
respectively

## Development
Before you start, make sure you have installed:
- docker
- docker-compose

You can also `npm install` and run the project directly but docker is
recommended

To start, go to the root directory of the project and run:
(NOTE: You can skip the first two lines if there are no new npm dependencies and/or updates)
```
docker rm github_contributors
docker-compose build --no-cache
docker-compose up
```
You can then open `http://127.0.0.1:3000/` in your browser and start making
changes to the code which will auto-refresh the preview

### Notes
- JS and (S)CSS are linted with eslint and stylelint respectfully

## Production
To run the website in production mode:
```
docker-compose -f docker-compose.production.yml up
```
It will run the app on `http://127.0.0.1:3000/`

## Built With
Note: only major dependencies are listed here. For the full list, and the
up-to-date versions of dependencies, check package.json
### [Vue.js](https://vuejs.org/)
- Role: View library
- Version: depends on the current version of Nuxt.js

### [Nuxt.js](https://nuxtjs.org/)
- Role: Vue.js framework, facilitates Server Side Rendering
- Version: 2.x

### [Chartist](https://gionkunz.github.io/chartist-js/index.html)
- Role: A lightweight charting library
- Version: 0.11.x

### [Fluture](https://github.com/fluture-js/Fluture)
- Role: An algebraic counterpart to Promises
- Version: 10.x

### [axios](https://github.com/axios/axios)
- Role: HTTP client
- Version: 0.18.x
