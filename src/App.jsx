import { Route, Routes } from "react-router-dom";
import Layout from "./pajes/layout/layout";
import Login from "./pajes/login/login";
import Home from "./pajes/home/home";
import Debtor from "./pajes/debtor/debtor";
import ProtectedLayout from "./pajes/layout/protectedLyout";




export default function App() {
  



  return(<>
  
  
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route path="home" element={<Home/>}/>
      <Route index element={<Login/>}/>
      <Route path="debtor" element={<Debtor/>}/>
    </Route>
  </Routes>

{/* 
  <Routes>
    <Route path="/" element={<ProtectedLayout/>}>
      <Route index element={<Login/>}/>
    </Route>
  </Routes> */}
  </>)
}