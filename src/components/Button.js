export const Button = ({children, handleSubmit}) => {
    return(
        <input type="button" value={children}  onClick={handleSubmit} />
    );
};