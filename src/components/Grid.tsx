import React from 'react'
import { letters } from '../hooks/useWordle'
import Row from './Row'

type iProps={
  guesses:letters[] | undefined,
  turn:number,
  currentGuess:string
}
const Grid = ({guesses,turn,currentGuess}:iProps) => {
  return (
    <div>
      {guesses?.map((guess:any,i)=>{
        if(turn===i) return <Row guess={guess} key={i} currentGuess={currentGuess}/>
        //@ts-ignore
        return <Row guess={guess} key={i}/>
      }
      )}
    </div>
  )
}

export default Grid