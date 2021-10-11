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
        question: "What is the name of this symbol < ?",
        options: ["greater than", "less than", "equal to" ],
        answer:  "less than"
    },
    {
        id: 2,
        question: "Write 600 is greater than 400 in symbol",
        options: ["600 < 400", "600 = 400", "600 > 400" ],
        answer:  "600 > 400"
    },
    {
        id: 3,
        question: "Maria had 53 marbles when she started, she lost 15 marbles. How many does she have left?",
        options: ["49", "38", "80" ],
        answer:  "38"
    },
    {
        id: 4,
        question: "Bolaji collected 610 newspapers for recycling, David collected 241 newspaper. How many newspaper were collected together?",
        options: ["851", "900", "2020" ],
        answer:  "851"
    },
    {
        id: 5,
        question: "What is 3/4 of 56?",
        options: ["42", "40", "36" ],
        answer:  "42"
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
                toast.success("Onward champ! too good for primary 3");
                history.push('/advance-to-four');
            }else{
                toast.error(`You scored ${testScore}/${cutOffMark}, below the pass mark`);
                history.push('/lessons/primary-three/lesson-one');
            }
        }
       
    }, [history, cutOffMark, testScore])
    

    return(
        <AppLayout>
            <Container>
                <ToastContainer position="top-center" autoClose={3000} />
                <h2>Primary 3 Test</h2>
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
            </Container>
        </AppLayout>
    );
};