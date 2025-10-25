import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState('');
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass);

  }, [length, number, char, setPassword])

    const passwordRef = useRef(null);

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
    

  useEffect(()=> {
    passwordGenerator()
  }, [length, number, char, passwordGenerator])
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-10 px-4 py-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-2xl'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden m-4'>
          <input 
          type="text" 
          value={password}
          className="outLine-none bg-white w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}/>
          <button
          className='bg-blue-600 hover:bg-blue-800 text-white rounded-lg px-4 py-2 mx-4 outline-none shrink-0'
          onClick={copyToClipboard}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer' 
            onChange={(e)=> {setLength(e.target.value)}}/>
            <label>Length={length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={(e)=> {setNumber((prev)=> !prev)}
            } />
            <label >Numbers</label>
          </div>

           <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={char}
            id="charInput"
            onChange={(e)=> {setChar((prev)=> !prev)}
            } />
            <label >Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
