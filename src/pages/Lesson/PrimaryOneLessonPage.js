import {useState, useEffect, useRef} from 'react';
import { TestQuestions, TestQuestionOptions, Button } from '../../components';
import { useHistory } from 'react-router';;


const Lesson = [
    {
        id: 1,
        topic: "How to check a radio button using JavaScript?",
        text: "A radio button is an icon that is used in forms to take input from the user. It allows the users to choose one value from the group of radio buttons.  Radio buttons are basically used for the single selection from multiple ones, which is mostly used in GUI forms.You can mark/check only one radio button between two or more radio buttons. In this chapter, we will guide you on how to check a radio button using the JavaScript programming language.  For this, first we design a form containing radio buttons using HTML, and then we will use JavaScript programming to check the radio button. We will also check which radio button value is selected.",
        img: "",
        assessment: [
            {
                question: "Question 1",
                options: ["option 1", "option 2", "option 3" ],
                answer: "option 1"
            },
            {
                question: "Question 2",
                options: ["option 1", "option 2", "option 3" ],
                answer: "option 2"
            },
            {           
                question: "Question 3",
                options: ["option 1", "option 2", "option 3" ],
                answer: "option 3"
            }
        ]

    },
    {
        id: 2,
        topic: "Check a radio button",
        text: "We do not need to write any specific code to check the radio button. They can be checked once they are created or specified in HTML form.However, we have to write the JavaScript code to get the value of the checked radio button, which we will see in the chapter below:",
        img: "",
        assessment: [
            {          
                question: "Question 1",
                options: ["option 1", "option 2", "option 3" ],
                answer: "option 3"
            },
            {
                question: "Question 2",
                options: ["option 1", "option 2", "option 3" ],
                answer: "option 2"
            },
            {
                question: "Question 3",
                options: ["option 1", "option 2", "option 3" ],
                answer: "option 1"
            }
        ]
    }, 
    {
        id: 3,
        topic: "DOM querySelector() method",
        text: "The querySelector() function is a DOM method of JavaScript. This method is used to get the element that matches with the specified CSS selector in the document. Remember you need to specify the name property of the radio button in HTML code.",
        img: "",
        assessment: [
        {
            question: "Question 1",
            options: ["option 1", "option 2", "option 3" ],
            answer: "option 1"
        },
        {
            question: "Question 2",
            options: ["option 1", "option 2", "option 3" ],
            answer: "option 2"
        },
        {
            question: "Question 3",
            options: ["option 1", "option 2", "option 3" ],
            answer: "option 3"
        }]
    }
]

export const PrimaryOneLessonPage = () => {   
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
            for(let i=0; i<Lesson[topicIndex].assessment.length; i++){
                for(let j=0; j<selectedOption.length; j++){
                    if(Lesson[topicIndex].assessment[i].question === selectedOption[j].name){
                        if(selectedOption[j].value === Lesson[topicIndex].assessment[i].answer){ 
                            counter = counter + 1;
                        }
                    }
                }
                
            }
            setAssessmentScore(counter);
        }
    }

    const calcPercentage = arr => {
        let len = arr.length;
        let res = (100/100) * len;
        return res;
    };

    
    const cutOffMark =  calcPercentage(Lesson[topicIndex].assessment);
    const initialMount = useRef(true);
    useEffect(() => {
        if(initialMount.current){
            initialMount.current = false;
        }else{
            if(assessmentScore === cutOffMark){ 
                console.log(assessmentScore);
                setTopicIndex(topicIndex+1);
            }            
        }
       
    }, [history,  topicIndex, cutOffMark,assessmentScore]);

    return(
        <div>
            <div>
                <h2>Primary 1 Lesson Page</h2>
                <h3>{Lesson[topicIndex].topic}</h3>
                <p>{Lesson[topicIndex].text}</p>
                <img src={Lesson[topicIndex].image} alt={`${Lesson[topicIndex].topic}`} />
            </div>
            <div>
                <h3>Assessment</h3>
                <ol>
                    { Lesson[topicIndex].assessment.map(item => ( 
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