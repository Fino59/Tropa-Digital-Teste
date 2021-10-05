import styled from "styled-components";
import paisage from '../../assets/images/image-ref.png';

const DivCard = styled.div`
    width: 500px;
    height: 230px;
    background: #fff;
`;

function Card() {
    return (        
        <DivCard>
            <img src={paisage} alt="Paisagem Mar com mulher" />
        </DivCard>
    );
}

export default Card;