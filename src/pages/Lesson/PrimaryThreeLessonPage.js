import {AppLayout, Lesson} from '../../components';
import {Route, Switch, useRouteMatch,} from 'react-router-dom';


const tutorClass = "Primary 2";
const scheme = [
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
];




export const PrimaryThreeLessonPage = () => {
    let { path } = useRouteMatch();
    return(
        <AppLayout>
            <Switch>
                <Route path={`${path}/lesson-one`} exact>
                    <Lesson 
                        pupilClass={tutorClass} 
                        data={scheme[0]} 
                        nextpath={`${path}/lesson-two`}/>
                </Route>
                <Route path={`${path}/lesson-two`}>
                    <Lesson 
                        pupilClass={tutorClass} 
                        data={scheme[1]} 
                        nextpath={`${path}/lesson-three`}/>
                </Route> 
                <Route path={`${path}/lesson-three`}>
                    <Lesson 
                        pupilClass={tutorClass} 
                        data={scheme[2]} 
                        nextpath={"/lessons/primary-four"}/>
                </Route>        
            </Switch> 
        </AppLayout>
    );
};