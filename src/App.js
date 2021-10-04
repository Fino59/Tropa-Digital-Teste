import styled from "styled-components";
import tropaLogo from './assets/images/tropa-logo.png';
import background from './assets/images/background-login.png';
import notebook from './assets/images/notebook.png';
import Button from "./components/Button/Button";

const Main = styled.main`
  text-align: center;
  background-color: #FF6C22;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Box = styled.div`
  display: grid;
  grid-template-areas: "login images";
  grid-template-columns: 1fr 1fr;
  background: #fff;
  width: 857px;
  height: 512px;
  border-radius: 5px;
 `;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  img {
    width: 259px; 
    height: 75px; 
    margin: 70px 0 40px 84px;
  }

  .welcome-div {
    display: flex;
    align-items: center;
    margin-left: 59px;
  }

  .welcome {
    color: #8b8b8b;
    font-family: 'Advent Pro', sans-serif;
    font-weight: 700;
    font-size: 25px;
  }

  .painel {
    color: #FF6C22;
    font-family: 'Advent Pro', sans-serif;
    font-weight: 700;
    font-size: 25px;
    margin-left: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 320px;
    margin-left: 60px;
  }

  input {
    border: 1px solid lightgrey;
    height: 44px;
    box-sizing: border-box;
    margin-bottom: 10px;
    border-radius: 5px;
    padding-left: 15px;
    font-family: 'Advent Pro', sans-serif;
    font-weight: 400;
    font-size: 16px;
    ::placeholder {
      color: lightgrey;
    }
  }
`;

const Image = styled.div`
  border-radius: 5px;
  height: 512px;
  position: relative;
  .background {
    width: 390px;
    height: 100%;    
    position: absolute;
    right: 0;
  }
  .notebook {
    width: 414px;
    height: 414px;
    position: absolute;
    bottom: 0;
    right: 45px;
  }
`;

export default function App() {
  return (
    <Main>
     <Box>
        <Login style={{ gridArea: 'login' }}>
          <img src={tropaLogo} alt="Logo of Tropa Digital" />
          <div className="welcome-div">
            <p className="welcome">Bem Vindo ao</p><p className="painel"> painel</p>
          </div>
          <form>
            <input type="text" id="name" name="name" placeholder="Digite seu email" />
            <input type="email" id="email" name="email" placeholder="Digite sua senha" />
            <Button>Acessar</Button>             
          </form>                              
        </Login>
        <Image style={{ gridArea: 'images' }}>
          <img className="background" src={background} alt="backgroung for the box"/>
          <img className="notebook" src={notebook} alt="notebook"/>
        </Image>
     </Box>
    </Main>
  );
}

