import {Link} from 'react-router-dom';
import {Button} from '../../components';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 50%;
    margin: 50px auto 0 auto;
    text-align: center;

    h1{
        font-size: 150px;
        color: #ababab;
    }

    h3{
        margin-top: -70px;
        font-size: 35px;
        color: #ababab;
    }
`

export const ErrorPage = () => {
    return(
        <Wrapper>
            <h1>404</h1>
            <h3>Error: page does not exist!</h3>
            <Link to="/">
                <Button>Go back</Button>
            </Link>
        </Wrapper>
    );
};