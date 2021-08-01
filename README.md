[![wakatime](https://wakatime.com/badge/github/raunak96/devspace-static-blog.svg)](https://wakatime.com/badge/github/raunak96/devspace-static-blog)
# DevSpace - Static Blog Site (NextJs + TailwindCss + Markdown)  

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
- Before running the above the above script to export static HTML, see to the following:
  - If we are using **next/image** Image component for Image Optimisation, `next export` will not work. To make sure, it does ,we can do the following:
    - Configure a third party loader like **cloudinary**. Docs [here](https://nextjs.org/docs/basic-features/image-optimization).
    - Use html **img** instead.
    - Deploy to **Vercel** which takes care of everything automatically.
- Now run the following command:
  ```bash
  yarn build
  ```
- Then you'll have a static version of your app in the out directory.
- Finally serve the static site using:
  ```bash
  serve -s out
  ``` 
