let submitBtn = document.querySelector(".submitbtn");
let inputName = "";

submitBtn.addEventListener(('click'),(e)=>{
    e.preventDefault();
    inputName = document.getElementById('enterName').value;
    localStorage.setItem('inputName',inputName);
    window.location = "./testPage.html";
    
});


let disPin = document.querySelector(".dispin");
let genPin = document.querySelector(".genPin");

genPin.addEventListener(('click'),(e)=>{
    let secPin = Math.floor(Math.random() * 100000) + 1;
    disPin.innerHTML = secPin;
})

