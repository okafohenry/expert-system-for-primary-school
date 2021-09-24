import {useState} from "react";
import { TestQuestionOptions, TestQuestions, Button } from "../../components";
import { Link } from "react-router-dom";

export const PrimaryThreeTestPage = () => {    
    
    const testQuestions = [
        {
            id: 1,
            question: "Question 6",
            options: ["option 1", "option 2", "option 3" ],
            answer:  1
        },
        {
            id: 2,
            question: "Question 7",
            options: ["option 1", "option 2", "option 3" ],
            answer:  2
        },
        {
            id: 3,
            question: "Question 8",
            options: ["option 1", "option 2", "option 3" ],
            answer: 3
        },
        {
            id: 4,
            question: "Question 2",
            options: ["option 1", "option 2", "option 3" ],
            answer:  2
        },
        {
            id: 5,
            question: "Question 3",
            options: ["option 1", "option 2", "option 3" ],
            answer:  3
        }
    ];

    const [testScore, setTestScore] = useState(0);    
    const [path, setPath] = useState("");
    return(
        <div>
            <h3>Primary 3</h3>
            <ol>
                { testQuestions.map(testQuestion => ( 
                    <li>
                        <TestQuestions question={testQuestion.question} />
                        <ul>
                            {testQuestion.options.map( option => (
                                <li>
                                    <TestQuestionOptions optionValue={option}  name={testQuestion.question} />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
            <Link to='/lessons/primary-one'>
                <Button>Proceed &rarr;</Button>
            </Link> 
        </div>
    );
};