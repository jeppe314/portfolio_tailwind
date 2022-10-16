import React from "react"
import Typist from "react-typist"
import "./Typist.css"
import { useInView } from "react-intersection-observer"

export default function JesperObject() {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className="font-bold text-left w-screen h-[300px] px-8 md:w-1/2 md:h-full text-[2vmax]"
    >
      {inView && (
        <p>
          <Typist avgTypingDelay={25}>
            <Typist.Delay ms={1000} />
            <span className="text-devblue">const </span>
            devlepoer =
            <Typist.Backspace count={11} delay={500} />
            developer = <span className="text-bracketpink">&#123;</span>
            <br />
            {/* <div className="ml-4"> */}
            <span className="ml-4">name: </span>
            <span className="text-stringorange">"Jesper Olof Lindqvist"</span>,
            <br />
            <span className="ml-4">age: </span>
            <span className="text-intgreen">28</span>,
            <br />
            <span className="ml-4">nationality: </span>
            <span className="text-devblue">[</span>
            <span className="text-stringorange">"Finland"</span>,{" "}
            <span className="text-stringorange">"Åland"</span>
            <span className="text-devblue">]</span>,
            <br />
            <span className="ml-4">location: </span>
            <span className="text-stringorange">"Stockholm"</span>,
            <br />
            <span className="ml-4">interests: </span>
            <br />
            <span className="text-devblue">[</span>
            <span className="text-stringorange">"Programming"</span>,{" "}
            <span className="text-stringorange">"Sports"</span>,
            <span className="text-stringorange">"Reading"</span>,{" "}
            <span className="text-stringorange">"Photography"</span>
            <span className="text-devblue">]</span>
            <br />
            {/* </div> */}
            <span className="text-bracketpink">&#125;</span>
            <br />
          </Typist>
        </p>
      )}
    </div>
  )
}
