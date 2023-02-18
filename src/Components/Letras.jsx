// (conjunto de botões com as letras)
import styled from "styled-components";

export const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras(props){
    const {select, setSelect, compare, cont, contErrors} = props;

    function selectedLetter(letra){
        if(cont < 6){
            setSelect([...select, letra]);
            console.log(letra)
        }else{
            setSelect(alfabeto)
        }
    }

    return (
        <Keyboard>
            {alfabeto.map((letra) => 
                <Button 
                    key={letra} 
                    disabled={select.includes(letra) ? 'disabled' : ''} 
                    onClick={() => {selectedLetter(letra); compare(letra); contErrors(letra)}}
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

const Button = styled.button`
        width: 40px;
        height: 40px;
        border: 1px solid #7AA7C7;
        border-radius: 3px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

        display: flex;
        justify-content: center;
        align-items: center;
`;