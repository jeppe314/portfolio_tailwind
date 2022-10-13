import React from "react"
import Title from "./Title.js"

export default function Header() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <p className="text-center text-xl">Jesper Lindqvist</p>
      </div>
      <div className="my-auto">
        <Title text="Hi there" />
        <Title text="Nice to meet you" />
        <Title text="Enjoy your stay" />
      </div>
    </div>
  )
}
