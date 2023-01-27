import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

import Add from "./components/Add";
import Update from "./components/Update";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="animate-pulse text-red-800">Only for desktop</div>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
           
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
          </Route>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />

        </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
