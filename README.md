## ☁️ A simple one page marketing site starter for SaaS companies and products.

[Live Demo: https://gatsby-starter-saas-marketing.netlify.com/ ](https://gatsby-starter-saas-marketing.netlify.com/)

### Getting started

install Gatsby CLI - [more info](https://www.gatsbyjs.org/tutorial/part-zero/)
##### `npm install -g gatsby-cli` or `yarn global add gatsby-cli`
---

install the starter locally:
##### `gatsby new gatsby-starter-saas-marketing https://github.com/keegn/gatsby-starter-saas-marketing`
---
install dependencies: 
##### `yarn install`
---
start the development server:
##### `gatsby develop`
---
At the project root, compile your application for deployment:
##### `gatsby build`
---
Clean the cache to fix certain errors - run the clean command before starting the dev server.
#####  `gatsby clean`
---
At the project root, serve the production build of your site:
##### `gatsby serve`
---
### Styles

This starter uses [styled-components](https://www.styled-components.com/). The theme file contains the base styles `src/styles/theme.js` and the global styles file contains basic element styles and a style reset `src/styles/GlobalStyles.js`.

---

### Deploying to Netlify

[Deployment Guide](http://gatsbyjs.org/docs/deploying-to-netlify)

---
### Collect emails with Netlify Forms

[Form Handling with Gatsby.js V2 and Netlify](https://codebushi.com/form-handling-gatsby-netlify/)

---
### Netlify form usage example

In `header.js` replacing the existing `<HeaderForm>...</HeaderForm>` components with the following should provide a working example once your site is deployed: 
```
<HeaderForm
 name="early-access"
 method="post"
 data-netlify-honeypot="bot-field"
 data-netlify="true"
>
  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="early-access" />
  <HeaderInput
   type="email"
   placeholder="Your email"
   name="email"
   id="email"
   required
  />
  <HeaderButton>Early access</HeaderButton>
</HeaderForm>
```
