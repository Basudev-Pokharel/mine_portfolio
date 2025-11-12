import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import { Hero } from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import ProgressBar from "./Components/ProgressBar/ProgressBar"
import Projects from "./Components/Projects/Projects"

function App() {

  return (
    <>
      <ProgressBar />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
