import React from "react"
import { Parallax } from "react-scroll-parallax"

export default function AboutText() {
  return (
    <div className="px-8 font-bold flex flex-col flex-nowrap md:w-1/2">
      {/* <Parallax translateY={[-150, -300]}> */}
      <h3 className="text-xl py-4 origin-left w-full max-w-full md:text-4xl">Who am I</h3>
      {/* </Parallax> */}
      {/* <Parallax translateY={[-20, -80]}> */}
      <p className="md:text-2xl">
        I am a fairly level headed bloke who and an aspiring frontend developer currently working as
        a p.e. teacher. I’m a go getter and a trend setter. I’m more or less perfect. Lorem ipsum
        dolor sit amet and some more just keep going.
      </p>
      {/* </Parallax> */}
    </div>
  )
}
