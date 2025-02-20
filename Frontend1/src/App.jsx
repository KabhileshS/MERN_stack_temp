import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import Gallery from "./components/FunctionalComponents/Gallery";
import Contact from "./components/FunctionalComponents/Contact";
import Login from "./components/FunctionalComponents/Login";
import Signup from "./components/FunctionalComponents/Signup";
import Navbar from "./components/FunctionalComponents/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ClassCompEg from "./components/ClassComponents/ClassCompEG";
import UseEffect from "./components/FunctionalComponents/Hooks/UseEffect";
import UseState from "./components/FunctionalComponents/Hooks/UseState";
import UseEffectAPI from "./components/FunctionalComponents/Hooks/UseEffectAPI";
import UseRef from "./components/FunctionalComponents/Hooks/UseRef";
import UseMemo from "./components/FunctionalComponents/Hooks/UseMemo";

function App() {
  return (
    <>
      <div>
        <main>
          <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home properties="Hello, " sjit="SJIT" welcome="welcome" />} />
              <Route path='/about' element={<About/>} />
              <Route path='/gallery' element={<Gallery/>} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login'element={<Login/>}  />
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/use-effect' element={<UseEffect/>} />
              <Route path='/use-state' element={<UseState/>} />
              <Route path="/use-effect-api" element={ <UseEffectAPI/> } />
              <Route path="/use-ref" element={<UseRef/>} />
              <Route path="/use-memo" element={<UseMemo/>} />
            </Routes>
          </BrowserRouter>
        </main>
        {/* <h1>Welcome to React</h1> */}
        {/* <ClassCompEg /> */}
        {/* <hr />
        <Home properties="Hello, " sjit="SJIT" welcome="welcome" />
        <hr />
        <About />
        <hr />
        <Gallery />
        <hr />
        <Contact />
        <hr />
        <Login />
        <hr />
        <Signup />
        <hr /> */}
      </div>
    </>
  );
}

export default App;
