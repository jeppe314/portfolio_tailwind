import React from "react"
import JesperObject from "../components/JesperObject"
import { ReactComponent as Avatar } from "../assets/avatars/Avatar2.svg"
import { Parallax } from "react-scroll-parallax"

export default function About() {
  // const { svgRef } = useParallax({ speed: 10 })

  return (
    <section className="-mt-32 flex flex-col justify-center items-center gap-8 md:flex-row md:items-center">
      <Parallax
        scale={[1.2, 0.8]}
        startScroll={0}
        endScroll={300}
        translateX={[0, 95]}
        translateY={[0, 100]}
        onProgressChange={(progress) => console.log("avatar: " + progress)}
      >
        <Avatar className="w-full -scale-x-100" />
      </Parallax>
      <Parallax
        translateY={[-20, -40]}
        onProgressChange={(progress) => console.log("const: " + progress)}
      >
        <JesperObject />
      </Parallax>
      <div className="p-8 text-center font-bold">
        <p>
          I am a fairly level headed bloke who and an aspiring frontend developer currently working
          as a p.e. teacher. I’m a go getter and a trend setter. I’m more or less perfect. Lorem
          ipsum dolor sit amet and some more just keep going.
        </p>
      </div>
    </section>
  )
}
