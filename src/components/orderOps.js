import React from "react"

const OrderOps = ({ orderops }) => {
  const options = orderops.split(", ")
  return (
    <div className="inline py-2">
      {options.map((option, index) => (
        <span
          key={index}
          className="mr-1 px-2 py-1 bg-gray-200 rounded-full inline-flex flex-wrap"
        >
          {option}
        </span>
      ))}
    </div>
  )
}

export default OrderOps
