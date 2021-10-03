import styled from "styled-components";
import {FaHome} from 'react-icons/fa';


const Wrapper = styled.span`
    .home{        
        position: absolute;
        right: 300px;
        padding: 15px;
        font-size: 24px;
        color: #B57336;
    }
` 

export const HomeIcon = () => {

    return(
        <Wrapper>
            <span className="home">
                <FaHome />
            </span>
        </Wrapper>
    )
}
    