import {useEffect, useState} from "react";
import { TestQuestionOptions, TestQuestions, Button } from "../../components";
import { Link } from "react-router-dom";

const testQuestions = [
    {
        id: 1,
        question: "Question 1",
        options: ["option 1", "option 2", "option 3" ],
        answer:  1
    },
    {
        id: 2,
        question: "Question 2",
        options: ["option 4", "option 5", "option 6" ],
        answer:  2
    },
    {
        id: 3,
        question: "Question 3",
        options: ["option 7", "option 8", "option 9" ],
        answer:  3
    },
    {
        id: 4,
        question: "Question 4",
        options: ["option 10", "option 11", "option 12" ],
        answer:  2
    },
    {
        id: 5,
        question: "Question 5",
        options: ["option 13", "option 14", "option 15" ],
        answer:  3
    }
];

export const PrimaryOneTestPage = () => { 

    const [testScore, setTestScore] = useState(0);    
    const [selectedOption, setSelectedOption] = useState([]);
    const [path, setPath] = useState("");

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
    
    useEffect(() => {
        console.log(selectedOption);
    })
    


    return(
        <div>
            <h3>Primary 1</h3>
            <ol>
                { testQuestions.map(testQuestion => ( 
                    <li>
                        <TestQuestions question={testQuestion.question} />                        
                        <div onChange={handleOptionChange}>
                            <ul >
                                {testQuestion.options.map( option => (
                                    <li id={testQuestion.question}>
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
            <Button>Proceed &rarr;</Button>
        </div>
        
    );
};

