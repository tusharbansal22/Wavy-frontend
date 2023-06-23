import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Intro from "./components/Intro";
import Dashboard from "./components/Dashboard";
import Event from "./components/Event";
function App() {
  return (
    <div className="w-screen h-screen bg-slate-800 py-4 px-3">
      <div className="max-w-xl h-full bg-slate-900 mx-auto  flex flex-col justify-between rounded-3xl py-20 px-10 ">
      <Header/>
      <Router>
      <Routes>
        <Route exact path='/login' element={<Login />}> </Route>
        <Route exact path='/register' element={<Register />}>   </Route>
        <Route exact path='/dashboard' element={<Dashboard />}>   </Route>
        <Route exact path='/event/:eventName' element={<Event />}>   </Route>
        <Route exact path='/' element={<Intro />}> </Route>

      </Routes>
      </Router>
      
     
      <Footer />
  
        
      </div>
    </div>
  );
}

export default App;
