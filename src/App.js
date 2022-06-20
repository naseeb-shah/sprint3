import "./App.css";
import Home from "./pages/Home";
import Login  from "./pages/Login";
import {BrowserRouter,Routes,Route,Redirect } from "react-router-dom"
import Navbar from "./components/Navbar";
import Products from "./components/Products";
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>

        
<Route path="Login" element={<Login/>} />
<Route index element={<Home />} />

<Route  path="Products" element={<Products/>} />
        </Route>
    </Routes>
    </BrowserRouter>
  ) 
  
}

export default App;
