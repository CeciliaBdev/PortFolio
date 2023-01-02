import Apropos from './components/Apropos'
import Navbar from './components/Navbar'
import Projets from './components/Projets'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Apropos />
      <Projets />
      <Contact />
    </div>
  )
}

export default App
