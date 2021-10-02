export const Button = ({children, handleSubmit, disabled}) => {
    return(
        <input type="button" 
            value={children}  
            onClick={handleSubmit} 
            disabled={disabled} />
    );
};