import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { HomeIcon, About } from '.';

const Wrapper = styled.nav`
    width: 100%;
    margin-top: 0;
    background: #fff;
    padding: 5px 0;

    ul{
        display: inline-flex;

        li{
            padding: 5px;
            background: red;
        }
    }
`

export const Nav = () => {
    return(
        <Wrapper>
            <nav>
                <ul className="navList">
                    <li>
                        <Link to="/"><img src="" alt="logo" /></Link>
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