import { useState, useEffect } from "react"
import "./index.css"
import Header from "./pages/Header"
import About from "./pages/About"
import Loading from "./pages/Loading"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3700)
  }, [])

  return loading ? (
    <div className="flex justify-center items-center w-screen h-screen">
      <Loading />
    </div>
  ) : (
    <main className="flex flex-col">
      <Header />
      <About />
    </main>
  )
}

export default App
