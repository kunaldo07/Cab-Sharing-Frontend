
import  { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {useState} from "react";
import Topbar from './components/topbar/Topbar';
import Addbox from './components/addbox/Addbox';
import Details from './components/details/Details';
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import { UserAuthContextProvider } from "./context/UserAuthContext";

import { useUserAuth } from './context/UserAuthContext';
import Login from "./components/login/Login";

//here we used protectedRoute to make sure that the user is present


function App() {

  const [home,setHome] = useState(true);
  const [editing,setEditing] = useState(true);

  
  return (
        <div className="app">
              <UserAuthContextProvider>
                <Routes>
                  <Route
                     path="/home"
                    element={
                      <ProtectedRoute>
                          <Topbar/>
                          <Addbox home={home}/>
                          <Details home={home}/>
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/" element={<Login />} />
                  <Route path="/myposts" element={
                    <>
                      <Topbar/>
                      <Addbox/>
                      <Details editing={editing}/>
                    </>
                  } />
                </Routes>
              </UserAuthContextProvider>
        </div>
  );
}

export default App;

