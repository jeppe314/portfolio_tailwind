import { useState, useEffect } from "react"
import "./index.css"
import Header from "./pages/Header"
import About from "./pages/About"
import Loading from "./pages/Loading"
import { ParallaxProvider } from "react-scroll-parallax"

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3700)
  }, [])

  return (
    <ParallaxProvider>
      {loading ? (
        <Loading />
      ) : (
        <main className="flex flex-col flex-nowrap w-screen h-full box-border text-white bg-gradient-to-r from-darkgray via-tuna to-woodsmoke background-animate">
          <Header />
          <About />
        </main>
      )}
    </ParallaxProvider>
  )
}

export default App
