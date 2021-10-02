import styled from 'styled-components';

const Wrapper = styled.span`

    .about{        
        position: absolute;
        right: 100px;
        border-bottom: 3px solid red;
        padding: 12px;
    }
`

export const About = () => {
    return(
        <Wrapper>
            <span className="about">About Mathutor</span>
        </Wrapper>
    )
}