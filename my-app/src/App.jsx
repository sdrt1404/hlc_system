import { Route, Routes } from "react-router-dom";
import Layout from "./pajes/layout/layout";
import Login from "./pajes/login/login";
import Home from "./pajes/home/home";




export default function App() {
  



  return(<>
  
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
    </Route>
  </Routes>
  
  </>)
}