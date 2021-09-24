import {useState} from "react";
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
    const [selectedOption, setSelectedOption] = useState("");
    const [path, setPath] = useState("");

    const handleChangeOption = (e) => {
        setSelectedOption(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log("you have selected" + selectedOption);
    }

    return(
        <div>
            <h3>Primary 1</h3>
            <ol>
                { testQuestions.map(testQuestion => ( 
                    <li>
                        <TestQuestions question={testQuestion.question} />
                        <form onSubmit={handleFormSubmit}>
                            <ul>
                                {testQuestion.options.map( option => (
                                    <li>
                                        <TestQuestionOptions 
                                            optionValue={option} 
                                            name={testQuestion.question}
                                            checked={setSelectedOption(selectedOption === option)}
                                            onChange={handleChangeOption} 
                                            />
                                    </li>
                                ))}
                            </ul>
                        </form>
                    </li>
                ))}
            </ol>
            <Link to={path}>            
                <Button type='submit'>Proceed &rarr;</Button>
            </Link>
        </div>
        
    );
};

