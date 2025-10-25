import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="bg-green-400 py-2 px-4 rounded-xl text-black">Tailwind test</h1>
     <Card username="Summer" text="Ice-Cream" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPnWdTfPSRp3SoH8sO_DJB_EqGs4kD4VyjQ&s"/>
      <Card username="Winter" text="Hot Soup" imgUrl="https://img.freepik.com/free-photo/breathtaking-view-forest-covered-with-snow-sunset-norway_181624-37864.jpg?semt=ais_hybrid&w=740&q=80"/>
    </>
  )
}

export default App
