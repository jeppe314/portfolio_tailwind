import React, { useRef } from "react"
import Title from "../components/Title.js"
import { Parallax } from "react-scroll-parallax"

export default function Header() {
  return (
    <section className="flex flex-col justify-between h-screen">
      <div className="h-2/3 flex flex-col justify-between">
        <Parallax opacity={[9, 0]} translateY={[0, 0]}>
          <p className="text-center text-xl py-8">Jesper Lindqvist</p>
        </Parallax>
        <Parallax>
          <div className="my-auto ">
            <Parallax
              opacity={[1, 0]}
              translateY={[0, 20]}
              startScroll={0}
              endScroll={500}
              scale={[1, 1.5]}
              className="animate-appearSlow"
            >
              <Title text="Hi there," />
            </Parallax>
            <Parallax
              startScroll={0}
              endScroll={500}
              opacity={[1, 0]}
              translateY={[0, -10]}
              scale={[1, 1.2]}
              className="animate-appearSlow"
            >
              <Title text="nice to see you here" />
            </Parallax>
          </div>
        </Parallax>
      </div>
    </section>
  )
}
