
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Work from './components/works/Work'

function App() {


  return (
    <>
    <Header />
    <main>
      <Home />
      <Services />
      <Work />
      <Footer />
    </main>
    </>
  )
}

export default App
