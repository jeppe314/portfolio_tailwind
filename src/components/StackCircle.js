import React, { useRef, createRef, useEffect } from "react"
import Stack from "../assets/Stack.json"
import StackItem from "./StackItem"

export default function StackCircle({}) {
  const stackIcons = Stack.data.map((stackItem) => (
    <StackItem url={`${stackItem.url}`} name={stackItem.name} className="absolute top-50" />
  ))

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <div className="w-64 h-64 relative rounded-full border-2 border-dashed ">
        <StackItem
          url="/images/tech_stack/react.svg"
          position="transform origin-left rotate-[240deg] translate-x-[100%] translate-y-[100%]"
        />

        {/* <StackItem url="/images/tech_stack/react.svg" top="top-32" /> */}
      </div>
    </div>
  )
}
