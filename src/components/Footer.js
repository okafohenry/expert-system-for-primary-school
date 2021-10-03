import styled from 'styled-components';
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Wrapper = styled.footer`
    position: fixed;
    bottom: 0;
    padding: 3px 0;
    width: 100%;

    ul{
        width: 16%;
        margin-left: auto;
        margin-right: auto;


        li{
            display: inline;
            padding: 0 10px;
        }
        .git, .linkedin, .twitter{
            color: #ababab;
        }
    }

`

export const Footer = () => {
    return(
        <Wrapper>
            <footer>
                <ul>
                    <li>
                        <Link to="github.com/okafohenry/expert-system-for-primary-school">
                            <FaGithub className="git" />
                        </Link>
                    </li>
                    <li>
                        <Link to="linkedin.com/in/henry-okafor-854112112">
                            <FaLinkedin className="linkedin" />
                        </Link>
                    </li>
                    <li> 
                        <Link to="twitter.com/_okafohenrie">
                            <FaTwitter className="twitter" />
                        </Link>
                    </li>
                </ul>
            </footer>
        </Wrapper>   
    )
}