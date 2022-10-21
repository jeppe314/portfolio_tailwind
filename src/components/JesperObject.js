import React from "react"
import Typist from "react-typist"
import "./Typist.css"

export default function JesperObject() {
  return (
    <div className=" text-[2vmax] lg:text-[1.5vmax]">
      <p>
        <Typist avgTypingDelay={50} className="h-full">
          <Typist.Delay ms={2000} />
          <span className="text-devblue">const </span>
          devlepoer =
          <Typist.Backspace count={11} delay={500} />
          developer = <span className="text-bracketpink">&#123;</span>
          <br />
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
          <span className="text-stringorange">"WebDev"</span>,{" "}
          <span className="text-stringorange">"Sports"</span>,
          <span className="text-stringorange">"Reading"</span>,{" "}
          <span className="text-stringorange">"Outdoors"</span>
          <span className="text-devblue">]</span>
          <br />
          <span className="text-bracketpink">&#125;</span>
          <br />
        </Typist>
      </p>
    </div>
  )
}
