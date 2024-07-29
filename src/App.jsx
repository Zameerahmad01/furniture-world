
import './App.css'
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
    </main>
    </>
  )
}

export default App
