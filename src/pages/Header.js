import React, { useRef } from "react"
import Title from "../components/Title.js"
import { useParallax, Parallax } from "react-scroll-parallax"

export default function Header() {
  // const { ref } = useParallax({ opacity: [3, 0] })

  return (
    <section className="flex flex-col justify-between h-screen">
      <Parallax opacity={[9, 0]} translateY={["50px", "50px"]}>
        <p className="text-center text-xl py-8">Jesper Lindqvist</p>
      </Parallax>
      <Parallax translateY={[-220, -20]}>
        <div className="my-auto">
          <Parallax opacity={[4, 0]}>
            <Title text="Hi there" />
          </Parallax>
          <Parallax opacity={[4, 0]}>
            <Title text="relax, sit back" />
          </Parallax>
          <Parallax opacity={[4, 0]}>
            <Title text="and enjoy" />
          </Parallax>
        </div>
      </Parallax>
    </section>
  )
}
