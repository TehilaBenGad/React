import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Father from './components/Father';
import PersonDetails from './components/PersonDetails'
import BooksTable from './components/BooksTable'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundColor: 'pink' , padding: '10px' }}>
    <text style={{ color: 'white' }}>HomeWork1:</text>
     <Father/>
     <h1></h1>
     <text style={{ color: 'white' }}>HomeWork2:</text>
     <PersonDetails/>
     <h1></h1>
    <text style={{ color: 'white' }}>HomeWork3:</text>
     <BooksTable/>
  </div>
  )
}

export default App
