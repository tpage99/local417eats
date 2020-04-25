import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About page" />
    <section>
      <h1 className="py-2 text-4xl font-bold text-center leading-tight">
        What's this about?
      </h1>
      <p className="py-2">
        Local 417 Eats is a community project of{" "}
        <a href="https://thepagesmedia.com">The Pages Media</a> designed to help
        promote local restaurants in the Springfield, MO area. The goal of this
        project is to make it simple for patrons to identify and support local
        restaurants. This list excludes chains, franchises, and other larger
        restaurant brands that may have more supports than our local eateries.
        The goal here is to support our neighbors and friends and link people to
        the best the 417 area has to offer.
      </p>
    </section>
    <section>
      <h2 className="py-2 text-3xl font-bold text-center leading-tight">
        Why Local Restaurants?
      </h2>
      <p className="py-2">
        COVID-19 has changed our world and at the very least highlighted the
        need to support our neighbors. Other larger restaurants may have other
        resources at their disposal in tough times but our friends and neighbors
        who are struggling to keep their business afloat need our help.
      </p>
      <p className="py-2">
        Local 417 Eats was started after seeing lots of great community efforts
        like the{" "}
        <a href="https://www.springfieldmo.org/locally-owned-dining">
          Springfield Missouri Convention and Visitors Buruea's local lists
        </a>{" "}
        or{" "}
        <a href="bit.ly/supportSGFrestaurants">
          Kim Mossberger's exhaustive curated list of eateries still operating
        </a>{" "}
        in this time of crisis.
      </p>
      <p className="py-2">
        Supporting local has always been important, but this crisis has taught
        us how critical it is. Local restaurant owners banded together to help
        address community needs directly and fought to stay open to provide
        essential services in the midst of stay-at-home orders. While larger
        companies may have stepped out, our friends and neighbors stepped up.
        We're proud of the people in our area and we need to do what we can to
        ensure they're supported through this as well.
      </p>
    </section>
    <section>
      <h2 className="py-2 text-3xl font-bold text-center leading-tight">
        Who Put This Together?
      </h2>
      <p className="py-2">
        Taylor and Kendra Page, a local Springfield area couple who freelance in
        web development and design and other online solutions for small
        businesses, are the driving force behind this project. We wanted to find
        some way to give back and make it easy for people to support local.
      </p>
    </section>
    <section>
      <h2 className="py-2 text-3xl font-bold text-center leading-tight">
        How Long Will This Be Free and How Can We Support You?
      </h2>
      <p className="py-2">
        Local 417 Eats will continue to be free, without ads, and actively
        supported for as long as this state of emergency is our reality. We hope
        one day it can grow and possibly turn into more, but for now it will
        continue to be available as a resource for local patrons to easily find
        the best local places in our area.
      </p>
      <p className="py-2">
        You can support us by supporting our local restaurants!
      </p>
    </section>
    <section>
      <h3 className="py-2 text-2xl font-bold text-center leading-tight">
        But What About Costs?
      </h3>
      <p className="py-2">
        The only significant cost investment at this time, is our time. Local
        417 Eats is a website that is built on the{" "}
        <a href="https://jamstack.org/">JAMStack</a>, something we specialize
        in. This creates fast, efficient, and secure websites that have minimal
        hosting costs. Aside from paying for the domain, this website costs
        $0/month to run. That's the power of the JAMStack.
      </p>
      <h3 className="py-2 text-2xl font-bold text-center leading-tight">
        No Seriously, How Can We Help You?
      </h3>
      <p className="py-2">
        Seriously, we love supporting local businesses and we're doing fine in
        all this. You can support us by supporting our local businesses. If this
        is one small way we can help right now, we're here for it. Maybe
        consider buying a gift card if a local business has this option or
        choose to "pay it forward" to a family in need. You can also refer us to
        your friends and family who have website and online needs.
      </p>
      <p className="py-2">
        If you really feel the need to, you can always{" "}
        <a href="paypal.me/taylorpage">buy us a cup of coffee</a>.
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

export default AboutPage
