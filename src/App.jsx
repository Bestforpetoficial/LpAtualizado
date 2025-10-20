import { useState } from "react"
import Header from "./componentes/Header"
import Footer from "./componentes/Footer";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Calculo from "./pages/Calculo";
import Beneficio from "./pages/Beneficio";
import Midia from "./pages/Midia";
import Depoimento from "./pages/Depoimento";

function App() {
 
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);

  const values={
    setisHeaderFooterShow,
    isHeaderFooterShow
  }

  return(
    <BrowserRouter>
      {
        isHeaderFooterShow === true && <Header />
      }
        <Routes>
          <Route path="/" exact={true} element={<Home/>} />
          <Route path="/Calculo" exact={true} element={<Calculo/>} />
          <Route path="/Beneficio" exact={true} element={<Beneficio/>} />
          <Route path="/Midia" exact={true} element={<Midia/>} />
          <Route path="/Depoimento" exact={true} element={<Depoimento/>} />
        </Routes>
        {
          isHeaderFooterShow === true &&  <Footer/>
        }
    </BrowserRouter>
  )
  
}

export default App
