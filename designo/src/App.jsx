import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home from "./Components/Home/Index"
import WebDesign from "./Components/Web Design/Index"


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}/>
          <Route path="/webdesign" element={<WebDesign />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
