import { Routes, Route, BrowserRouter } from "react-router-dom"

import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import { Home } from "./pages/Home"

import ScrollToTop from "./ScrollToTop"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
