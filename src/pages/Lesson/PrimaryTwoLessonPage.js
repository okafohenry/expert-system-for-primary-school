import {AppLayout, Lesson} from '../../components';
import {Route, Switch, useRouteMatch,} from 'react-router-dom';



const tutorClass = "Primary 2";
const scheme = [
    {
        id: 1,
        topic: "Two-Digit Numbers",
        text1: "The 2 digit numbers begin with 10. After ten, the next two-digit number is 11. Then 12, 13, 14,… etc. are two digit numbers.       We see, the digits, 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 are placed gradually to the right of the digit 1. Thus, 10, 11, 12, 13, 14, 15, 16, 17, 18 and 19 are formed. Their number-names are ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen and nineteen.",
        img: "https://res.cloudinary.com/okafohenrie/image/upload/v1633769463/2-digit-numbers_bf7ynj.jpg",
        text2: "After (19) nineteen, the next number is (20) twenty. In numbers 10 to 19 there is digit 1 of the left side of the number. In each number from 10 to 19, this one represents ten and the right side digit represents digit’s value. As in 17, 1 represents one ten and 7 represents seven. The number one ten and seven is called seventeen. ",
        text3: "The two digit numbers have nine groups, i.e., 10 to 19, 20 to 29, 30 to 39, 40 to 49, 50 to 59, 60 to 69, 70 to 79, 80 to 89 and 90 to 99. Each group has 10 numbers. The total number of two digit numbers is 90.",
        assessment: [
        {
            question: "Identify the two-digit number",
            options: ["01", "9", "13" ],
            answer: "13"
        },
        {
            question: "Write 19 in words",
            options: ["Nineteen", "Seventeen", "Nine" ],
            answer: "Nineteen"
        },
        {
            question: "Two digit numbers end at _____?",
            options: ["90", "99", "10" ],
            answer: "99"
        }]

    },
    {
        id: 2,
        topic: "Greater than and Less than Symbols",
        text1: "To learn greater than and less than symbols its important to recall that every number on a number ray is greater than each number on its left and less than each number on its right. The symbol \">\" means \"greater than\" and the symbol \"<\" means \"less than\".",
        img: "https://res.cloudinary.com/okafohenrie/image/upload/v1633770562/greater_than_yue267.png",
        text2: "Example:",
        text3: "The smallest 2 digit number 10 appeared just after the greatest 1 digit number 9. So every 2 digit number is greater than every 1 digit number. Thus every 3 digit number is greater than every 2 digit number.",
        assessment: [{
            id: 24,
            question: "50 > 90",
            options: ["true", "false", "maybe" ],
            answer: "false"
        },
        {            
            id: 25,
            question: "25 is less than 40. Show this using symbol",
            options: ["25 > 40", "40 < 25", "25 < 40" ],
            answer: "25 < 40"
        },
        {
            id: 26,
            question: "which of this is true",
            options: ["100 < 99", "1 > 2", "13 > 3" ],
            answer: "13 > 3"
        }]
    },
    {
        id: 3,
        topic: "Odd and Even Numbers",
        text1: "An even number is a number that can be divided into two equal groups. An odd number is a number that cannot be divided into two equal groups.",
        img: "https://res.cloudinary.com/okafohenrie/image/upload/v1633787233/11-3_odvxfk.png",
        text2: "Even numbers end in 2, 4, 6, 8 and 0 regardless of how many digits they have (we know the number 5,917,624 is even because it ends in a 4!). Odd numbers end in 1, 3, 5, 7, 9.",
        assessment: [
        {
            question: "3    1    2    4    2    3    4    5    6    5    6    7    3    7    8    5    8    9    1  9. How many odd numbers are in this group of numbers?",
            options: ["10", "11", "12" ],
            answer: "12"
        },
        {
            question: "How many even numbers can be found when you count from 1 - 10?",
            options: ["4", "5", "6" ],
            answer: "5"
        },
        {
            question: "19 is an even number",
            options: ["true", "false", "maybe" ],
            answer: "false"
        }]
    }
];


export const PrimaryTwoLessonPage = () => {
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
                        nextpath={`/advance-to-three`}/> 
                </Route>        
            </Switch> 
        </AppLayout>
    );
};