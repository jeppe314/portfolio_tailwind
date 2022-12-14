import React, { useRef, useEffect } from "react"
import StackItem from "./StackItem"
import Stack from "../assets/Stack.json"

export default function App() {
  const stackIcons = Stack.data.map((stackItem) => (
    <StackItem url={`${stackItem.url}`} name={stackItem.name} />
  ))
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
        ciclegraph.clientWidth / 1.5
      }px) rotate(-${angle}deg)`
    }
  }, [])

  return (
    <div className="h-full flex justify-center items-center">
      <div
        className="relative w-[200px] h-[200px] m-[calc(100px / 2 + 0px)] animate-spinSlow
                  before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%]
                  before:rounded-full m-[calc(100px / 2 + 0px)]"
        ref={graph}
      >
        {stackIcons}
      </div>
    </div>
  )
}
