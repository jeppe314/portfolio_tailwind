import React, { useRef } from "react"
import Title from "../components/Title.js"
import { useParallax, Parallax } from "react-scroll-parallax"

export default function Header() {
  const { ref } = useParallax({ opacity: [1, 0] })

  return (
    <section className="flex flex-col justify-between h-screen">
      <div>
        <p className="text-center text-xl py-8">Jesper Lindqvist</p>
      </div>
      <div className="my-auto" ref={ref}>
        <div>
          <Title text="Hi there" />
        </div>
        <Title text="Nice to meet you" />
        <Title text="Enjoy your stay" />
      </div>
    </section>
  )
}
