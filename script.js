const quiz=[
    {
       question: "1)  CSS stands for -",
        
       a: "Cascade style sheets",
       b: "Color and style sheets",
       c: "Cascading style sheets",
       d: "None of the above",
       ans:"ans3"

    },
    {
        question: "2) Which organization defines Web standards? ",

        a: " Apple Inc.",
        b:"IBM Corporation",
        c:"World Wide Web Consortium",
        d:"Microsoft Corporation",
        ans:"ans3"

    },
    { question: "3) Who is the father of HTML? ",
        a: "Rasmus Lerdorf",
        b: "Tim Berners-Lee",
        c: "Brendan Eich",
        d: "Sergey Brin",
        ans:"ans2"

    },
    {  question: "4) HTML tags with no content are called :  ",
    a: "Special tags",
    b: "Advanced tags",
    c: "Empty tags",
    d: "Other tags",
    ans:"ans3"

    },
    { question: "5) What is DOM in HTML? ",

    a: " Language dependent application programming",
    b:"Hierarchy of objects in ASP.NET",
    c:"Application programming interface",
    d:"Convention for representing and interacting with objects in html documents",
    ans:"ans4"

    },
];

const question= document.querySelector('.question');

const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');

const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');


let questionCount = 0 ;
let score = 0 ;


const loadQuestion = () => {

  const questionList = quiz[questionCount];
  question.innerHTML = questionList.question ;

  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer ;

    answers.forEach(

        (curAnsElem) =>
    {
        if(curAnsElem.checked)
        {
            answer = curAnsElem.id ;
        }
    }

    );

    return answer ;

};

const removeAll = () => {

    answers.forEach(

        (curAnsElem) =>
    {
      curAnsElem.checked = false ;
    }
    
    );
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quiz[questionCount].ans)
    {
        score++;
    }

    questionCount++;

    removeAll();

    if(questionCount < quiz.length)
    {
        loadQuestion();
    }
    else
    {
       
        showScore.innerHTML = `<h3> Your Score is  ${score}/ ${quiz.length}  </h3>
        <button class="btn" onclick="location.reload()"> Practise Again  </button> 
        `;

        showScore.classList.remove('scoreArea');
    }



});


