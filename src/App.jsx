import { useEffect, useState } from "react";
import CopyText from "./Components/CopyText"
import Properties from "./Components/Properties"

function App() {
  const [length, setLength] = useState(8); 
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState();
  const [copy, setCopy] = useState('copy');
  const passwordGenerator = () => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    if(numAllowed)  str += "0123456789";
    if(charAllowed)  str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    for(let i = 1 ; i <= length; ++i)
    {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str[char];
    }
    setPassword(pass);
    setCopy('copy');
  }
  useEffect(() => {
    passwordGenerator();

  }, [length, numAllowed, charAllowed])

  const copyClipBoard = () => {
    window.navigator.clipboard.writeText(password);
    if(copy === 'copy')
    {
      setCopy('copied');
    }
  }
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center ">
      <div className="w-full h-40 bg-slate-400 mx-80 rounded-md flex flex-col px-10 py-5">
        <CopyText password = {password} copyClipBoard = {copyClipBoard} copy = {copy} setCopy = {setCopy}/>
        <Properties setLength = {setLength} length = {length} numAllowed = {numAllowed} setNumAllowed = {setNumAllowed} charAllowed = {charAllowed}  
        setcharAllowed = {setcharAllowed} 
        />
      </div>
    </div>
  )
}

export default App
