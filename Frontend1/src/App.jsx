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
import UseCallback from "./components/FunctionalComponents/Hooks/UseCallback";
import UseMemoize from "./components/FunctionalComponents/Hooks/UseMemoize";
import HoC from "./components/FunctionalComponents/HoC/HoC";
import Memo from "./components/FunctionalComponents/Memoization/Memo";
import LazyLoadingAndSuspense from "./components/FunctionalComponents/Memoization/LazyLoadingAndSuspense";
// import StudentResults from "./components/FunctionalComponents/ContextAPI/StudentResults";
import CoE from "./components/FunctionalComponents/CoE";
import Footer from "./components/FunctionalComponents/Footer";
import { useState } from "react";

function App() {
  
  return (
    <>
      <div>
        <main>
          <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<><Home properties="Hello, " sjit="SJIT" welcome="welcome" /> <Footer/> </>} />
              <Route path='/about' element={<About/>} />
              <Route path='/gallery' element={<Gallery/>} />
              <Route path='/use-effect' element={<UseEffect/>} />
              <Route path='/use-state' element={<UseState/>} />
              <Route path="/use-effect-api" element={ <UseEffectAPI/> } />
              <Route path="/use-ref" element={<UseRef/>} />
              <Route path="/use-memo" element={<UseMemo/>} />
              <Route path="/use-callback" element={<UseCallback/>} />
              <Route path="/use-memoize" element={<UseMemoize/>} />
              <Route path="/hoc" element={<HoC/>} />
              <Route path="/memo" element={<Memo/>} />
              <Route path="/lazy" element={<LazyLoadingAndSuspense/>} />
              <Route path="/res" element={<CoE/>} />
              {/* <Route path="/coe" element={<CoE sgpa="8 SGPA" cgpa="9 CGPA" />} /> */}
              <Route path='/contact' element={<Contact />} />
              <Route path='/login'element={<Login/>}  />
              <Route path='/signup' element={<Signup/>}/>
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
