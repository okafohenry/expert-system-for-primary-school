import { Link } from "react-router-dom";
import { Button, Logo } from "../../components";
import styled from 'styled-components';

const Wrapper = styled.div`
    nav{
        width: 100%;
        z-index: 20;
        padding: 10px 0;

        .logo{
            margin-left: 200px;
            margin-top: 15px;
        }

        span{
            color: #B57336;
            font-weight: bold;
            font-size: 18px;
            position: relative;
            top: -13px;
        }
    }
`

const Grid = styled.div`
    width: 100%;
    height: 527px;
    display: inline-grid;
    grid-template-columns: auto auto auto;
    justify-content: space-evenly;

    .grid-item1 {
        padding: 30px;
        width: 600px;

        .illustration{
            position: relative;
            top: -70px;
            left: 150px;
        }
    }
    .grid-item2 {
        text-align: center;
        padding: 30px;
        width: 600px;
    }
    .msg {
        width: 70%;
        margin: 0 auto;
        position: relative;
        top: 80px;
    }
`

export const LandingPage = () => {
    return(
        <Wrapper>        
            <nav>
                <div className="logo" >
                    <Logo />
                    <span>Mathutor</span>
                </div>
            </nav>
            <Grid>
                <div className="grid-item1">
                    {/* illustration */}
                    <img 
                        src={process.env.PUBLIC_URL + '/images/illustration_mathutor.png'} 
                        height="600px" 
                        width="600px"
                        className="illustration"/>
                </div>
                <div className="grid-item2">
                    <div className="msg" >
                        <h2>
                            Mathutor will provide you a series of tests to determine your starting class..<br/>
                            80% is the pass mark,<br/><br/><br/> Goodluck Champ!
                        </h2>
                        <Link to='/tests/primary-one'>
                            <Button>Proceed &rarr;</Button>
                        </Link>
                    </div>                    
                </div>                    
            </Grid>
        </Wrapper>
    );
};