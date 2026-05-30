import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import CPStats from './components/CPStats.tsx'
import Projects from './components/Projects.tsx'
import Skills from './components/Skills.tsx'
import Contact from './components/Contact.tsx'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CPStats />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Nur Mohammad. Built with ❤️ for my best friend.</p>
      </footer>
    </div>
  )
}

export default App
