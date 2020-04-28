import React from "react"

const Tags = ({ tags }) => {
  return (
    <div className="inline py-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="mr-1 px-2 py-1 bg-gray-200 rounded-full inline-flex flex-wrap"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default Tags
