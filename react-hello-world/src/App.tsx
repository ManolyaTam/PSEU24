import './App.css';
import Home from './pages/home/home';
import { BrowserRouter, Routes, Route } from "react-router"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<div>login</div>} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;