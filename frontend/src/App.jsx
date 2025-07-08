import { Routes, Route } from "react-router-dom"
import Zangetsu from "./pages/zangetsu"
import './App.css'

function App() {
  return (

    <Routes>
      <Route path="/" element={<Zangetsu />} />
    </Routes>
  )
}

export default App
