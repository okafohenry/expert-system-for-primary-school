export const TestQuestionOptions = ({optionValue, name, checked, onChange}) => {
    return(
        <div>
            <input 
                type="radio" 
                value={optionValue} 
                name={name}
                checked={checked} 
                onChange={onChange}/>
                
            <label htmlFor="selectOption">{optionValue}</label>
        </div>
    );
};