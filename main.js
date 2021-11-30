let obj = [{
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Makeup Language",
        ans: "ans3",
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1",
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4",
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1",
    },
    {
        question: "Q5: What is the full form of RAM?",
        a: "Random Access Memory",
        b: "Random Accept Memory",
        c: "Run Around Move",
        d: "Random Arrive Mail",
        ans: "ans1",
    }


];

let que = document.getElementById('ques');
let a = document.getElementById('answ1');
let b = document.getElementById('answ2');
let c = document.getElementById('answ3');
let d = document.getElementById('answ4');
let btn = document.getElementById('btn');
let score = document.getElementById('score');
let points = document.getElementById('points');
let btn1 = document.getElementById('btn1');

let ans = document.querySelectorAll('.form-check-input');


let i = 0;

function show(i) {
    que.innerHTML = obj[i].question;
    a.innerHTML = obj[i].a;
    b.innerHTML = obj[i].b;
    c.innerHTML = obj[i].c;
    d.innerHTML = obj[i].d;



}

show(i);
const check = () => {
    let ans1;
    ans.forEach((ele) => {
        if (ele.checked) {
            ans1 = ele.id;
        }
    });
    return ans1;
}

function clear1() {
    ans.forEach((ele) => {
        if (ele.checked) {
            ele.checked = false;
        }
    });
}



btn.addEventListener('click', () => {


    let ans1 = check();

    if (ans1 === obj[i].ans) {
        i++;
        if (i == obj.length) {

            score.style.display = "inline-block";


            points.innerHTML = `Score is :${i}/${obj.length}`;
            i = 0;
            btn1.addEventListener('click', () => {
                show(i);
                clear1();
                score.style.display = "none";

            });


        } else {
            score.style.display = "inline-block";
            points.innerHTML = `Score is :${i}/${obj.length}`;
            btn1.addEventListener('click', () => {
                show(i);
                clear1();
                score.style.display = "none";

            });
        }


    } else {

        score.style.display = "inline-block";
        points.innerHTML = `Sorry your answer is Wrong !`;
        btn1.innerHTML = `Try again`;
        btn1.addEventListener('click', () => {
            show(i);
            clear1();
            score.style.display = "none";
            btn1.innerHTML = `Next`;

        });

    }



});