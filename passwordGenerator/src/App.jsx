import { useCallback, useState } from "react"


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
    for (let i = 0; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      password = str.charAt(char)
    }

    setPassword(password)
  }
  ,[setLength, setNumber, setChar, setPassword])

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export default App
