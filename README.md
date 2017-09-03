# monterail-test

<em>I will provide link to hosted project as soon as I will prepare working build.</em>

Stack:
vanilla HTML
vanilla CSS
Vue.js

I picked Vue as I heard it's relatively simple.

I am using vanilla CSS despite I enjoy using SCSS but
I though it could be additional layer of complexity when
learning a framework.

What works:
- all layouts all responsive
- modal is displayed
- everything is component-based
- all-questions view and single-question view
  are synced with mockup JSON data on Firebase
- search works
- voting works
- routing works (to and fro between all-q and single-q view)

What is not very good:
- no user avatars
- modal just appears, it is static
- no question sorting
- app loads all question on the server
  and there is no 'load more' feature
- based on fake JSON I made I should
  display 'live' more info like 'peers involved'
  'more activities', 'conversations' etc.

I was using Vue cli to get out-of-the-box basic
setup with webpack and gulp.
Vue Resource provided AJAX.
Vue Router routing.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
