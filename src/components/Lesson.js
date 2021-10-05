import {useState, useRef, useEffect} from 'react';
import { Button, TestQuestions, TestQuestionOptions } from ".";
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wrapper = styled.div`
    display: inline-flex;
    width: 70%;
    gap: 150px;

    .nextlesson{
        margin-left: 30px;
    }
`

export const Lesson = ({data, nextpath, pupilClass}) => {
    const history = useHistory();
    const [selectedOption, setSelectedOption] = useState([]);
    const [ assessmentScore, setAssessmentScore ] = useState(0);
    const [btnState, setBtnState] = useState(true);

    const handleOptionChange = (e) => {
        const {name, value} = e.target;
        const newSelectedOption = {name, value}; 
        let index = selectedOption.findIndex(item => item.name === name);
        if(index < 0){
            setSelectedOption([...selectedOption, newSelectedOption]);
        }else{
            //replace existing name: value pair with newly selected pair
            let updatedOption = selectedOption.filter(option => option.name !== name );
            updatedOption.push(newSelectedOption)
            setSelectedOption(updatedOption);
        }
                    
    }

    const handleClick = () => {
        let counter = 0;
        
        if(selectedOption.length < 3){
            console.log("not upto 3");
        }else{
            console.log("let's go!");
            for(let i=0; i<data.assessment.length; i++){
                for(let j=0; j<selectedOption.length; j++){
                    if(data.assessment[i].question === selectedOption[j].name){
                        if(selectedOption[j].value === data.assessment[i].answer){ 
                            counter = counter + 1;
                        }
                    }
                }
                
            }
            setAssessmentScore(counter);
        }   
        //set radio button to default unchecked 
    }

    const cutOffMark =  3;
    const initialMount = useRef(true);
    useEffect(() => {
        if(initialMount.current){
            initialMount.current = false;
        }else{
            if(assessmentScore === cutOffMark){
                toast.success("Passed in flying colors, keep it up!");
                setBtnState(false);
            }else{            
                toast.error("So close! try again champ");
                window.scrollTo(0,0);
            }                
            setSelectedOption([]);      
        }
       
    }, [history, cutOffMark, assessmentScore]);

    const handleProceed = () => {
        if(assessmentScore === cutOffMark){
            history.push(nextpath);
        }
    }


   return(
    <div>        
        <h2>{`${pupilClass} Lesson Page `}</h2>
        <h3>{data.topic}</h3>
        <p>{data.text}</p>
        <img src={data.image} alt={`${data.topic}`} />
        <div>
            <h3>Assessment</h3>
            <ol>
                {data.assessment.map(item => ( 
                    <li key={item.id}>
                        <TestQuestions question={item.question} />
                        <div onChange={handleOptionChange}>
                            <ul>
                                {item.options.map(option => (
                                    <li key={item.id}>
                                        <TestQuestionOptions 
                                            optionValue={option}  
                                            name={item.question} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
        </div> 
        <Wrapper>
            <Button handleSubmit={handleClick}>Submit</Button>
            <Button 
                handleSubmit={handleProceed} 
                disabled={btnState}
                className="nextlesson">Next lesson &rarr;</Button>
        </Wrapper>
        <ToastContainer position="top-center" autoClose={3000} />
    </div>
   ) ;
};
