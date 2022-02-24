# www-site website

>  Releasing 2020, Fully working blog site, built with Nuxt.js (static site generation). Incase anyone finds it useful.

- One page full scroll home page system
- Blog post system for markdown posts
- META tags for social sharing and search engines (also for blog posts)
- Images are auto resized for different screen sizes (including blog post pictures)
- Unused CSS will be auto removed
- Responsive
- Comments with Disqus

TODO notes:

- Upgrade packages from 2020 to today.
- LatestPosts on home page (does not work with only 1 posts, need styling)
- Blog post - code highlight.js coulnt get this to work with this md parser.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

**MAKE config/site.js FROM site.js.example**

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
