# Personal Website (hotrodzphotography.github.io)

## Background
This site is intended as a simple way for individuals to check out recent photos
that I've taken and posted for viewing. It also integrates with Instagram to
show some recent posts. Additionally, this site will showcase some of my 
photography gear and allows potential clients or interested individuals to
contact me directly via email.

## Technologies
* [VueJS](https://vuejs.org/)
* [Vue-Router](https://router.vuejs.org/) which allows for a "single-page" webapp.
* [Vue CLI Service](https://cli.vuejs.org/)
* [Vue-LazyLoad](https://www.npmjs.com/package/vue-lazyload) for lazy-loading album images seamlessly
* [Vue-Instagram](https://www.npmjs.com/package/vue-instagram)
* [Vue-Material-Design-Icons](https://www.npmjs.com/package/vue-material-design-icons) for a wide variety of performant SVG icons.
* [Vue-Analytics](https://www.npmjs.com/package/vue-analytics) for seamless Google Analytics integration
* [Rollbar](https://rollbar.com) for client-side error logging
* [ESLint](https://eslint.org/) with a Vue plug-in for a clean, consistent code style
* [Less](http://lesscss.org/)

## Project Workflow
### Install dependencies
```
npm install
```

### Local development - compiles and hot-reloads changes
```
npm run serve
```

### Production build - compiles and minifies code
```
npm run build
```

Build files are placed into the `dist/` directory.

### Production deploy - compiles and deploys to `master` branch
```
npm run deploy
```

Note: This compiles the site's files using `npm run build` first.

Unfortunately, GitHub Pages requires the primary site to be served
out of the `master` branch, which means that a branch other than master
must be used as the primary branch so that `master` can serve as the branch
which built files are deployed to.

### Lints and fixes files
```
npm run lint
```

### Customize Vue CLI Configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### References

#### Google Photos
* https://developers.google.com/api-client-library/javascript/start/start-js
* https://stackoverflow.com/questions/51943422/google-photos-api-authentication
* API Console Tester: https://developers.google.com/photos/library/reference/rest/v1/albums/list?apix_params=%7B%7D
* https://developers.google.com/photos/library/reference/rest/v1/albums/list?apix_params=%7B%22access_token%22%3A%22AIzaSyDQvtu-_m7i35b5BMCitQ7SxK77f1hcO2w%22%7D&apix=true
* https://console.developers.google.com/apis/credentials?project=sample-project-236402&authuser=2&folder&organizationId
* https://developers.google.com/api-client-library/javascript/start/start-js
