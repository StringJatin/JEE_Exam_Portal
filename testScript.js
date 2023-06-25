document.addEventListener("DOMContentLoaded", function () {
    let testContainer = document.querySelector(".testcontainer");
    let inputName = localStorage.getItem('inputName');
    let topRightContainer = document.querySelector(".topRightContainer");
    // topRightContainer.innerHTML = inputName;

    //set quizData
    const quizData = [{
        Question: "A child stands on the edge of the cliff 10 m above the ground and throws a stone horizontally with an initial speed of 5 ms−1. Neglecting the air resistance, the speed with which the stone hits the ground will be __ ms−1 (given, 𝑔=10 ms−2 ).",
        A: "15",
        B: "20",
        C: "30",
        D: "25",
        correct: "A",
    },
    {
        Question: "Let 𝜎 be the uniform surface charge density of two infinite thin plane sheets shown in figure. Then the electric fields in three different region 𝐸𝐼,𝐸𝐼𝐼 and 𝐸𝐼𝐼𝐼 are: ",
        A: "15",
        B: "20",
        C: "30",
        D: "25",
        correct: "C",
    },
    {
        Question: "If earth has a mass nine times and radius twice to that of a planet P. Then 𝑣𝑒 3 √𝑥 ms−1 will be the minimum velocity required by a rocket to pull out of gravitational force of P, where 𝑣𝑒 is escape velocity on earth. The value of 𝑥 is ",
        A: "1",
        B: "3",
        C: "18",
        D: "2",
        correct: "D",
    },
    {
        Question: "'𝑛' polarizing sheets are arranged such that each makes an angle 45∘ with the preceeding sheet. An unpolarized light of intensity I is incident into this arrangement. The output intensity is found to be 𝐼/64. The value of 𝑛 will be:",
        A: "4",
        B: "3",
        C: "5",
        D: "6",
        correct: "D",
    },
    {
        Question: "A proton moving with one tenth of velocity of light has a certain de Broglie wavelength of 𝜆. An alpha particle having certain kinetic energy has the same de-Brogle wavelength 𝜆. The ratio of kinetic energy of proton and that of alpha particle is: ",
        A: "2:1",
        B: "1:2",
        C: "1:4",
        D: "4:1",
        correct: "C",
    },
    {
        Question: "A block of mass 5 kg is placed at rest on a table of rough surface. Now, if a force of 30 N is applied in the direction parallel to surface of the table, the block slides through a distance of 50 m in an interval of time 10 s. Coefficient of kinetic friction is (given, g=10 ms−2 ): ",
        A: "0.60",
        B: "0.25",
        C: "0.75",
        D: "0.50",
        correct: "D",
    },
    {
        Question: "Given below are two statements:  <br> Statement I: Acceleration due to gravity is different at different places on the surface of earth.  Statement II: Acceleration due to gravity increases as we go down below the earth's surface.  In the light of the above statements, choose the correct answer from the options given below ",
        A: "Statement I is false but Statement II is true",
        B: "Statement I is true but Statement II is false",
        C: "Both Statement I and Statement II are false",
        D: "Both Statement I and Statement II are true",
        correct: "B",
    },
    {
        Question: "A child stands on the edge of the cliff 10 m above the ground and throws a stone horizontally with an initial speed of 5 ms−1. Neglecting the air resistance, the speed with which the stone hits the ground will be __ ms−1 (given, 𝑔=10 ms−2 ).",
        A: "15",
        B: "20",
        C: "30",
        D: "25",
    },
    {
        Question: "A child stands on the edge of the cliff 10 m above the ground and throws a stone horizontally with an initial speed of 5 ms−1. Neglecting the air resistance, the speed with which the stone hits the ground will be __ ms−1 (given, 𝑔=10 ms−2 ).",
        A: "15",
        B: "20",
        C: "30",
        D: "25",
    },
    {
        Question: "A child stands on the edge of the cliff 10 m above the ground and throws a stone horizontally with an initial speed of 5 ms−1. Neglecting the air resistance, the speed with which the stone hits the ground will be __ ms−1 (given, 𝑔=10 ms−2 ).",
        A: "15",
        B: "20",
        C: "30",
        D: "25",
    },
    {
        Question: "A child stands on the edge of the cliff 10 m above the ground and throws a stone horizontally with an initial speed of 5 ms−1. Neglecting the air resistance, the speed with which the stone hits the ground will be __ ms−1 (given, 𝑔=10 ms−2 ).",
        A: "15",
        B: "20",
        C: "30",
        D: "25",
    },
    {
        Question: "A child stands on the edge of the cliff 10 m above the ground and throws a stone horizontally with an initial speed of 5 ms−1. Neglecting the air resistance, the speed with which the stone hits the ground will be __ ms−1 (given, 𝑔=10 ms−2 ).",
        A: "15",
        B: "20",
        C: "30",
        D: "25",
    },
    {
        Question: "A child stands on the edge of the cliff 10 m above the ground and throws a stone horizontally with an initial speed of 5 ms−1. Neglecting the air resistance, the speed with which the stone hits the ground will be __ ms−1 (given, 𝑔=10 ms−2 ).",
        A: "15",
        B: "20",
        C: "30",
        D: "25",
    },
    {
        Question: "A child stands on the edge of the cliff 10 m above the ground and throws a stone horizontally with an initial speed of 5 ms−1. Neglecting the air resistance, the speed with which the stone hits the ground will be __ ms−1 (given, 𝑔=10 ms−2 ).",
        A: "15",
        B: "20",
        C: "30",
        D: "25",
    },
    {
        Question: "A child stands on the edge of the cliff 10 m above the ground and throws a stone horizontally with an initial speed of 5 ms−1. Neglecting the air resistance, the speed with which the stone hits the ground will be __ ms−1 (given, 𝑔=10 ms−2 ).",
        A: "15",
        B: "20",
        C: "30",
        D: "25",
    },
    {
        Question: "A child stands on the edge of the cliff 10 m above the ground and throws a stone horizontally with an initial speed of 5 ms−1. Neglecting the air resistance, the speed with which the stone hits the ground will be __ ms−1 (given, 𝑔=10 ms−2 ).",
        A: "15",
        B: "20",
        C: "30",
        D: "25",
    },
    ];
    let questionNo = -1;
    let questionDisplay = document.querySelector(".questionDisplay");
    let questionNavbar = document.querySelector(".questionNavbar");
    let previousBtn = document.querySelector(".previous");
    let a_text = document.getElementById("a_text");
    let b_text = document.getElementById("b_text");
    let c_text = document.getElementById("c_text");
    let d_text = document.getElementById("d_text");
    let clearResponse = document.querySelector(".clearResponse");
    let answers = document.querySelectorAll(".answer");
    let review = document.querySelector(".review");
    let q1 = document.getElementById("1");
    let q2 = document.getElementById("2");
    let q3 = document.getElementById("3");
    let q4 = document.getElementById("4");
    let q5 = document.getElementById("5");
    let q6 = document.getElementById("6");
    let quesBtn = document.querySelectorAll(".quesBtn");
    const storedInputName = localStorage.getItem('inputName');
    let name = document.getElementById("name");
    name.innerHTML = `Name: ${storedInputName}`;
    let positiveScore= 0;
    let negativeScore=0;
    loadQuiz();

    function deselectOptions(){
        answers.forEach((answer)=>{
            answer.checked = false;
        })
    }
    function getSelected(){
        let selected = "";
        Array.from(answers).forEach((answer)=>{
            if(answer.checked){
              selected = answer.id;
              console.log(selected);  
            }
        })
        return selected;
    
    }
    function loadQuiz() {
        deselectOptions();
        questionNo++;
        questionNavbar.innerHTML = `Question No. ${questionNo + 1}`;

        questionDisplay.innerHTML = quizData[questionNo].Question;
        a_text.innerHTML = quizData[questionNo].A;
        b_text.innerHTML = quizData[questionNo].B;
        c_text.innerHTML = quizData[questionNo].C;
        d_text.innerHTML = quizData[questionNo].D;
    }

    //Next button
    let nextBtn = document.querySelector(".next");
    nextBtn.addEventListener(('click'), (e) => {
        e.preventDefault();
        // deselectOptions();
        
        const quesBtnArray = Array.from(quesBtn);
        answers.forEach((answer)=>{
            // console.log(answer.checked)
           if (answer.checked){
           let selected = getSelected();
        //    console.log(quizData[questionNo].correct)
           if(selected == quizData[questionNo].correct){
            positiveScore++;
           }
           else{
            negativeScore++;
           }
        //    console.log(positiveScore);
            // console.log("Ckecked is true");
            quesBtnArray.forEach((question)=>{
                if(question.textContent == (questionNo+1)){
                    question.style.backgroundColor = "green";
                }
            })
           }

        })
       
        loadQuiz();
        

    })

    //previous button

    previousBtn.addEventListener(('click'), (e) => {
        e.preventDefault();
        questionNo--;
        if (questionNo <= 1) {
            questionNo = 0;
            questionNavbar.innerHTML = `Question No. 1`;
        questionDisplay.innerHTML = quizData[questionNo].Question;
        a_text.innerHTML = quizData[questionNo].A;
        b_text.innerHTML = quizData[questionNo].B;
        c_text.innerHTML = quizData[questionNo].C;
        d_text.innerHTML = quizData[questionNo].D;

        }
        else{
        questionNavbar.innerHTML = `Question No. ${questionNo + 1}`;
        questionDisplay.innerHTML = quizData[questionNo].Question;
        a_text.innerHTML = quizData[questionNo].A;
        b_text.innerHTML = quizData[questionNo].B;
        c_text.innerHTML = quizData[questionNo].C;
        d_text.innerHTML = quizData[questionNo].D;
        }
     })


     //clear response
     clearResponse.addEventListener(('click'),(e)=>{
        deselectOptions();
     });

     //review
     review.addEventListener(('click'),(e)=>{
        e.preventDefault();
        const quesBtnArray = Array.from(quesBtn);
        quesBtnArray.forEach((question)=>{
            if(question.textContent == (questionNo+1)){
                question.style.backgroundColor = "purple";
            }
        })



        loadQuiz();
     });



});

let total_Seconds = 60 * 180;
let c_minute = parseInt(total_Seconds / 60);
let c_seconds = parseInt(total_Seconds % 60);
function checkTime() {
    document.getElementById("timer").textContent = `Time left: ${c_minute} Min ${c_seconds} sec`;
    total_Seconds = total_Seconds - 1;
    c_minute = parseInt(total_Seconds / 60);
    c_seconds = parseInt(total_Seconds % 60);
    setTimeout("checkTime()", 1000);
}
setTimeout("checkTime()", 1000);