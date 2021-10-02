import styled from 'styled-components';

const Wrapper = styled.div`
`

export const TestQuestions = ({question}) => {
    return(
        <Wrapper>
            <h4>{question}</h4>   
        </Wrapper>
    )
}