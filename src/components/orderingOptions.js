import React from "react"

// initial attempt at ordering options for the tags - turns out orderOps component was more efficient way to go about it

const OrderingOptions = ({ curbside, delivery, drivethru, pickup }) => (
  <div className="inline py-2">
    <div
      className={
        curbside
          ? "mr-1 px-2 py-1 bg-gray-200 rounded-full inline-flex flex-wrap"
          : "hidden"
      }
    >
      curbside
    </div>
    <div
      className={
        delivery
          ? "mr-1 px-2 py-1 bg-gray-200 rounded-full inline-flex flex-wrap"
          : "hidden"
      }
    >
      delivery
    </div>
    <div
      className={
        drivethru
          ? "mr-1 px-2 py-1 bg-gray-200 rounded-full inline-flex flex-wrap"
          : "hidden"
      }
    >
      drivethru
    </div>
    <div
      className={
        pickup
          ? "mr-1 px-2 py-1 bg-gray-200 rounded-full inline-flex flex-wrap"
          : "hidden"
      }
    >
      pickup
    </div>
  </div>
)

export default OrderingOptions
