import Palavras from "../palavras";
import Letras, {alfabeto} from "./Letras";
import Jogo from "./Jogo";
import { useState } from "react";


function App() {
  const [word, setWord] = useState();
  const [select, setSelect] = useState([...alfabeto]);

  function randonWord(){
    let locate = Math.floor(Math.random() * Palavras.length);
    let wordArray = [];
    let wordArrayHidden = [];
  
    for(let i = 0; i < Palavras[locate].length; i++){
      wordArray.push(Palavras[locate][i]);
      wordArrayHidden.push('_');
    }
    setSelect([]);
    console.log(wordArray)
    return wordArrayHidden;
  }

  return (
    <div className="App">
      <Jogo palavra={word} 
            choice={() => {
                setWord(randonWord());
                setSelect([]);
              }
        }/>
      <Letras select={select} setSelect={setSelect}/>
    </div>
  );
}




export default App;
