import { useState, useEffect } from "react"
import "./index.css"
import Header from "./pages/Header"
import About from "./pages/About"
import Loading from "./pages/Loading"
import AboutText from "./components/AboutText"
import Tech from "./pages/Tech"
import Contact from "./pages/Contact"
import { ParallaxProvider } from "react-scroll-parallax"
import ContactForm from "./components/ContactForm"

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
        <main className="flex flex-col overflow-x-hidden w-screen h-full box-border text-white bg-gradient-to-r from-darkgray via-tuna to-woodsmoke background-animate">
          <Header />
          {/* <About /> */}
          {/* <AboutText /> */}
          <section className="h-screen flex flex-col sm:flex-row-reverse p-8 justify-center items-center">
            <Tech />
            <ContactForm />
          </section>
        </main>
      )}
    </ParallaxProvider>
  )
}

export default App
