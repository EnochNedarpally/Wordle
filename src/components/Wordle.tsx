import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

type iProps={
  solution:string
}
// KeyboardEventS
const Wordle = ({solution}:iProps) => {
  const [open, setOpen] = useState(false)
const {handleKeyUp,currentGuess,turn,isCorrect,guesses,usedKeys} = useWordle(solution);

  useEffect(()=>{

    window.addEventListener('keyup',handleKeyUp)  

    if(isCorrect || turn >5){
      setOpen(true);
      return () => window.removeEventListener('keyup',handleKeyUp)  
    }

    return () => window.removeEventListener('keyup',handleKeyUp)  

  },[handleKeyUp,isCorrect,turn])
  return(
    <div>
    <div>Solution: </div>
    <div>Current Guess: {currentGuess}</div>
    <Grid guesses={guesses} turn={turn} currentGuess={currentGuess} />
    <Keypad usedKeys={usedKeys}/>
    {open && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
    </div>
  )
 
}

export default Wordle