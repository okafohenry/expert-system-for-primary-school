import {useState, useEffect, useRef} from 'react';
import { TestQuestionOptions, TestQuestions, Button } from '../../components';
import { useHistory } from 'react-router'; 


const lesson = [
    {
        id: 1,
        topic: "",
        text: "",
        img: "",
        assessment: [
            {
                id: 31,
                question: "Question 1",
                options: ["option 1", "option 2", "option 3" ],
                answer: "option 1"
            },
            {
                id: 32,
                question: "Question 2",
                options: ["option 1", "option 2", "option 3" ],
                answer: "option 2"
            },
            {
                id: 33,
                question: "Question 3",
                options: ["option 1", "option 2", "option 3" ],
                answer: "option 3"
            }
        ]

    },
    {
        id: 2,
        topic: "",
        text: "",
        img: "",
        assessment: [
            {
                id: 34,
                question: "Question 1",
                options: ["option 1", "option 2", "option 3" ],
                answer: "option 2"
            },
            {
                id: 35,
                question: "Question 2",
                options: ["option 1", "option 2", "option 3" ],
                answer: "option 3"
            },
            {
                id: 36,
                question: "Question 3",
                options: ["option 1", "option 2", "option 3" ],
                answer: "option 1"
            }
        ]
    },
    {
        id: 3,
        topic: "",
        text: "",
        img: "",
        assessment: [{
            id: 37,
            question: "Question 1",
            options: ["option 1", "option 2", "option 3" ],
            answer: "option 1"
        },
        {
            id: 38,
            question: "Question 2",
            options: ["option 1", "option 2", "option 3" ],
            answer: "option 2"
        },
        {
            id: 39,
            question: "Question 3",
            options: ["option 1", "option 2", "option 3" ],
            answer: "option 3"
        }]
    }
]

export const PrimaryThreeLessonPage = () => {   
    const history = useHistory();
    const [ assessmentScore, setAssessmentScore ] = useState(0);
    const [ topicIndex, setTopicIndex ] = useState(0);
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
    const handleClick = () => {
        let counter = 0;
        if(selectedOption.length < 3){
            console.log("not upto 3");
        }else{
            console.log("let's go!");
            for(let i=0; i<lesson[topicIndex].assessment.length; i++){
                for(let j=0; j<selectedOption.length; j++){
                    if(lesson[topicIndex].assessment[i].question === selectedOption[j].name){
                        if(selectedOption[j].value === lesson[topicIndex].assessment[i].answer){ 
                            counter = counter + 1;
                        }
                    }
                }
                
            }
            setAssessmentScore(counter);
        }
    }

    const calcPercentage = (arr) => {
        let len = arr.length;
        let res = (100/100) * len;
        return res;
    };

    let assessment = lesson[topicIndex].assessment
    const cutOffMark =  calcPercentage(assessment)
    const initialMount = useRef(true);
    useEffect(() => {
        if(initialMount.current){
            initialMount.current = false;
        }else{
            console.log(assessmentScore);
            if(assessmentScore === cutOffMark){
               if(topicIndex < lesson.length){
                    setTopicIndex(topicIndex + 1); //go to next lesson
                }else{
                    history.push('/lessons/primary-four'); //go to next class
                }
            }else{
                window.scrollTo(0,0)
            }
        }
       
    }, [history, cutOffMark, topicIndex, assessmentScore]);
    
    return(
        <div>
            <div>
                <h2>Primary 3 Lesson Page</h2>
                <h3>{lesson[topicIndex].topic}</h3>
                <p>{lesson[topicIndex].text}</p>
                <img src={lesson[topicIndex].image} alt={`${lesson[topicIndex].topic}`} />
            </div>
            <div>
                <h3>Assessment</h3>
                <ol>
                    { lesson[topicIndex].assessment.map(item => ( 
                        <li key={item.id}>
                            <TestQuestions question={item.question} />
                            <div onChange={handleOptionChange}>
                                <ul>
                                    {item.options.map(option => (
                                        <li key={item.id}>
                                            <TestQuestionOptions 
                                                optionValue={option}  
                                                name={item.question} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ol> 
                            
                <Button handleSubmit={handleClick}>Submit &rarr;</Button>
            </div>
        </div>
    );
};