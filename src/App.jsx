import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Navbar } from "./components/NavBar/Navbar";
import { About, Home, Experience, Contact } from './components/pages';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/experience" element={<Experience/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App
