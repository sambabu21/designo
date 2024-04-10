import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home from "./Components/Home/Index"
import WebDesign from "./Components/Web Design/Index"
import AppDesign from "./Components/App Design/Index"
import GraphicDesign from "./Components/Graphic Design/Index"
import AboutUs from "./Components/Company/Index"
import Locations from "./Components/Location/Index"


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}/>
          <Route path="/webdesign" element={<WebDesign />}/>
          <Route path="/appdesign" element={<AppDesign />}/>
          <Route path="/graphicdesign" element={<GraphicDesign />}/>
          <Route path="/company" element={<AboutUs />}/>
          <Route path="/locations" element={<Locations />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
