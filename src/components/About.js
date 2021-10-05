import styled from 'styled-components';

const Wrapper = styled.span`

    .about{        
        position: absolute;
        right: 100px;
        padding: 23px 12px;
        color: #B57336;
        transition: .1s ease-in-out;
    }
    .about:hover {
        border-bottom: 3px solid #B57336;
    }
`

export const About = () => {
    return(
        <Wrapper>
            <span className="about">About Mathutor</span>
        </Wrapper>
    )
}