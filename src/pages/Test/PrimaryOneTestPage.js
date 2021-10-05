import {useEffect, useState, useRef} from "react";
import { TestQuestionOptions, TestQuestions, Button, AppLayout } from "../../components";
import { useHistory } from "react-router-dom";

const testQuestions = [
    {
        id: 1,
        question: "Question 1",
        options: ["option 1", "option 2", "option 3" ],
        answer: "option 1"
    },
    {
        id: 2,
        question: "Question 2",
        options: ["option 4", "option 5", "option 6" ],
        answer:  "option 5"
    },
    {
        id: 3,
        question: "Question 3",
        options: ["option 7", "option 8", "option 9" ],
        answer: "option 9"
    },
    {
        id: 4,
        question: "Question 4",
        options: ["option 10", "option 11", "option 12" ],
        answer:  "option 10"
    },
    {
        id: 5,
        question: "Question 5",
        options: ["option 13", "option 14", "option 15" ],
        answer:  "option 14"
    }
];

export const PrimaryOneTestPage = () => { 
    const history = useHistory();
    const [testScore, setTestScore] = useState(0);    
    const [selectedOption, setSelectedOption] = useState([]);

 
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
    

    const calcPercentage = (arr) => {
        let len = arr.length;
        let res = (80/100) * len;
        return res;
    };

    const cutOffMark =  calcPercentage(testQuestions)
    const initialMount = useRef(true);
    useEffect(() => {
        if(initialMount.current){
            initialMount.current = false;
        }else{
            console.log(testScore);
            if(testScore >= cutOffMark){
                history.push('/tests/primary-two');
            }else{
                history.push('/lessons/primary-one/lesson-one');
            }
        }
       
    }, [history, cutOffMark, testScore]);
    


    return(
        <AppLayout>
            <h3>Primary 1</h3>
            <ol>
                { testQuestions.map(testQuestion => ( 
                    <li key={testQuestion.id + 1}>
                        <TestQuestions question={testQuestion.question} />                        
                        <div onChange={handleOptionChange}>
                            <ul >
                                {testQuestion.options.map( option => (
                                    <li key={testQuestion.question}>
                                        <TestQuestionOptions 
                                            optionValue={option} 
                                            name={testQuestion.question}
                                            />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>           
            <Button handleSubmit={handleSubmit} className="invert">Proceed &nbsp;&rarr;</Button>
        </AppLayout>
        
    );
};

