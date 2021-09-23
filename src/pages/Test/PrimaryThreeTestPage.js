import {useState} from "react";
import { TestQuestionOptions, TestQuestions, Button } from "../../components";

export const PrimaryThreeTestPage = () => {    
    
    const [testScore, setTestScore] = useState(0);    
    const [path, setPath] = useState("");
    const [ testQuestions, setTestQuestion] = useState([
        {
            id: 1,
            question: "Question 6",
            options: ["option 1", "option 2", "option 3" ],
            answer:  "a"
        },
        {
            id: 2,
            question: "Question 7",
            options: ["option 1", "option 2", "option 3" ],
            answer:  "b"
        },
        {
            id: 3,
            question: "Question 8",
            options: ["option 1", "option 2", "option 3" ],
            answer:  "c"
        },
        {
            id: 4,
            question: "Question 2",
            options: ["option 1", "option 2", "option 3" ],
            answer:  "b"
        },
        {
            id: 5,
            question: "Question 3",
            options: ["option 1", "option 2", "option 3" ],
            answer:  "c"
        }
    ]);


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
                                    <TestQuestionOptions optionValue={option} />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
            <Button>Proceed &rarr;</Button>
        </div>
    );
};