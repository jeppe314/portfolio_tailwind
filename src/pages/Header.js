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
            <Parallax opacity={[3, 0]} translateY={[0, -50]} className="animate-appearSlow">
              <Title text="Hi there," />
            </Parallax>
            <Parallax opacity={[3, 0]} translateY={[0, 50]} className="animate-appearSlow">
              <Title text="nice to see you here" />
              {/* </Parallax>
          <Parallax opacity={[4, 0]}>
            <Title text="and enjoy" /> */}
            </Parallax>
          </div>
        </Parallax>
      </div>
    </section>
  )
}
