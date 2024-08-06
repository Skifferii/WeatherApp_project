import { BrowserRouter } from "react-router-dom"
import Menu from "./pages/WeatherApp/Menu"
import { Routes, Route} from "react-router-dom"
import History from "./pages/WeatherApp/compponents/History/History"
import Home from "./pages/WeatherApp/compponents/Home/Home"


const App = () => {
  return (
   < BrowserRouter>
      <Menu/>
      <Routes>        
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
      
    
    
    
  )
}

export default App
