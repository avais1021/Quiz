const questions = [
    {
        'que' : '--- kare insaan to kya nahi hosakta ?' ,
        'a' : 'naukri' , 
        'b' : 'himmat' , 
        'c' : 'kaam' ,
        'd': 'irada',
        'correct': 'b' ,
    } , 
    {
        'que' : ' wo --- se aag bagola hogaya ?' ,
        'a' : 'khane' , 
        'b' : 'dekhne' ,
        'c' : 'gusse' , 
        'd': 'pani',
        'correct' : 'c' ,
    },
]


let index = 0 ;
const qustionBox = document.getElementById("qustionBox");
const optionsinput = document.querySelectorAll(".optionsinput");
let total = questions.length;
let right = 0,
    wrong = 0;


const loadQustion = () =>{
    if (index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    qustionBox.innerHTML = `${index + 1} ${data.que}`;
    optionsinput[0].nextElementSibling.innerHTML = data.a;
    optionsinput[1].nextElementSibling.innerHTML = data.b;
    optionsinput[2].nextElementSibling.innerHTML = data.c;
    optionsinput[3].nextElementSibling.innerHTML = data.d;
    console.log(data)
}

const submitQuiz = () =>{
    const data = questions[index];
    const ans = getAnswer();
    if (ans == data.correct){
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
        if(input.checked){
            answer = input.value ;
        }
    })
    return answer;
}

const reset = () =>{
    optionsinput.forEach((inputs)=>{
        inputs.checked = false;
    })
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <h2 id="qustionBox">Thank you for playing the quiz</h2>
    <h2> ${right} / ${total} are correct</h2>
    <button id="resbtn">Restart</button>
    `
    document.getElementById("resbtn").addEventListener("click" , function(){
        window.location.reload();
    })
}

// initial call (function call on page )
loadQustion();
