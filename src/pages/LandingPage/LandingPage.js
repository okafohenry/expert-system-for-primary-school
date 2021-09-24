import { Link } from "react-router-dom";
import { Button } from "../../components";

export const LandingPage = () => {
    return(
        <div>
            <img src="" alt="mathutor_logo.jpg"/>
            <h2>
                Mathutor will provide you a series of tests to deermine your starting class..<br/>
                80% is the pass mark, Goodluck Champ!
            </h2>
            <Link to='/tests/primary-one'>
                <Button>Proceed &rarr;</Button>
            </Link>
        </div>
    );
};