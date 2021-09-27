export const TestQuestionOptions = ({optionValue, name, checked}) => {
    return(
        <div>
            <input 
                type="radio" 
                value={optionValue} 
                name={name}
                checked={checked}  />
                
            <label htmlFor="selectOption">{optionValue}</label>
        </div>
    );
};