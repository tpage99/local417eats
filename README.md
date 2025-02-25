# End of an Era

Local 417 Eats never really took off like we hoped. It was a fun project, born out of COVID to help the local community more easily access information about local restaurants. But now, it's not needed and it's no longer maintained so it's not helpful to have inaccurate information.

So, it's time to say goodbye.

Thanks for the memories!

## Legacy Notes

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

## Environment Variables

This project uses several environment variables for development. You will need to create a `.env` file in order to put your keys in place. Reference the `gatsby-config` file to determine what environment variables are required. Once hosted, these are added to the backend through Netlify's build processes.

Current environment variables required to function properly:

- Google Maps API
- Algolia Search

## Resources 📕

### Tailwind CSS

This project seemed like a good use-case for Tailwind CSS. Here are some helpful resources for integrating and using Tailwind CSS in a Gatsby site:

- [Tailwind CSS docs](https://tailwindcss.com/docs/installation)
- [NY Studio 107 blog post](https://nystudio107.com/blog/using-tailwind-css-with-gatsby-react-emotion-styled-components) was overly complicated. What ended up working much better was [this YouTube video](https://youtu.be/d0v_ouu5mqU) which primarily referenced Tailwind CSS docs...not sure why I didn't start there

### Google Maps API

This project uses the Google Maps API on the individual restaurant "eats" views to display where the restaurant is located. Imported via an iframe through their embedded API which includes a button to open in Google Maps. Other positive, is free! Check out the [docs](https://developers.google.com/maps/documentation/embed/guide#place_mode) for more info.

API keys and other items managed from [Google Cloud Platform Dashboard](https://console.cloud.google.com/).

### Search with Algolia

Decided to use Algolia for search (?Maybe?). Mainly because they have a free tier and will help speed up development. Not to mention it's a well-liked service with plenty of features.

- [Adding Search with Algolia from Gatsby Docs](https://www.gatsbyjs.org/docs/adding-search-with-algolia/)

### To-Do's

1. Remove emotion in favor of styled-components
   1. Originally installed emotion for Tailwind CSS but not worth the extra bulk
   2. Styled-components is bulkier, but does come with [icons](https://styled-icons.js.org/). Tradeoff seems to be worth it for quicker development
2. Consider using Google Custom Search
   1. https://developers.google.com/custom-search
   2. Why don't more people use this? Supposed to be all client side. Maybe write a Gatsby plugin?
