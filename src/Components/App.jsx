import Palavras from "../palavras";
import Letras from "./Letras";
import Jogo from "./Jogo";


function App() {
  return (
    <div className="App">
      <Jogo palavra={randonWord()}/>
      <Letras/>
    </div>
  );
}

function randonWord(){
  let word = Math.floor(Math.random() * Palavras.length);
  return Palavras[word];
}

export default App;
