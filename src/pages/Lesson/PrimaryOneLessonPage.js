import {useState} from 'react';


const lesson = [
    {
        id: 1,
        topic: "",
        text: "",
        img: "",
        assessment: {
            question: "",
            options: ["option 1", "option 2", "option 3" ],
            answer: "a"
        }

    },{
        id: 2,
        topic: "",
        text: "",
        img: "",
        assessment: {
            question: "",
            options: ["option 1", "option 2", "option 3" ],
            answer: "b"
        }
    }, {
        id: 3,
        topic: "",
        text: "",
        img: "",
        assessment: {
            question: "",
            options: ["option 1", "option 2", "option 3" ],
            answer: "c"
        }
    }
]

export const PrimaryOneLessonPage = () => {   

    const [ assessmentScore, setAssessmentScore ] = useState(0);

    return(
        <div>Primary One Lesson Page</div>
    );
};