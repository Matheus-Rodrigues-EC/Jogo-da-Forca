import styled from "styled-components";

export default function Jogo(props){
    const {word, setWord, image, cont, count, select} = props; 

    return (
        <LocateImage>
            <Button onClick={setWord} data-test="choose-word">Escolher Palavra</Button>
                {cont < 7 ? count === word.length ? 
                    <WordRight data-test="word">
                        {word}
                    </WordRight>
                    :
                    <Word className="black" data-test="word">
                        {word.split("").map((letra) => {
                            return select.includes(letra) ? letra : "_"
                        })}
                    </Word>
                    :
                    <WordError data-test="word">
                        {word}
                    </WordError>
                    }
            <Image src={image} alt="" data-test="game-image"/>
        </LocateImage>
    )
}

const LocateImage = styled.section`
        width: 400px;
        height: 467px;
        margin: 59px auto 70px 38px;
`;

const Image = styled.img`
        width: 100%;
`;

const Button = styled.button`
        position: absolute;
        top: 89px;
        right: 53px;

        width: 200px;
        height: 60px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        background: #27AE60;
        border-radius: 8px;
        color: #FFFFFF;
`;

const Word = styled.section`
        position: absolute;
        top: 431px;
        right: 61px;

        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 68px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 10px;

        color: #000000;
`;

const WordError = styled.section`
    position: absolute;
        top: 431px;
        right: 61px;

        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 68px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 10px;

        color: #ff0000;
`

const WordRight = styled.section`
    position: absolute;
        top: 431px;
        right: 61px;

        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 68px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 10px;

        color: #00ff3c;
`