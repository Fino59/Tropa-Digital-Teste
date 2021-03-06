import styled from "styled-components";
import { Link } from "react-router-dom";
import tropaLogo from '../../assets/images/tropa-logo.png';
import { ReactComponent as startsLogo} from '../../assets/images/home.svg';
import { ReactComponent as contactsLogo} from '../../assets/images/contacts.svg';
import { ReactComponent as reportsLogo} from '../../assets/images/reports.svg';
import Card from '../../components/Card';
import Navbar from "../../components/Navbar";

const Sidebar = styled.div`
    background: #fff;
    width: 260px;
    height: 100vh;

    .logoTropa {
        width: 190px;
        height: 57px;
        margin: 50px 35px;
    }
    
    img {
        margin: 10px;        
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;        
    }

    .button {
        margin-top: 10px;
    }

    @media (max-width: 599px) {
        visibility: hidden;

        div {
            width: 100px;
        }

        .logoTropa {
            width: 100px;
            height: 28px;
            margin: 30px 10px 0 10px;
        }

        .button {
        margin-top: 5px;
    }
    }
`;

const Button = styled.button`
    background-color: #2EAFB2;
    width: 210px;
    height: 50px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-family: 'Advent Pro', sans-serif;;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    transition: ease-in-out 300ms;
    &:hover{
        background-color: #F3F3F3;
        width: 222px;
        margin-right: 0;
        color: #000;
        border-radius: 5px 0 0 5px;                
    }
    cursor: pointer;
    margin: 10px;

    @media (max-width: 599px) {
        margin: 20px 0 0 0;
        width: 105px;
        height: 25px;
        &:hover {
            width: 100px;
        }
    }
`;

const StartLogo = styled(startsLogo)`
  width: 20px;
  height: 20px;
  margin: 10px;
  transition: ease-in-out 300ms;
  ${Button}:hover & {
      fill: #FF6C22;
  }
`;

const ReportsIcon = styled(reportsLogo)`
  width: 20px;
  height: 20px;
  margin: 10px;
  transition: ease-in-out 300ms;
  ${Button}:hover & {
      fill: #FF6C22;
  }
`;

const ContactsIcon = styled(contactsLogo)`
  width: 20px;
  height: 20px;
  margin: 10px;
  transition: ease-in-out 300ms;
  ${Button}:hover & {
    fill: #FF6C22;
  }
`;

const Section = styled.section`
    background-color: #F3F3F3;
    width: 100%;
    display: flex;

`;

const Main = styled.div`
    @media (max-width: 599px) {
        width: 100%;        
    }
`;

function Home() {
    return (
        <Section>
            <Sidebar>
                <div>
                <Link to={"/"}>
                    <img src={tropaLogo} alt="Logo Tropa Digital" className="logoTropa" />                
                </Link>    
                </div>
                <div className="button">
                <Button>
                    <StartLogo />
                    In??cio
                </Button>
                
                <Button>
                    <ContactsIcon />
                    Contatos
                </Button>
                <Button>
                    <ReportsIcon />
                    Relat??rios
                </Button>
                <Button>
                    <ContactsIcon />
                    Contatos
                </Button>
                <Button>
                    <ContactsIcon />
                    Contatos
                </Button>
                <Button> 
                    <ContactsIcon />
                    Contatos
                </Button>       
                </div>
            </Sidebar>
            <Navbar />
            <Main>
                <Card>
                </Card>
            </Main>                    
        </Section>
        
    );
}

export default Home;