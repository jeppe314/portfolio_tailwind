import React from "react"
import JesperObject from "../components/JesperObject"
import { ReactComponent as Avatar } from "../assets/avatars/Avatar2.svg"
import { useParallax, Parallax } from "react-scroll-parallax"

export default function About() {
  // const { svgRef } = useParallax({ speed: 10 })

  return (
    <section className="-mt-32 flex flex-col justify-center items-center gap-8 md:flex-row md:items-center">
      <Avatar width="400" height="400" />
      <JesperObject />
    </section>
  )
}
