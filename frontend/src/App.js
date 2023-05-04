import "./App.scss";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios'
const App = () => {
  useEffect(()=>{
    fetchApi()
  },[])
  const fetchApi= async ()=>{
    const res=await axios.get(`http://localhost:5000/api/v1/userlist`)
    console.log(res)
  }
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidebar-container"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
