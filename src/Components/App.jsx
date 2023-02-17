import Palavras from "../palavras";
import Letras, {alfabeto} from "./Letras";
import Jogo from "./Jogo";
import { useState } from "react";


function App() {
  const [word, setWord] = useState();
  const [select, setSelect] = useState([...alfabeto]);

  let wordArray = [];
  let wordArrayHidden = [];
  let Answer = {
                  wordArray,
                  wordArrayHidden
                };
  function randonWord(){
    let locate = Math.floor(Math.random() * Palavras.length);
  
    for(let i = 0; i < Palavras[locate].length; i++){
      wordArray.push(Palavras[locate][i]);
      wordArrayHidden.push('_');
    }
    Answer = {
      wordArray,
      wordArrayHidden
    };
    return Answer;
  }

  function RevelWord(){
    randonWord();
    let Word = Answer.wordArray
    let Hidden = Answer.wordArrayHidden
    let Result = [];
    for(let i = 0; i < Hidden.length; i++){
      
      // Result = Word.map((letra) => {
      //   if(Word.includes(letra)){
      //     Result.push(letra);
      //   }else{
      //     Result.push("_")
      //   }
          
      // })
      
      if(Word[i] === select.includes[i]){
        Result.push(Word[i]);
      }else{
        Result.push(Hidden[i]);
      }
    }
    console.log(Result);
    return Result;
}

  return (
    <div className="App">
      <Jogo word={word} 
            setWord={() => {setWord(RevelWord()); setSelect([])}
        }/>
      <Letras select={select} setSelect={setSelect}/>
    </div>
  );
}




export default App;
