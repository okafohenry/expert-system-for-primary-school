import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { HomeIcon, About, Logo } from '.';

const Wrapper = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background: #fff;
    box-shadow: 10px 0px 20px 0px #ebe8e8;
    z-index: 10;

    ul{
        display: inline-flex;

        li{
            padding: 5px;
        }
    }
    .logo {
        margin-left: 50px;
        padding: 0;
    }
`

export const Nav = () => {
    return(
        <Wrapper>
            <nav>
                <ul className="navList">
                    <li className="logo">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </li>
                    <li>
                        <Link to="/"><HomeIcon /></Link>
                    </li>
                    <li>
                        <Link to="/about"><About /></Link>
                    </li>
                </ul>  
            </nav>
        </Wrapper>   
    );
};