import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', fontFamily: 'Inter, sans-serif' }}>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
