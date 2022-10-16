import React from "react"
import JesperObject from "../components/JesperObject"
import AboutText from "../components/AboutText"
import { ReactComponent as Avatar } from "../assets/avatars/Avatar2.svg"
import { Parallax } from "react-scroll-parallax"

export default function About() {
  // const { svgRef } = useParallax({ speed: 10 })

  return (
    <section className="h-full -mt-32 flex flex-col justify-start items-center md:flex-row md:items-center">
      {/* <Parallax
        scale={[1.2, 0.8]}
        startScroll={0}
        endScroll={300}
        translateX={[0, 85]}
        translateY={[0, 90]}
        onProgressChange={(progress) => console.log("avatar: " + progress)}
      > */}
        <Avatar className="w-full -scale-x-100" />
      {/* </Parallax> */}
      {/* <Parallax
        translateY={[-30, -60]}
        onProgressChange={(progress) => console.log("const: " + progress)}
      > */}
        <JesperObject />
      {/* </Parallax> */}

        <AboutText />
    </section>
  )
}
