export const TestQuestionOptions = ({optionValue}) => {
    return(
        <div>
            <input type="radio" id="selectOption" />
            <label htmlFor="selectOption">{optionValue}</label>
        </div>
    );
};