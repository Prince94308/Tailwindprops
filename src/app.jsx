import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Card from './components/Card'

export function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    username:"prince",
    age:20
  }
  let newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-red-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="chaiorcode"/>
      <Card username="prince  kumar"/>
    </>
  )
}
