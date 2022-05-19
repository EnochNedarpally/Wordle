import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState("");
  useEffect(()=>{
    fetch(" http://localhost:3001/solutions")
    .then(res=>res.json())
    .then(data=>{
    //Generate random number between 0 and 14
    const randomNum = Math.floor(Math.random()*data.length);
   setSolution(data[randomNum].word);
    });
  },[])
  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution}/>}
    </div>
  );
}

export default App;
