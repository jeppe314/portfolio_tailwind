import React from "react"

export default function StackItem({ url, name, position }) {
  return (
    <div
      className={`${position} animate-spinSlow flex items-center justify-center w-24 h-24 absolute left-1/2 top-1/2 -ml-12 -mt-12 border-black rounded-full`}
    >
      <img src={url} alt={name} />
    </div>
  )
}
