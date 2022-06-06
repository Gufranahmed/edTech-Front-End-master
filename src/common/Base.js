import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home'
import About from '../components/About';
import Signin from '../components/Signin'
import Signup from '../components/Signup'
import AddTutorial from "../components/AddTutorial";
import Tutorial from "../components/Tutorial";
import TutorialsList from "../components/TutorialsList";


const Base = () => {
    return (
        <main>
            
                
                <section>
                    <Routes>
                    {/* Home */}
                    <Route path="/" element={<Home/>}></Route>
                        <Route path="/home" element={<Home/>}></Route>

                        {/* About-Us */}
                        <Route path='/about-us' element={<About />}></Route>

                        {/* Private route example */}
                        {/* <Route exact path={["/", "/tutorials"]} element={TutorialsList} /> */}
          <Route path={"/tutorials"} element={<TutorialsList/>} />
          <Route exact path="/add" element={<AddTutorial/>} />

          {/* <Route path="/tutorials/:id" element={Tutorial} /> */}
          <Route path="/tutorials/:id" element={<Tutorial/>} />

          {/* <Route path="/profile" element={<Profile/>}></Route> */}
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
                    </Routes>
                </section>
            
        </main>
   )
}

export default Base;