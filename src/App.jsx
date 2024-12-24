
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Movies from './pages/movies'
import Recommend from './pages/recommendation'
import Widgets from './pages/widgets'


function App() {
 

  return (
    <BrowserRouter>
         <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/widgets" element={<Widgets/>} />
              <Route path="/recommendation" element={<Recommend />} />
         </Routes>
    </BrowserRouter>
  )
}

export default App
