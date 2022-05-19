import React, { useEffect, useState } from 'react'
import { Key } from '../hooks/useWordle'


interface LetterObj{
    key:string
}
type iProps={
    usedKeys:Key[]
}
const Keypad = ({usedKeys}:iProps) => {
    const [letters, setLetters] = useState([] as LetterObj[]);
    useEffect(()=>{
        fetch(" http://localhost:3001/letters")
        .then(res=>res.json())
        .then(data=>setLetters(data));
    },[])
  return (
    <div className='keypad'>
        {letters?.map((letter)=>{
            //@ts-ignore
            const color=usedKeys[letter.key];
            return <div key={letter.key} className={color}>{letter.key} </div>
        }
        )}
    </div>
  )
}

export default Keypad