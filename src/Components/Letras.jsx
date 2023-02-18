// (conjunto de botões com as letras)
import styled from "styled-components";


export const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras(props){
    const {word, select, setSelect, compare, cont, count, setCount, contErrors, setChute} = props;

    function selectedLetter(letra){
        if(cont < 5){
            const newArray = [...select]
            setSelect([...newArray, letra]);
        }else{
            setSelect(alfabeto)
            setChute("disabled")
        }
    }

    function finish(letra){
        let inc = 0
        for(let i = 0; i < word.length; i++){
            if(letra === word[i].normalize("NFD").replace(/[\u0300-\u036f]/g, '')) inc++ 
        }
        const newInc = count + inc;
        setCount(newInc);

        if((newInc === word.length) && (cont < 6)){
            setSelect(alfabeto)
            setChute("disabled")
        }
    }

    return (
        <Keyboard>
            {alfabeto.map((letra) => 
                <Button 
                    key={letra} 
                    disabled={select.includes(letra) ? true : false} 
                    onClick={() => {selectedLetter(letra);
                                    compare(letra); 
                                    contErrors(letra); 
                                    finish(letra);
                                }}
                    data-test="letter"
                >
                    {letra}
                </Button>
            )}
        </Keyboard>
    );
}


const Keyboard = styled.section`
        width: 690px;
        height: 100px;
        margin: auto;

        display: flex;
        flex-wrap: wrap;
        gap: 12px;
`;

let Button = styled.button`
    width: 40px;
    height: 40px;
    color: #39739D;
    background: #E1ECF4;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    display: flex;
    justify-content: center;
    align-items: center;
`;
