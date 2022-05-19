import React from 'react'

type iProps={
    isCorrect:boolean,
    turn:number,
    solution:string,
}
const Modal = ({isCorrect,turn,solution}:iProps) => {
    if(isCorrect){
        return(
            <div className='modal'>
                <div>
                <h1>Yay !! you've guessed the word</h1>
                <p className="solution">Solution: {solution}</p>
                </div>
            </div>
        )
    }
  return (
    <div className='modal'>
            <div>
                <h1>Nevermind better luck next time</h1>
                <p className="solution">Solution: {solution}</p>
            </div>
    </div>
  )
}

export default Modal