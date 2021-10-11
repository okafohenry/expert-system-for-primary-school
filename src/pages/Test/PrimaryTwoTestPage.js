import {useState, useEffect, useRef} from "react";
import { TestQuestionOptions, TestQuestions, Button, AppLayout } from "../../components";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const Container = styled.div`
    h2{
       text-align: center;
       padding-bottom: 20px; 
       font-size: 25px;
    }
`

const testQuestions = [
    {
        id: 1,
        question: "During the weekend, Mr. Femi's family ate 12 mangoes on Friday, 10 mangoes on Saturday and 13 mangoes on Sunday. How many mangoes did Mr. Femi's family during the weekend?",
        options: ["33", "35", "34" ],
        answer:  "35"
    },
    {
        id: 2,
        question: "How many sides does a cube of sugar have ?",
        options: ["5", "6", "7" ],
        answer: "6"
    },
    {
        id: 3,
        question: "Ifeoma scored 60 percent in Mathematics, 34 percent in English Language and 53 percent in Social Studies. Find the total sum of her scores in the three subjects",
        options: ["168", "203", "147" ],
        answer:  "147"
    },
    {
        id: 4,
        question: "13, 2, 2, 11, 3, 7, 9, 5, 2, 6, 6, 8, 4, 4, 7. From the numbers, how many odd numbers are there?",
        options: ["5", "6", "7" ],
        answer:  "7"
    },
    {
        id: 5,
        question: "A boy is carrying 30 eggs. If 18 eggs break, how many eegs are left unbroken?",
        options: ["12", "10", "11" ],
        answer:  "12"
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
                toast.error(`You scored ${testScore}/${cutOffMark}, below the pass mark`);
                history.push('/lessons/primary-two/lesson-one');
            }
        }
       
    }, [history, cutOffMark, testScore])
    

    return(
        <AppLayout>
            <Container>
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
            </Container>
        </AppLayout>
    );
};