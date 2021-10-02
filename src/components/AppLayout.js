import {Nav, Footer} from '.';
import styled from 'styled-components';

const Wrapper = styled.div`

    .container{
        height: 500px;
        width: 60%;
        padding: 30px;
        margin-left: auto;
        margin-right: auto;
        overflow: scroll;

        font-size: 16px;
        line-height: 1.2rem;
    }
`


export const AppLayout = ({children}) => {
    return(
        <Wrapper>
            <Nav />
            <div className="container">{children}</div>
            <Footer />
        </Wrapper>
    );
}
