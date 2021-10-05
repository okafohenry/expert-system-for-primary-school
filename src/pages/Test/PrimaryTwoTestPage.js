import {useState, useEffect, useRef} from "react";
import { TestQuestionOptions, TestQuestions, Button, AppLayout } from "../../components";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const testQuestions = [
    {
        id: 1,
        question: "Question 10",
        options: ["option 1", "option 2", "option 3" ],
        answer:  "option 1"
    },
    {
        id: 2,
        question: "Question 11",
        options: ["option 1", "option 2", "option 3" ],
        answer: "option 2"
    },
    {
        id: 3,
        question: "Question 13",
        options: ["option 1", "option 2", "option 3" ],
        answer:  "option 3"
    },
    {
        id: 4,
        question: "Question 2",
        options: ["option 1", "option 2", "option 3" ],
        answer:  "option 1"
    },
    {
        id: 5,
        question: "Question 3",
        options: ["option 1", "option 2", "option 3" ],
        answer:  "option 2"
    }
];

export const PrimaryTwoTestPage = () => {
    const history = useHistory();
    const [testScore, setTestScore] = useState(0);    
    const [selectedOption, setSelectedOption] = useState([]);

    const calcPercentage = (arr) => {
        let len = arr.length;
        let res = (80/100) * len;
        return res;
    }

 
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

    const handleSubmit = () => {
        let counter = 0;
        if(selectedOption.length < 5){
            console.log("not upto 5");
        }else{
            console.log("let's go!");
            for(let i=0; i<testQuestions.length; i++){
                for(let j=0; j<selectedOption.length; j++){
                    if(testQuestions[i].question === selectedOption[j].name){
                        if(selectedOption[j].value === testQuestions[i].answer){ 
                            counter = counter + 1;
                        }
                    }
                }
                
            }
            setTestScore(counter);
        }
    }
    

    let cutOffMark = calcPercentage(testQuestions);
    const initialMount = useRef(true);
    useEffect(() => {
        if(initialMount.current){
            initialMount.current = false;
        }else{
            if(testScore >= cutOffMark){
                toast.success("Onward champ! too good for primary 2");
                history.push('/tests/primary-three');
            }else{
                toast.error(`You scored ${testScore}/${cutOffMark}, below the pass mark`)
                history.push('/lessons/primary-two/lesson-one');
            }
        }
       
    }, [history, cutOffMark, testScore])
    

    return(
        <AppLayout>
            <h2>Primary 2</h2>
            <ol>
                { testQuestions.map(testQuestion => ( 
                    <li key={testQuestion.id + 1}>
                        <TestQuestions question={testQuestion.question} />
                        <div onChange={handleOptionChange}>
                            <ul>
                                {testQuestion.options.map( option => (
                                    <li key={testQuestion.id}>
                                        <TestQuestionOptions 
                                            optionValue={option}  
                                            name={testQuestion.question} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
            <Button handleSubmit={handleSubmit}>Proceed &rarr;</Button>
            <ToastContainer position="top-center" autoClose={3000} />
        </AppLayout>
    );
};