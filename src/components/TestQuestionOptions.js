export const TestQuestionOptions = ({optionValue, name }) => {
    return(
        <div>
            <input 
                type="radio" 
                value={optionValue} 
                name={name} />
                
            <label htmlFor="selectOption">{optionValue}</label>
        </div>
    );
};