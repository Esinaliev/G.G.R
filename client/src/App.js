import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import './pages/style.css'

function App() {
  const router = useRoutes(false)
  return (
    <Router>
        {router}
    </Router>
  )
}

export default App;
