import {useEffect, useState, useRef} from "react";
import { TestQuestionOptions, TestQuestions, Button, AppLayout } from "../../components";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const testQuestions = [
    {
        id: 1,
        question: "Zero means _____",
        options: ["Nothing", "Everything", "Ten" ],
        answer: "Nothing"
    },
    {
        id: 2,
        question: "Triangle has how many sides?",
        options: ["5", "4", "3" ],
        answer:  "3"
    },
    {
        id: 3,
        question: "4 x 3 = ____",
        options: ["13", "12", "14" ],
        answer: "12"
    },
    {
        id: 4,
        question: "17 take away 7 = _____",
        options: ["10", "11", "24" ],
        answer:  "10"
    },
    {
        id: 5,
        question: "Write 13 in words ______",
        options: ["Twelve", "Eleven", "Thirteen" ],
        answer:  "Thirteen"
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
                toast.success("Onward champ! too good for primary 1")
                history.push('/tests/primary-two');
            }else{
                toast.error(`You scored ${testScore}/${cutOffMark}, below the pass mark`)
                history.push('/lessons/primary-one/lesson-one');
            }
        }
       
    }, [history, cutOffMark, testScore]);
    


    return(
        <AppLayout>
            <h2>Primary 1</h2>
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
            <ToastContainer position="top-center" autoClose={3000} />
        </AppLayout>
        
    );
};

