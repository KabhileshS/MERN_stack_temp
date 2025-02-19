import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import Gallery from "./components/FunctionalComponents/Gallery";
import Contact from "./components/FunctionalComponents/Contact";
import Login from "./components/FunctionalComponents/Login";
import Signup from "./components/FunctionalComponents/Signup";
import Navbar from "./components/FunctionalComponents/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ClassCompEg from "./components/ClassComponents/ClassCompEG";

function App() {
  return (
    <>
      <div>
        <main>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home properties="Hello, " sjit="SJIT" welcome="welcome" />} />
              <Route path='/about' element={<About/>} />
              <Route path='/gallery' element={<Gallery/>} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/signup' element={<Signup/>}/>
            </Routes>
          </BrowserRouter>
        </main>
        <h1>Welcome to React</h1>
        <Navbar />
        {/* <ClassCompEg /> */}
        <hr />
        {/* <Home properties="Hello, " sjit="SJIT" welcome="welcome" />
        <hr />
        <About />
        <hr />
        <Gallery />
        <hr />
        <Contact />
        <hr />
        <Login />
        <hr /> */}
        <Signup />
        <hr />
      </div>
    </>
  );
}

export default App;
