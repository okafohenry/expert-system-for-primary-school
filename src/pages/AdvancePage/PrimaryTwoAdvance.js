import {Button} from '../../components';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
    width: 300px;
    margin: 50px auto 0 auto;
    padding: 25px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 2px 5px 1px #ebe8e8;
    

    .img-txt{
        display: grid;
        justify-content: center;
    }

    
`


export const PrimaryTwoAdvance = () => {
    return(
        <Wrapper>
             <div className="img-txt">
                <img src={process.env.PUBLIC_URL + '/images/trophy.gif'} alt="trophy"/>
                <h4>Great Work Champ!</h4>
                <p></p>
            </div>
            <div className="btn">
                <Link to="/lessons/primary-two/lesson-one">
                    <Button className="btn1">start again</Button>
                </Link>
                <Link to="/lessons/primary-three/lesson-one">
                    <Button className="btn2">Advance to Next class &rarr;</Button>
                </Link>
            </div>
        </Wrapper>
    )
}