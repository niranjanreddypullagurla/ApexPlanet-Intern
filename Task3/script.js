const quiz=[
    {
        question: "What does Html stand for?",
        options: ["Hyper Text Markup Language","High Text Machine Language","HyperLinks Text Markup"],
        answer:0
    },
    {
        question: "Which language is used for styling webpages?",
        options:["HTML","CSS","Java"],
        answer:1
    },
    {
        question:"Which language adds interactivity to websites?",
        options:["CSS","Java","JavaScript"],
        answer:2
    }
];

let currentIndex=0;

function loadQuestion(){
    document.getElementById("result").innerText="";
    document.getElementById("question").innerText=quiz[currentIndex].question;

     const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  quiz[currentIndex].options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const result = document.getElementById("result");
  if (selected === quiz[currentIndex].answer) {
    result.innerText = "Correct ✅";
    result.style.color = "green";
  } else {
    result.innerText = "Wrong ❌";
    result.style.color = "red";
  }
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText = "Quiz Completed 🎉";
    document.getElementById("options").innerHTML = "";
    document.getElementById("result").innerText = "";
    document.getElementById("nextBtn").style.display = "none";
  }
}
loadQuestion();


function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").innerText =
        data.setup + " 😂 " + data.punchline;
    });
}