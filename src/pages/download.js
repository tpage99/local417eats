import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DownloadPage = () => (
  <Layout>
    <SEO title="Download page" />
    <div className="mx-auto md:max-w-screen-lg">
      <section>
        <h1 className="pt-2 text-4xl font-bold text-center leading-tight">
          Download the app
        </h1>
        <p className="mb-2 text-center">
          [<a href="#directions">Skip to Directions</a>]
        </p>
        <p className="py-2">
          Local 417 Eats has been designed as a Progressive Web App (PWA). This
          means that it can be downloaded to your phone or desktop without going
          through an application store. One of the biggest benefits of this is a
          smaller file size. Once downloaded Local 417 Eats is only about 350kb
          (as of May 2020 before other optimizations). For comparison, other
          "small" apps run around 20MB, which makes them more than 50 times
          larger than our little PWA!
        </p>
        <p className="py-2">
          Most comparisons are going to be apples to oranges when it comes to
          apps versus PWA's. They each have their strengths. Our little app is
          only designed to filter restaurants and help you find a great local
          place to eat! And the biggest benefit is that you can access
          restaurant information whether you have data/internet or not. If you'd
          like to learn more about PWA's, check out this{" "}
          <a href="https://web.dev/what-are-pwas/">article from Google</a>.
        </p>
      </section>
      <section>
        <h2 className="py-2 text-3xl font-bold leading-tight" id="directions">
          For mobile phone and/or tablet:
        </h2>
        <h3 className="font-bold py-2 text-xl">Android (Google) Device</h3>
        <ul className="ml-6 mb-4 list-disc">
          <li>
            Go to Local 417 Eats website on your Android device using Chrome
            browser
          </li>
          <li>
            A message will pop up at the bottom of your screen asking if you
            would like to "Add Local 417 Eats to homescreen"
          </li>
          <li>Once selected website will be downloaded to your device</li>
        </ul>
        <h3 className="font-bold py-2 text-xl">iOS (Apple) Device</h3>
        <ul className="ml-6 mb-4 list-disc">
          <li>
            Go to Local 417 Eats website on your iOS device using Safari browser
          </li>
          <li>
            Select the share icon (next to back and forward browser buttons at
            bottom of screen)
          </li>
          <li>Scroll down until you see "Add to Home Screen"</li>
          <li>Once selected website will be downloaded to your device</li>
        </ul>
        <h3 className="font-bold pt-2 text-xl">For desktop:</h3>
        <p className="py-2">
          Using Chrome browser go to Local 417 Eats website. On the far right of
          your URL address bar there will be a plus sign with a circle around
          it. Select this and agree to Install. The website will be installed to
          your computer and accessible as an app through the Chrome browser.
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
    </div>
  </Layout>
)

export default DownloadPage
