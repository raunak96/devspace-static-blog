[![wakatime](https://wakatime.com/badge/github/raunak96/devspace-static-blog.svg)](https://wakatime.com/badge/github/raunak96/devspace-static-blog)
# DevSpace - Static Blog Site (NextJs + TailwindCss + Markdown)  

![DevSpace Blog](/public/images/app-demo.png 'DevSpace Blog')

[VIEW DEMO](https://rawn-blog.vercel.app/)

## Getting Started

Clone this repository and then run the following commands:

```bash
npm i
npm run dev

# or

yarn
yarn dev
```

### Parsing Frontmatter in Markdown files
Using package [gray-matter](https://github.com/jonschlinkert/gray-matter).

### Parsing Markdown Content to HTML
> Using package [marked](https://github.com/markedjs/marked).
- The html then injected to page using dangerouslySetInnerHTML prop provided by React.

### SERVING STATIC SITE LOCALLY
> We use the [serve](https://github.com/vercel/serve) package for this.
- In [package.json](/package.json), do the following in scripts:
  `build: next build && next export`
- Before running the above script to export static HTML, see to the following:
  - If we are using **next/image** Image component for Image Optimisation, `next export` will not work. To make sure, it does ,we can do the following:
    - Configure a third party loader like **cloudinary**. Docs [here](https://nextjs.org/docs/basic-features/image-optimization).
    - Use html **img** instead.
    - Deploy to **Vercel** which takes care of everything automatically.
- Now run the following command:
  ```bash
  yarn build
  ```
- Then you'll have a static version of your app in the **out** directory.
- Finally serve the static site using:
  ```bash
  serve -s out
  ``` 

### Caching Data for Search because it calls our API route **/api/search** client side as we type in search box (Refer these [docs](https://medium.com/@matswainson/building-a-search-component-for-your-next-js-markdown-blog-9e75e0e7d210))

- In NextJs, api routes behave as serverless functions when deployed so they cannot use fileSystem(fileReaders and writers), hence we cannot directly read and parse data from markdown files and resond with this result unlike getStaticProps which is run server side(in NodeJs) which can use filesystem.

- For this, we make a **script** ( [/scripts/cache.js](/scripts/cache.js) ), which we will run before committing the code (**pre-commit**)

- This script will parse all markdown files and write that data in another file ( [/cache/data.js](cache/data.js) ) in a constant which is also exported.
  
- Now in API handler, we can simply import the constant from the cache which has the data and return it after processing it.

### Setting Up Automatic caching before every git commit using [husky](https://www.npmjs.com/package/husky) package
- We add a **pre-commit** git hook using **husky** which in our case parses the markdown files and stores them in cache ( [/cache/data.js](cache/data.js) ) as explained above using the following command:
  ```bash
  npx husky add .husky/pre-commit "yarn cache-blogs && git add cache/data.js"
  ```
- The git add command is done because the `yarn cache-blogs` will make changes to said file so we need to stage it in this hook.