import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Members from './pages/Members'
import ProjectsCollaborators from './pages/ProjectsCollaborators'
import ReliefHumanitarian from './pages/ReliefHumanitarian'
import Gallery from './pages/Gallery'
import ChildMarriageNepal from './pages/ChildMarriageNepal'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/projects" element={<ProjectsCollaborators />} />
          <Route path="/relief" element={<ReliefHumanitarian />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/child-marriage-in-nepal" element={<ChildMarriageNepal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
