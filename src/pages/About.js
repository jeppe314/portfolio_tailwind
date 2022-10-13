import React from "react"
import JesperObject from "../components/JesperObject"
import { ReactComponent as Avatar } from "../assets/avatars/Avatar2.svg"
import { Parallax } from "react-scroll-parallax"

export default function About() {
  return (
    <section className="-mt-32 flex flex-col justify-center items-center gap-8 md:flex-row md:items-center">
      <Avatar width="400" height="400" />
      <JesperObject />
    </section>
  )
}
