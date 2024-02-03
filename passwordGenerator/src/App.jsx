import { useCallback, useState, useEffect, useRef } from "react"


function App() {
  const[length, setLength] = useState(8);
  const[numberAllowed, setNumber] = useState(false);
  const[charAllowed, setChar] = useState(false);
  const[password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let password =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) {
      str +=  "0123456789";
    }
    if(charAllowed) {
      str +=   "!@#$%^&*()_+{}|:<>?</>";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      password += str.charAt(char)
    }

    setPassword(password)
  }
  ,[length, numberAllowed, charAllowed, setPassword])

  const passwordRef = useRef(null)
  const copypasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5) - selects upto to the desired range 
    window.navigator.clipboard.writeText(password)
  }
  ,[password])
  
  useEffect( ()=> {
    passwordGenerator()
  }
  ,[length, numberAllowed, charAllowed, passwordGenerator])

  return (
  <div className="w-full max-w-md mx-auto shadow-sm rounded-lg px-4 my-8 text-orange-500 bg-gray-700" >
    <h1 className=" text-white text-center my-3 ">Password Generator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4" >
      <input
      type="text"
      value={password}
      className=" outline-none w-full py-1 px-3"
      placeholder="Password"
      ref={passwordRef
      }
      readOnly
      ></input>
      <button
       onClick={copypasswordToClipboard}
       className="outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0" >copy</button>
     </div> 
     <div className="flex text-sm gap-x-2" >

        <div className="flex items-center gap-x-1" >
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label className=" text-bold" >Length: {length}</label>
        </div>

        <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput" >Numbers</label>
        </div>

        <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setChar((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput" >Characters</label>
        </div>
    
      </div>
  </div>
  )
}

export default App
