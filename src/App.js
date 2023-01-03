import Apropos from './components/Apropos'
import Navbar from './components/Navbar'
import Projets from './components/Projets'
import Contact from './components/Contact'
import Outils from './components/Outils'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Apropos />
      <Projets />
      <Outils />
      <Contact />
    </div>
  )
}

export default App
