import styled from "styled-components";
import { Link } from "react-router-dom";
import tropaLogo from '../../assets/images/tropa-logo.png';


const Nav = styled.div`
    #menuToggle  {
        display: block;
        position: relative;
        top: 30px;
        left: -100px;
        
        z-index: 1;
        
        -webkit-user-select: none;
        user-select: none;
    }

    #menuToggle a {
        text-decoration: none;
        color: #232323;
        
        transition: color 0.3s ease;
    }

    #menuToggle a:hover {
        color: #2EAFB2;
    }


    #menuToggle input {
        display: block;
        width: 40px;
        height: 40px;
        position: absolute;
        top: -12px;
        left: -10px;
        
        cursor: pointer;
        
        opacity: 0;
        z-index: 2; 
        
        -webkit-touch-callout: none;
    }

    #menuToggle span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        
        background: #cdcdcd;
        border-radius: 3px;
        
        z-index: 5;
        
        transform-origin: 4px 0px;
        
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                   opacity 0.55s ease;
    }

    #menuToggle span:first-child {
       transform-origin: 0% 0%;
    }

    #menuToggle span:nth-last-child(2) {
        transform-origin: 0% 100%;
    }

    #menuToggle input:checked ~ span {
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
        background: #232323;
    }

    #menuToggle input:checked ~ span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }

    #menuToggle input:checked ~ span:nth-last-child(2) {
        transform: rotate(-45deg) translate(0, -1px);
    }

    #menu {
        position: absolute;
        width: 80vw;
        margin: -100px 0 0 -50px;
        padding: 50px;
        padding-top: 125px;
        
        background: #ededed;
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        /* to stop flickering of text in safari */
        
        transform-origin: 0% 0%;
        transform: translate(-100%, 0);
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
        
        .logoTropa {
            margin: 15px 0;
            width: 160px;
            height: 45px;
        }
    }

    #menu li {
        padding: 10px 0;
        font-size: 22px;
    }

    #menuToggle input:checked ~ ul {
       transform: none;
    }

    @media (min-width: 599px) {
        visibility: hidden;
    }
`;

function Navbar(){
    return (
        <Nav>
            <nav role="navigation">
                <div id="menuToggle">
    
                    <input type="checkbox" />
        
                    <span></span>
                    <span></span>
                    <span></span>
                
                    <ul id="menu">
                        <Link to={"/"}>
                            <img src={tropaLogo} alt="Logo Tropa Digital" className="logoTropa" />                
                        </Link>
                        <Link to={'home'}><li>In??cio</li></Link>
                        <Link to={'home'}><li>Contatos</li></Link>
                        <Link to={'home'}><li>Relat??rios</li></Link>
                        <Link to={'home'}><li>Contatos</li></Link>
                        <Link to={'home'}><li>Contatos</li></Link>
                        <Link to={'home'}><li>Contatos</li></Link>
                    </ul>
                </div>
            </nav>
        </Nav>
    )
}

export default Navbar;