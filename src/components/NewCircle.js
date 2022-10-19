import React, { useRef, useEffect } from "react"
import StackItem from "./StackItem"
import Stack from "../assets/Stack.json"

export default function App() {
  const graph = useRef(null)

  useEffect(() => {
    const ciclegraph = graph.current
    const circleElements = ciclegraph.childNodes

    let angle = 360 - 90
    let dangle = 360 / circleElements.length

    for (let i = 0; i < circleElements.length; i++) {
      let circle = circleElements[i]
      angle += dangle
      circle.style.transform = `rotate(${angle}deg) translate(${
        ciclegraph.clientWidth / 2
      }px) rotate(-${angle}deg)`
    }
  }, [])

  return (
    <div className="Circle">
      <div
        className="relative w-[300px] h-[300px] m-[calc(100px / 2 + 0px)] bg-blue-600
                  before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%]
                  before:border-2 before:rounded-full before:border-green-400 m-[calc(100px / 2 + 0px)]"
        ref={graph}
      >
        <StackItem />
        <div className="absolute top-1/2 left-1/2 w-[100px] h-[100px] bg-blue-700 m-[calc(-100px/2)] rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[100px] h-[100px] bg-blue-700 m-[calc(-100px/2)] rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[100px] h-[100px] bg-blue-700 m-[calc(-100px/2)] rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[100px] h-[100px] bg-blue-700 m-[calc(-100px/2)] rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[100px] h-[100px] bg-blue-700 m-[calc(-100px/2)] rounded-full" />
      </div>
    </div>
  )
}
