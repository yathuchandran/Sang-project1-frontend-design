import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Routing from './Routes/Routing'

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/*" element={<Routing />} />
      </Routes>
    </Router>

   
  )
}

export default App
