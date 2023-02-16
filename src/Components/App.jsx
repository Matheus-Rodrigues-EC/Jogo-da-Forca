import Palavras from "../palavras";
import Letras from "./Letras";
import Jogo from "./Jogo";
import { useState } from "react";


function App() {
  const [word, setWord] = useState();
  const [status, setStatus] = useState('disabled');
  return (
    <div className="App">
      <Jogo palavra={word} func={() => {
          setWord(randonWord());
        }}/>
      <Letras status={status} func={() => {setStatus();}}/>
    </div>
  );
}

export function randonWord(){
  let locate = Math.floor(Math.random() * Palavras.length);
  let wordArray = [];
  let wordArrayHidden = [];

  for(let i = 0; i < Palavras[locate].length; i++){
    wordArray.push(Palavras[locate][i]);
    wordArrayHidden.push('_');
  }
  console.log(wordArray)
  return wordArrayHidden;
}

// function compareIndex(letra){
//   for(let i = 0; i < wordArray.length; i++){
//     if(wordArray[i] === letra){
//       console.log('Igual');
//     }else{
//       console.log('Diferente')
//     }
//   }
// }

export default App;
