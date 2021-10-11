import {AppLayout, Lesson} from '../../components';
import {Route, Switch, useRouteMatch,} from 'react-router-dom';

const tutorClass = "Primary 1";
const scheme = [
    {
        id: 1,
        topic: "Whole Numbers ( 1- 10 )",
        text1: "In mathematics, whole numbers are the basic counting numbers nn0, 1, 2, 3, 4, 5, 6, … and so on. Whole numbers can continue until infinity, or without end.",
        img: "https://res.cloudinary.com/okafohenrie/image/upload/v1633763911/1547180043_Whole-Numbers-0-1-2-3-4_twd5b1.png",
        text2: "Whole numbers include positive numbers along with 0, Whole numbers cannot be negative. Also, a whole number cannot be a fraction",
        assessment: [
            {         
                question: "Identify the whole number",
                options: ["5.5", "5", "-5" ],
                answer: "5"
            },
            {
                question: "1 is a whole number",
                options: ["true", "false", "maybe" ],
                answer: "true"
            },
            {
                question: "Choose the whole number",
                options: ["4", "-2", "3.5" ],
                answer: "4"
            }
        ]
    }, 
    {
        id: 2,
        topic: "Addition of 1-digit Numbers (0 - 9)",
        text1: "Understand the concept of adding 1-digit number with the help of objects as well as numbers. You have two chocolates, I gave you one, How many will you have? There are 3 chocolates in all. Find the numbers from the image",
        img: "https://res.cloudinary.com/okafohenrie/image/upload/v1633763915/f6cf2826cbc22f025defeb4937018b69_f8cu8l.png",
        text2: "The sign '+' is called the plus sign. For example: '2 + 4 = 6' means that the numbers 2 and 4 on either side of it are to be added together. The sign '=' means  ‘is equal to’. Here it tells us that when the numbers 2 and 4 are added together we get 6.",
        assessment: [
            {
                question: "3 + 2 = ____?",
                options: ["3", "4", "5" ],
                answer: "5"
            },
            {
                question: "When you add 2 apples and 5 apples, how many apples will you have ?",
                options: ["5", "6", "7" ],
                answer: "7"
            },
            {           
                question: "1 pencil + 2 pencils = ___ pencils?",
                options: ["3", "4", "5" ],
                answer: "3"
            }
        ]

    },
    {
        id: 3,
        topic: "Subtraction of 1-digit Numbers (0-9)",
        text1: "Subtraction means to take away. If you have three chocolates and I take one away, how many will you have left? You will have two chocolates left. Find the missing numbers",
        img: "https://res.cloudinary.com/okafohenrie/image/upload/v1633763912/subtraction-worksheet-thumbnail-preview-31f8f896-e446-4310-a99c-b43dcd952d0b-327x440_q0vrrs.jpg",
        text2:  "The sign '-' is called the minus sign. For example: '4 - 3 = 1' means that when 3 is taken away from 4 we have 1 remaining. ",
        assessment: [
        {
            question: "If you have 5 mangoes and you give 2 mangoes to David, how many mangoes will you have left?",
            options: ["1 mango", "2 mangoes", "3 mangoes" ],
            answer: "3 mangoes"
        },
        {
            question: "3 books - 2 books = ___ books?",
            options: ["1", "2", "3" ],
            answer: "1"
        },
        {
            question: "7 - 5 = _____ ?",
            options: ["1", "2", " 3" ],
            answer: "2"
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
                        nextpath={`/advance-to-two` }/> 
                </Route>        
            </Switch> 
        </AppLayout>
    );
};