import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AtAGlanceSection } from './components/AtAGlanceSection'
import { MapArea } from './components/MapArea'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <MapArea />
        <p>Hello Vite + React!</p>
        <p>
          <AtAGlanceSection />
        </p>

      </header>
    </div>
  )
}

export default App
