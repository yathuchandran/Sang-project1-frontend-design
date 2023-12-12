import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Routing from './Routes/Routing'
import User2Rout from './Routes/User2Rout'
import User3Rout from './Routes/User3Rout'

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/*" element={<Routing />} />
        <Route path="/user2/*" element={<User2Rout />} />
        <Route path="/user3/*" element={<User3Rout />} />

      </Routes>
    </Router>

   
  )
}

export default App
