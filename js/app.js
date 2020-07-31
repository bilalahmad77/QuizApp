let questions = [
  {
    id: 1,
    question:"What is the name of capital of Pakistan?",
    answer:"Islamabad",
    options:[
        "Quetta",
        "Karachi",
        "Islamabad",
        "Peshawar"
    ]
    },

  {
    id: 2,
    question:"What is the name of national tree of Pakistan?",
        answer:"Himalayan Cedar",
        options:[
            "Osier",
            "Himalayan Cedar",
            "Oak",
            "Pine"
    ]
  },
  {
    id: 3,
    question:"What is the name of national animal of Pakistan?",
    answer:"Markhor",
    options:[
        "Markhor",
        "Cow",
        "Sheep",
        "Goat"

    ]
  },

  {
    id: 4,
    question:"What is the name of national flower of Pakistan?",
    answer:"Jasmine",
    options:[
        "Rose",
        "Tulip",
        "Jasmine",
        "Lily"

    ]
  }
];

let question_count = 0;
let points = 0;
let user_points =0;

window.onload = function() {
  show(question_count);

};

function next() {
 

  if (question_count == questions.length - 1) {

    location.href = "result.html";
  }


  let user_answer = document.querySelector("li.option.active").innerHTML;

  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }


  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [ans_choice_first, ans_choice_second, ans_choice_third, ans_choice_fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${ans_choice_first}</li>
  <li class="option">${ans_choice_second}</li>
  <li class="option">${ans_choice_third}</li>
  <li class="option">${ans_choice_fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

user_points = sessionStorage.getItem("points");
document.querySelector("span.points").innerHTML = user_points;
