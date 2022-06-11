import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AtAGlanceSection } from './components/AtAGlanceSection'
import { Map } from './components/Map'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Map />
        <p>Hello Vite + React!</p>
        <p>
          <AtAGlanceSection />
        </p>

      </header>
    </div>
  )
}

export default App
