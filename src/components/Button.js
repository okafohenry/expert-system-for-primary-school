import styled from 'styled-components';

const Wrapper = styled.div`
    input {        
        font-family: 'Josefin Sans' !important;
        margin-top: 30px;
        padding: 10px 30px;
        background: #B57336;
        color: #fff;
        border: 1px solid #B57336;
        border-radius: 5px;
        letter-spacing: .1rem;

        &.invert{
            background: #fff;
            border: 2px solid #B57336;
            color: #B57336;
        }
    }
`

export const Button = ({children, handleSubmit, disabled}) => {
    return(
        <Wrapper>
            <input type="button" 
                value={children}  
                onClick={handleSubmit} 
                disabled={disabled} />
        </Wrapper>
    );
};