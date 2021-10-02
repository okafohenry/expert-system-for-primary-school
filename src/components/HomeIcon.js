import styled from "styled-components";
import {FaHome} from 'react-icons/fa';


const Wrapper = styled.span`
    .home{        
        position: absolute;
        right: 250px;
        border-bottom: 3px solid red;
        padding: 12px;
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
    