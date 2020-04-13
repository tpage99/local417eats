A Gatsby site built to support local Springfield, MO area restaurants and businesses.

## 🚀 Quickstart

**Prerequisites**  
Only thing you should need is the [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start#install-the-gatsby-cli) installed locally on your machine. This will make local development with Gatsby much simpler.

Get started by running the following commands:

```
$ git clone git@github.com:tpage99/local417eats.git
$ npm install
$ gatsby develop
```

Visit `http://localhost:8000/` to view the site

Gatsby is awesome and you should experience hot reloads on save. Only instance that would be necessary to stop and restart local server are changes to config or GraphQL queries/schemas.

## Resources 📕

### Tailwind CSS

This project seemed like a good use-case for Tailwind CSS. Here are some helpful resources for integrating and using Tailwind CSS in a Gatsby site:

- [Tailwind CSS docs](https://tailwindcss.com/docs/installation)
- [NY Studio 107 blog post](https://nystudio107.com/blog/using-tailwind-css-with-gatsby-react-emotion-styled-components) was overly complicated. What ended up working much better was [this YouTube video](https://youtu.be/d0v_ouu5mqU) which primarily referenced Tailwind CSS docs...not sure why I didn't start there

### Google Maps API

This project uses the Google Maps API on the individual restaurant "eats" views to display where the restaurant is located. Imported via an iframe through their embedded API which includes a button to open in Google Maps. Other positive, is free! Check out the [docs](https://developers.google.com/maps/documentation/embed/guide#place_mode) for more info.

API keys and other items managed from [Google Cloud Platform Dashboard](https://console.cloud.google.com/).
