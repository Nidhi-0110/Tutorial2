import Home from "./components/Home"
import About from "./components/About"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
       <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About />}/>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App