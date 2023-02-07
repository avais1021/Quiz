// const questions = [
//     {
//         'que' : 'Which of the following is a markup language?',
//         'a' : 'HTML',
//         'b' : 'CSS' , 
//         'c' : 'Javascript',
//         'd' : 'PHP',
//         'correct' : 'a' ,
//     } ,
//     {
//         'que' : 'What year was javascript launched?' , 
//         'a' : '1996' , 
//         'b' : '1995' , 
//         'c' : '1994' , 
//         'd' : 'none of the above' ,
//         'correct' : 'b' ,
//     } ,
//     {
//         'que' : 'What does CSS stands for?' , 
//         'a' : 'Hypertext Markup Language' ,
//         'b' : 'Cascading style Sheet' ,
//         'c' : 'Jason Object Notation' ,
//         'd' : 'Helicopter Terminals Motorboats Lamborginis' ,
//         'correct' : 'b' ,
//     }
// ];

// console.log(questions)

const questions = [
    {
        'que': ') ----- kare insaan to kya nahi hosakta ?',
        'a': 'naukri',
        'b': 'himmat',
        'c': 'kaam',
        'd': 'irada',
        'correct': 'b',
    },
    {
        'que': ') wo ----- se aag bagola hogaya ?',
        'a': 'khane',
        'b': 'dekhne',
        'c': 'gusse',
        'd': 'pani',
        'correct': 'c',
    },
    {
        'que': ') hindustan ka qaumi janwar konsa he ?',
        'a': 'hathi',
        'b': 'mor',
        'c': 'sher',
        'd': 'heeran',
        'correct': 'c',
    },
    {
        'que': ') hindustan ka qaumi phool konsa he ?',
        'a': 'gulab',
        'b': 'chameli',
        'c': 'kanval',
        'd': 'lili',
        'correct': 'c',
    },
]

let index = 0;
const qustionBox = document.getElementById("qustionBox");
const optionsinput = document.querySelectorAll(".optionsinput");
let total = questions.length;
let right = 0,
    wrong = 0;


const loadQustion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset();
    const data = questions[index];
    // console.log(data);
    // qustionBox.innerHTML = (index + 1) + data.que;
    qustionBox.innerHTML = `${index + 1} ${data.que}`;
    optionsinput[0].nextElementSibling.innerText = data.a;
    optionsinput[1].nextElementSibling.innerText = data.b;
    optionsinput[2].nextElementSibling.innerText = data.c;
    optionsinput[3].nextElementSibling.innerHTML = data.d;
}


const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans == data.correct) {
        // console.log("passed")
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQustion();
    return;
}

const getAnswer = () => {
    let answer;
    optionsinput.forEach((input) => {
        if (input.checked) {
            //   console.log(input.value);
            answer = input.value;

        }
    })
    return answer;
}

const reset = () => {
    optionsinput.forEach((input) => {
        input.checked = false;
    })
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h2 id="qustionBox">Thank you for playing the quiz</h2>
    <h2> ${right} / ${total} are correct</h2>
    <h3> answers : </h3>
    <h4>Q1----himmat</h4>
    <h4>Q2----gusse</h4>
    <h4>Q3----sher</h4>
    <h4>Q4----kanval</h4>
    <button id="resbtn">Restart</button>
    `
    document.getElementById("resbtn").addEventListener("click" , function(){
        window.location.reload();
    })
}

// initial call   (function call to page load )
loadQustion();

