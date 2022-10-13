import React from "react"
import Title from "../components/Title.js"

export default function Header() {
  return (
    <section className="flex flex-col justify-between h-screen">
      <div>
        <p className="text-center text-xl py-8">Jesper Lindqvist</p>
      </div>
      <div className="my-auto">
        <Title text="Hi there" />
        <Title text="Nice to meet you" />
        <Title text="Enjoy your stay" />
      </div>
    </section>
  )
}
