import styled from 'styled-components';

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
            padding: 0 10px
        }
    }
`

export const Footer = () => {
    return(
        <Wrapper>
            <footer>
                <ul>
                    <li>git{/* git icon */}</li>
                    <li>linkedIn{/* linkedIn Icon*/}</li>
                    <li>Twitter{/* Twitter icon */}</li>
                </ul>
            </footer>
        </Wrapper>   
    )
}