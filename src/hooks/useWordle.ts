import { useState } from "react";

export  interface letters{
    key: string;
    color: string;
}

export interface Key{
  [key: string]:string
}

const useWordle = (solution:string) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)] as letters[] | undefined);
  const [history, setHistory] = useState([] as string[]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState([] as Key[]);
  const formatGuess = () => {
      let solutionArray:string[]=[...solution];
      let formatGuess=[...currentGuess]
      .map((l)=>{
          return {key:l,color:"grey"}
      });
    //green
      formatGuess.forEach((l,i)=>{
          if(solutionArray[i]===l.key){
            l.color="green"
            solutionArray[i]="null"
          }
          // hello paper
          //hnnlo blame least
          if(solutionArray.includes(l.key) && l.color!=="green"){
            l.color="yellow"
            // solutionArray[solutionArray.indexOf(l.key)]="null"
          }
        })
        return formatGuess;
  };

  const addNewGuess = (formattedLetter:letters[]) => {
      if(currentGuess===solution){
          setIsCorrect(true);
          console.log("Yay!! you guessed the word");
      }
      setGuesses((prev)=>{
          //@ts-ignore
          let newGuess=[...prev];
          newGuess[turn]=formattedLetter;
          return newGuess;
      })
      setHistory(prev=>{
        return [...prev,currentGuess]
      })
      setTurn(prev=>prev+1);
      setUsedKeys(prevUsedKeys => {
        formattedLetter.forEach(l => {
           //@ts-ignore
          const currentColor = prevUsedKeys[l.key]
  
          if (l.color === 'green') {
            //@ts-ignore
            prevUsedKeys[l.key ] = 'green'
            return
          }
          if (l.color === 'yellow' && currentColor!== 'green') {
             //@ts-ignore
            prevUsedKeys[l.key] = 'yellow'
            return
          }
          if (l.color === 'grey' && currentColor !== ('green' || 'yellow')) {
             //@ts-ignore
            prevUsedKeys[l.key] = 'grey'
            return
          }
        })
  
        return prevUsedKeys
      })
      setCurrentGuess("");

  };

  const handleKeyUp = (e:KeyboardEvent) => {
      if(e.key==="Enter"){
        if(turn>5){
            console.log("You've used all your guesses");
            return
        }
        if(history.includes(currentGuess)){
            console.log("You've already guessed that word");
            return;
        }
        if(currentGuess.length !== 5){
            console.log("Word must be 5 characters long");
            return;
        }
        const formattedLetter=formatGuess();
        addNewGuess(formattedLetter);
      }
      if(e.key==="Backspace"){
          setCurrentGuess(prev=>{
              return prev.slice(0,-1)
          })
          return;
      }
      if(/^[a-zA-z]$/.test(e.key)){
          if(currentGuess.length<5){
            setCurrentGuess(prev=>{
                return (prev + e.key).toLowerCase();
            })
          }
      }
  };

  return {turn,currentGuess,guesses,isCorrect,handleKeyUp,usedKeys}
};
export default useWordle;
