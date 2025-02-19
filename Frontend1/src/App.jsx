import Home from './components/FunctionalComponents/Home'
import About from './components/FunctionalComponents/About'
import Gallery from './components/FunctionalComponents/Gallery'
import Contact from './components/FunctionalComponents/Contact'
import Signup from './components/FunctionalComponents/Signup'
import ClassCompEg from './components/ClassComponents/ClassCompEG'

function App() {
  return (
    <>
    <div>
        <h1>Welcome to React</h1>
        <hr />
        <Home/>
        <hr />
        <About/>
        <hr />
        <Gallery/>
        <hr />
        <Contact/>
        <hr />
        <Signup />
        <hr />
    </div>
    </>
  )
}

export default App
