import { useState } from 'react'
import Navbar from './Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <main>
          <div className="row">
            <div className="col">

            </div>
            <div className="col">

            </div>
            <div className="col">

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
