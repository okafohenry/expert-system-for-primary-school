import {useState, useEffect, useRef} from "react";
import { TestQuestionOptions, TestQuestions, Button } from "../../components";
import { useHistory } from "react-router-dom";

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
        answer:  "option 2"
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
        answer:  "option 3"
    }
];

export const PrimaryThreeTestPage = () => {
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
                history.push('/tests/primary-four');
            }else{
                history.push('/lessons/primary-three');
            }
        }
       
    }, [history, cutOffMark, testScore])
    

    return(
        <div>
            <h3>Primary 3</h3>
            <ol>
                { testQuestions.map(testQuestion => ( 
                    <li id={testQuestion.id}>
                        <TestQuestions question={testQuestion.question} />
                        <div onChange={handleOptionChange}>
                            <ul>
                                {testQuestion.options.map( option => (
                                    <li id={testQuestion.id}>
                                        <TestQuestionOptions optionValue={option}  name={testQuestion.question} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
            <Button handleSubmit={handleSubmit}>Proceed &rarr;</Button>
        </div>
    );
};