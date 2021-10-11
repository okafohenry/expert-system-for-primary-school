import {AppLayout, Lesson} from '../../components';
import {Route, Switch, useRouteMatch,} from 'react-router-dom';


const tutorClass = "Primary 3";
const scheme = [
    {
        id: 1,
        topic: "Addition of Two and Three-Digit Numbers",
        text1: "The operation to find the total of different values is called addition. Let us know some facts about addition which will help us to learn to add 4-digit and 5-digit numbers.",
        img: "https://res.cloudinary.com/okafohenrie/image/upload/v1633965880/3rd-grade-addition_ddildy.png",
        text2: "Some rules of addition are:  (1) Addition of small numbers can be done horizontally, Example: 6 + 2 + 3 = 11.   (2) Large numbers are added in vertical columns (written under the place value chart).",
        text3: "Let us have a quick review of what we have learnt about addition of 3- digit number in the previous class. To add 2-digit numbers, the numbers are written one below the others. The tens and ones digits should appear are below the other.",
        assessment: [
            {
                question: "72 + 122  = _____",
                options: ["194", "104", "84" ],
                answer: "194"
            },
            {
                id: 32,
                question: "51 + 206 = _____",
                options: ["265", "716", "257" ],
                answer: "257"
            },
            {
                id: 33,
                question: "101 + 99 = _____",
                options: ["1011", "200", "198" ],
                answer: "200"
            }
        ]

    },
    {
        id: 2,
        topic: "Subtraction of Two and Three-Digit Numbers",
        text1: "The operation to finding the difference between two numbers is called subtraction. Let us know some facts about subtraction which will help us to learn subtraction of large numbers.",
        img: "https://res.cloudinary.com/okafohenrie/image/upload/v1633970175/grade-2-subtract-3-digit-numbers-with-regrouping_b4vjow.gif",
        text2: "Some facts about subtraction are: (1) Subtraction with small numbers can be worked out horizontally, Example: 8 – 5 = 3.  (2) Subtraction with large numbers is worked out vertically. Numbers are written under the place value chart.  (3) Zero subtracted from a number does not change the value of the number. (4) 1 subtracted from a number gives the predecessor of the number as the difference.",
        text3: "We know that subtraction is taking something away from a group of things. The terms used in subtraction are Minus, Less, Difference, Decrease, Take Away, Deduct. While finding the difference, we write the greater of the two given numbers on the top and them subtract.",
        assessment: [
            {
                question: "540 - 50 = ______",
                options: ["490", "480", "470" ],
                answer: "490"
            },
            {
                question: "300 - 299 = ______",
                options: ["11", "0", "1" ],
                answer: "1"
            },
            {
                question: "190 - 0",
                options: ["0", "1900", "190" ],
                answer: "190"
            }
        ]
    },
    {
        id: 3,
        topic: "Division",
        text1: "We have already learned division by repeated subtraction, equal sharing/distribution and by short division method. Now, we will read some facts about division to learn long division.",
        img: "https://res.cloudinary.com/okafohenrie/image/upload/v1633970174/grade-4-long-division-no-remainder_vio7f7.gif",
        text2: "(1). If the dividend is ‘zero’ then any number as a divisor will give the quotient as ‘zero’. Example: If ‘zero’ sweets are to be distributed among 8 children, naturally no one will get any sweets. (2). If the divisor is ‘1’ then any dividend will have the quotient equal to itself. Example: There are 15 sweets; each child is to get 1 sweet. How many children get the sweets? 15 children get the sweets.",
        text3: "Let us have a quick review of what we have learnt about division. Division is splitting into equal parts or groups, It is the result of “fair sharing”. If 5 friends want to share 15 chocolates. How many chocolates will each of them get? Let us divide the chocolates equally amongst them.   15 divided by 5 is 3. They get 3 each.",
        assessment: [
        {
            question: "15 / 15 = _____",
            options: ["1", "2", "3" ],
            answer: "1"
        },
        {
            id: 38,
            question: "0 / 15 = _____",
            options: ["1", "0", "15" ],
            answer: "0"
        },
        {
            id: 39,
            question: "15 / 3 = _____",
            options: ["3", "4", "5" ],
            answer: "5"
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
                        nextpath={`/advance-to-four`}/>
                </Route>        
            </Switch> 
        </AppLayout>
    );
};