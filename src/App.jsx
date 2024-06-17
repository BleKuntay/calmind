import './App.css'
import Home from './pages/Home'
import TalkMind from './pages/TalkMind'
import Motivation from './pages/Motivation'
import TalkTherapy from './pages/TalkTherapy'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='relative z-0'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/talk-mind" element={<TalkMind />} />
            <Route path="/motivation" element={<Motivation />} />
            <Route path="/talk-therapy" element={<TalkTherapy />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
