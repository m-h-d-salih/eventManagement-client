import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventDashboard from './components/EventDaashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <EventDashboard/>
    </>
  )
}

export default App
