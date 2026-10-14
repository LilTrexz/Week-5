let questions = [
  "Waar heeft 1CSD3 altijd les?",
  "Hoeveel vakken heeft 1CSD3?",
  "Wat is Rubin zijn achternaam?",
  "Hoe heet de clicker game die Dylan heeft gemaakt?",
  "Wat is de naam van de gele pokemon?",
  "Wat is Jesse zijn achternaam?",
  "Wat is Timmy?",
  "Waar staat KFC voor?",
  "Wat gebeurt er op Area 51?",
  "Wat is humor?",
];

let choices = [
  ["Vondellaan", "Straatweg", "Koningin Wilhelminalaan", "Koningsweg"],
  ["1", "5", "3", "4"],
  ["de Bruin", "Kunstman", "van Vugt", "Berenst"],
  ["Monster Clicker", "Cookie Clicker 2.0", "Star Wars", "Monster & Co"],
  ["Charizard", "Squirtle", "Mew", "Pickachu"],
  ["van den Oude School", "Zwart", "van den Bosse","Duikersloot"],
  ["Dylan's Hersentumor", "Dylan's vriend", "Dylan's broodtrommel", "Dylan's basketbal trainer"],
  ["De Klein Football Club", "Kentucky Fried Chicken", "Kip For Coen", "Een Rap Groep"],
  ["Dwerg Experimenten", "Kidnapping", "Bubblegum Machines Maken", "Alien Experimenten"],
  ["Een Grappig Grapje", "Dylan", "Jesse", "Rowan"],
];

let answers = [
  "Koningin Wilhelminalaan",
  "5",
  "de Bruin",
  "Monster Clicker",
  "Pickachu",
  "van den Bosse",
  "Dylan's Hersentumor",
  "Kentucky Fried Chicken",
  "Alien Experimenten",
  "Dylan",
];

let questionNumber = 0;
let score = 0;
let nextTimer = null;

let questionText;
let button1;
let button2;
let button3;
let button4;
let resultText;

let resetB;

let img;

function draw() {
  image(img, 0, 0, 800, 600);

  fill('#ffffff');
  rect(92.5, 47.5, 340, 20);
}

function setup() {
  createCanvas(800, 600);
  background(200);
  img = loadImage("download.png");

  questionText = createP("");
  questionText.position(100, 40);

  button1 = createButton("");
  button1.position(100, 120);

  button2 = createButton("");
  button2.position(100, 170);

  button3 = createButton("");
  button3.position(100, 220);

  button4 = createButton("");
  button4.position(100, 270);

  resultText = createP("");
  resultText.position(100, 300);

  button1.mousePressed(answer1);
  button2.mousePressed(answer2);
  button3.mousePressed(answer3);
  button4.mousePressed(answer4);

  showQuestion();

  resetB = createButton("Restart");
  resetB.style("width", "120px");
  resetB.style("height", "40px");
  resetB.style("font-size", "30px");
  resetB.position(680, 560);

  resetB.mousePressed(quizR);
}

function quizR() {
  clearTimeout(nextTimer);

  questionNumber = 0;
  score = 0;

  resultText.html("");
  button1.show();
  button2.show();
  button3.show();
  button4.show();

  showQuestion();
}

function showQuestion() {
  questionText.html(questions[questionNumber]);

  noStroke();
  button1.html(choices[questionNumber][0]);
  button2.html(choices[questionNumber][1]);
  button3.html(choices[questionNumber][2]);
  button4.html(choices[questionNumber][3]);

  resultText.html("");
}

function answer1() {
  checkAnswer(choices[questionNumber][0]);
}

function answer2() {
  checkAnswer(choices[questionNumber][1]);
}

function answer3() {
  checkAnswer(choices[questionNumber][2]);
}

function answer4() {
  checkAnswer(choices[questionNumber][3]);
}

function checkAnswer(answer) {
  clearTimeout(nextTimer);

  if (answer == answers[questionNumber]) {
    score++;
    resultText.html("Correct, you got it right!");
  } else {
    resultText.html("Wrong! It was " + answers[questionNumber]);
  }

  questionNumber++;

  if (questionNumber < questions.length) {
    nextTimer = setTimeout(showQuestion, 1000);
  } else {
    nextTimer = setTimeout(finishQuiz, 1000);
  }
}

function finishQuiz() {
  questionText.html("Quiz finished!");
  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();

  resultText.html("Your score: " + score + " / " + questions.length);
}