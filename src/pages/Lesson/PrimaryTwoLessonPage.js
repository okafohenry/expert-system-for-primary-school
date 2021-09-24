import {useState} from 'react';

export const PrimaryOneLessonPage = () => {

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

    const [ assessmentScore, setAssessmentScore ] = useState(0);

    return(
        <div></div>
    );
};