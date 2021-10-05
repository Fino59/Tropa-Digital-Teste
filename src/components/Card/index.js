import styled from "styled-components";
import paisage from '../../assets/images/image-ref.png';
import lastSeen from '../../assets/images/Frame.png'

const UserName = styled.div`
    display: flex;
    margin: 40px 0 20px 45px;
    .hello {
        color: #a5a5a5;
        font-size: 25px;
        font-family: 'Advent Pro', sans-serif;
        margin: 10px 5px;
    }
    .user {
        color: #959595;
        font-size: 25px;
        font-family: 'Advent Pro', sans-serif;
        font-weight: 700;
        margin: 10px 5px;
    }

    @media (max-width: 599px) {
        margin: 20px 0 20px -25px;
    }

    @media (min-width: 600px) and (max-width: 900px) {
        margin-left: 20px;
    }
`;

const EndSection = styled.div`
    width: 91%;
    margin: 0 0 30px 45px;
    hr {
        border: solid 1px #d9d9d9;
    }
    @media (max-width: 599px) {
        margin-left: -60px;
        width: 100%;
    }

    @media (min-width: 600px) and (max-width: 900px) {
        width: 90%;
        margin-left: 20px;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 40px;

    @media (max-width: 599px) {
        margin-left: -145px;
    }

    @media (min-width: 600px) and (max-width: 900px) {
        margin-left: 20px;
    }

`;

const DivCard = styled.div`
    width: 500px;
    height: 230px;
    background: #fff;
    display: flex;
    flex-direction: column;
    margin: 10px;
    border-radius: 5px;
    transition: ease-in-out 250ms;
    img {
        width: 464px;
        height: 140px;
        margin: 15px 15px 15px 20px;        
    }
    .title-card {
        font-family: 'Advent Pro', sans-serif;
        font-size: 14px;
        font-weight: 700;
        margin: 0 19px 10px;
    }
    .subtitle-card {
        font-family: 'Advent Pro', sans-serif;
        font-size: 12px;
        font-weight: 400;
        margin: 0 19px;
    }&:hover {
        opacity: 0.8;
        cursor: pointer;
    }

    .images {
        position: relative;
    }

    .visual {
        width: 100px;
        height: 30px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        position: absolute;
        top: 25px;
        right: 30px;  

        img {
            width: 25px;
            height: 20px;
            position: absolute;
            top: -10px;
            right: 50px;
        }
        p {
            font-family: 'Advent Pro', sans-serif;
            font-size: 11px;
            color: #fff;
            position: absolute;
            top: -3px;
            right: 15px;
        }
    }

    @media (max-width: 599px) {
        width: 330px;   
        height: 255px;
        margin-left: 5px;
     
        img {
            width: 300px;
            height: 125px;
            margin: 15px;        
        }

        .title-card {
            font-size: 12px;
            font-weight: 700;
            margin: 10px;
        }
        .subtitle-card {
            font-size: 10px;
            font-weight: 400;
            margin: 10px;
        }

        .images {
            width: 200px;
        }

        .visual {
            top: 25px;
            right: -100px;
        }
        
    }

    @media (min-width: 600px) and (max-width: 900px) {
        width: 400px;
        height: 250px;

        img {
            width: 360px;
            height: 130px;
            margin: 15px 15px 15px 20px;        
        }
    }
    
`;

function Card() {
    return (
        <>  
            <UserName>
                <p className="hello">Olá</p>
                <p className="user">Usuário</p>
            </UserName>
            <EndSection>
                <hr></hr>
            </EndSection>
            <Cards>                      
                <DivCard>
                    <div className="images">
                        <img src={paisage} alt="Paisagem do Mar com mulher" />
                        <div className="visual">
                            <img src={lastSeen} alt="Indica ultima visualização" />
                            <p>2min atrás</p>
                        </div>
                    </div>
                    <p className="title-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium...</p>
                    <p className="subtitle-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium animi!</p>
                </DivCard>
                <DivCard>
                    <div className="images">
                        <img src={paisage} alt="Paisagem do Mar com mulher" />
                        <div className="visual">
                            <img src={lastSeen} alt="Indica ultima visualização" />
                            <p>2min atrás</p>
                        </div>
                    </div>
                    <p className="title-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium...</p>
                    <p className="subtitle-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium animi!</p>
                </DivCard>
                <DivCard>
                    <div className="images">
                        <img src={paisage} alt="Paisagem do Mar com mulher" />
                        <div className="visual">
                            <img src={lastSeen} alt="Indica ultima visualização" />
                            <p>2min atrás</p>
                        </div>
                    </div>
                    <p className="title-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium...</p>
                    <p className="subtitle-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium animi!</p>
                </DivCard>
                <DivCard>
                    <div className="images">
                        <img src={paisage} alt="Paisagem do Mar com mulher" />
                        <div className="visual">
                            <img src={lastSeen} alt="Indica ultima visualização" />
                            <p>2min atrás</p>
                        </div>
                    </div>
                    <p className="title-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium...</p>
                    <p className="subtitle-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium animi!</p>
                </DivCard>
                <DivCard>
                    <div className="images">
                        <img src={paisage} alt="Paisagem do Mar com mulher" />
                        <div className="visual">
                            <img src={lastSeen} alt="Indica ultima visualização" />
                            <p>2min atrás</p>
                        </div>
                    </div>
                    <p className="title-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium...</p>
                    <p className="subtitle-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium animi!</p>
                </DivCard>
                <DivCard>
                    <div className="images">
                        <img src={paisage} alt="Paisagem do Mar com mulher" />
                        <div className="visual">
                            <img src={lastSeen} alt="Indica ultima visualização" />
                            <p>2min atrás</p>
                        </div>
                    </div>
                    <p className="title-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium...</p>
                    <p className="subtitle-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium animi!</p>
                </DivCard>
                <DivCard>
                    <div className="images">
                        <img src={paisage} alt="Paisagem do Mar com mulher" />
                        <div className="visual">
                            <img src={lastSeen} alt="Indica ultima visualização" />
                            <p>2min atrás</p>
                        </div>
                    </div>
                    <p className="title-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium...</p>
                    <p className="subtitle-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium animi!</p>
                </DivCard>
                <DivCard>
                    <div className="images">
                        <img src={paisage} alt="Paisagem do Mar com mulher" />
                        <div className="visual">
                            <img src={lastSeen} alt="Indica ultima visualização" />
                            <p>2min atrás</p>
                        </div>
                    </div>
                    <p className="title-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium...</p>
                    <p className="subtitle-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium animi!</p>
                </DivCard>
                <DivCard>
                    <div className="images">
                        <img src={paisage} alt="Paisagem do Mar com mulher" />
                        <div className="visual">
                            <img src={lastSeen} alt="Indica ultima visualização" />
                            <p>2min atrás</p>
                        </div>
                    </div>
                    <p className="title-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium...</p>
                    <p className="subtitle-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium animi!</p>
                </DivCard>
            </Cards>
        </>
    );
}

export default Card;