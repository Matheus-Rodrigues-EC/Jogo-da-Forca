import Palavras from "../palavras";
import Letras, {alfabeto} from "./Letras";
import Jogo from "./Jogo";
import Chute from "./Chute";
import { useState } from "react";


let Answer;
function App() {

  const images = ["assets/forca0.png",
                "assets/forca1.png",
                "assets/forca2.png",
                "assets/forca3.png",
                "assets/forca4.png",
                "assets/forca5.png",
                "assets/forca6.png"];

  const [word, setWord] = useState("");
  const [select, setSelect] = useState([...alfabeto]);
  const [cont, setCont] = useState(0)
  const [count, setCount] = useState(0)
  const [image, setImage] = useState(images[0]);
  const [chute, setChute] = useState('disabled');
  const [tentativa, setTentativa] = useState("");

  function randonWord(){
    let locate = Math.floor(Math.random() * Palavras.length);
      
    setCont(0);
    setCount(0);
    setImage(images[0]);
    Answer = Palavras[locate];
    setChute(true);
    setTentativa("");
    return Answer;
  }
  console.log(word);

  function compare(letra){
    if(Answer.includes(letra)){
      return(Answer);
    }
  }

  function contErrors(letra){
    if(!Answer.normalize("NFD").replace(/[\u0300-\u036f]/g, '').includes(letra)){
      const newCont = cont + 1;
      setCont(newCont)
      setImage(images[newCont])
    }
    if(cont >= 6) setCont(0)
  }

  return (
    <div className="App">
      <Jogo word={word} 
            setWord={() => {setWord(randonWord(), compare()); setSelect([]);}}
            image={image}
            cont={cont}
            count={count}
            select={select}
            />
      <Letras word={word}
              select={select} 
              setSelect={setSelect} 
              compare={compare}
              cont={cont}
              count={count}
              setCount={setCount}
              contErrors={contErrors}
              setChute={setChute}
              />
      <Chute  chute={chute}
              setChute={setChute}
              word={word}
              image={image}
              setImage={setImage}
              setCount={setCount}
              setCont={setCont}
              tentativa={tentativa}
              setTentativa={setTentativa}
              setSelect={setSelect}
              />
    </div>
  );
}
export default App;