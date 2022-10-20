import React from "react"
import JesperObject from "../components/JesperObject"
import AboutText from "../components/AboutText"
import { ReactComponent as Avatar } from "../assets/avatars/Avatar2.svg"
import { Parallax } from "react-scroll-parallax"

export default function About() {
  return (
    <section className="mt-[-15vh] h-screen flex flex-col justify-around items-center leading-relaxed sm:flex-row sm:m-0 sm:items-start">
      <div className="w-full flex flex-col sm:flex-row sm:items-end">
        <div className="flex h-full justify-center items-center sm:w-1/2">
          <Avatar className="h-full" />
        </div>
        <div className="flex justify-start items-center sm:w-2/3 sm:h-full">
          <JesperObject className="h-full w-full" />
        </div>
      </div>
    </section>
  )
}
