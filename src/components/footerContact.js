import React from "react"

const footerContact = () => (
  <div className="overflow-hidden shadow-lg p-4 m-auto bg-gray-100 md:max-w-screen-md">
    <div className="px-2 py-3 bg-gray-700 text-center rounded">
      <div className="font-bold text-xl mb-2 text-white underline">
        Contact Us For Updates
      </div>
      <p className="text-white text-base pb-1">
        If you notice incorrect information, please fill out this short Google
        form to let us know what we got wrong.
      </p>
      <button className="m-2 bg-white py-2 px-4 rounded-full">
        <a
          href="https://forms.gle/7Eto4hncfoGnaEAX7"
          className="text-gray-700 no-underline"
        >
          Update Info
        </a>
      </button>
    </div>
  </div>
)

export default footerContact
