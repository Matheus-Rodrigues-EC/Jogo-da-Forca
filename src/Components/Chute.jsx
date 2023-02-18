import styled from "styled-components"
import { alfabeto } from "./Letras";

export default function Chute(props){
    const {tentativa, setTentativa, chute, setChute, word, setImage, setCount, setCont, setSelect} = props;

    function verifyChute(){
        if(tentativa === word){
            setCount(word.length);
            setChute("disabled");
            setSelect(alfabeto);
        }else{
            setImage("assets/forca6.png");
            setCont(6);
            setChute("disabled");
            setSelect(alfabeto);
            
        }
    }

    return(
        <Section>
            <Text>Já sei a palavra </Text>
            <Entrada disabled={chute==='disabled' ? true : false} onChange={(e) => setTentativa(e.target.value)} data-test="guess-input" value={tentativa} placeholder="Digite seu Chute"/>
            <Button disabled={chute==='disabled' ? true : false}
                    onClick={() => {verifyChute()}}
                    data-test="guess-button"
            >
                Chutar
            </Button>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    margin: 55px auto 55px auto;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

const Text = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
`
const Entrada = styled.input`
    box-sizing: border-box;

    width: 353px;
    height: 40px;

    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    text-align: center;
    color: #000000;
`

const Button = styled.button`
    width: 100px;
    height: 40px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #3C76A1;
`