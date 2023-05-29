import { useState } from 'react'
import Navigation from './views/navigation'
import CTA from './views/cta'
import Projects from './views/projects'
import Skills from './views/skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <CTA />
      <Skills />
      <Projects />
    </>
  )
}

export default App
