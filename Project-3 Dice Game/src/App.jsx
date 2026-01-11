import { useState } from 'react'
import './App.css'
import StartPage from './components/StartPage'
import GamePlay from './components/GamePlay'

function App() {
  const [isGameSt, setIsGameSt] = useState(false)
  const toggleGamePlay = () => {
    setIsGameSt(prev => !prev)
  }
  return (
    <>{!isGameSt ? <StartPage toggle={toggleGamePlay} /> : <GamePlay />}</>
  )
}

export default App
