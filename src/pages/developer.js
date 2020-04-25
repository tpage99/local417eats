import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DeveloperPage = () => (
  <Layout>
    <SEO title="About page" />
    <section>
      <h1 className="py-2 text-4xl font-bold text-center leading-tight">
        Information for Developers
      </h1>
      <p className="py-1">
        Local 417 Eats is built with{" "}
        <a href="https://www.gatsbyjs.org/">GatsbyJS</a>. An amazing static site
        generator that uses <a href="https://reactjs.org/">ReactJS</a> and{" "}
        <a href="https://graphql.org/">GraphQL</a>. Hosted on{" "}
        <a href="https://www.netlify.com/">Netlify</a>, this site is the perfect
        example of the <a href="https://jamstack.org/">JAMStack</a>.
      </p>
      <h2 className="py-2 text-3xl font-bold text-center leading-tight">
        Resources Used
      </h2>
      <p className="py-2">
        Interested in the code?{" "}
        <a href="https://github.com/tpage99/local417eats">
          Check out the GitHub repo
        </a>
        . The "eats" pages are markdown files with frontmatter info. Future
        iterations may involve incorporating a headless CMS option, but for now
        markdown and GraphQL with Gatsby meet our needs just fine. Everything
        from image URL to list information gets updated via markdown frontmatter
        and is then queried on Gatsby pages via GraphQL.
      </p>
      <p className="py-2">
        Speaking of photos, if a restaurant does not have a good photo to use we
        settled on using{" "}
        <a href="https://source.unsplash.com/">Unsplash Source</a> for the
        images. More advanced use cases would benefit from using the API, but in
        order to develop quickly, the time did not seem worth it to implement.
      </p>
    </section>
    <div className="py-6 text-center">
      <Link
        to="/"
        className="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-semibold py-2 px-6 border border-gray-400 rounded-full shadow no-underline"
      >
        Back to Home
      </Link>
    </div>
  </Layout>
)

export default DeveloperPage
