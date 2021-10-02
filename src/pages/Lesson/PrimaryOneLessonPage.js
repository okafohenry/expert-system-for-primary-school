import {AppLayout, Lesson} from '../../components';
import {Route, Switch, useRouteMatch,} from 'react-router-dom';

const tutorClass = "Primary 1";
const scheme = [
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
                answer: "option 3"
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
                        nextpath={"/lessons/primary-two/lesson-one"}/>
                </Route>        
            </Switch> 
        </AppLayout>
    );
};