import React from "react"

export default function StackItem({ url, name, position }) {
  return (
    <div className="grid place-content-center absolute top-1/2 left-1/2 w-[100px] h-[100px] m-[calc(-100px/2)] rounded-full">
      <img src={url} alt={name} className="animate-spinSlowReverse" />
    </div>
  )
}
