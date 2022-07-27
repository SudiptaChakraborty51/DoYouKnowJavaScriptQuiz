var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

console.log(chalk.bold.black.bgCyan("DO YOU KNOW JAVASCRIPT QUIZ"));
console.log(" ");
var userName = readlineSync.question("What is your name? : ");

console.log("Welcome "+chalk.bold.cyan(userName)+" to DO YOU KNOW JAVASCRIPT Quiz");
console.log(" ");
console.log("RULES OF THE QUIZ are...");
console.log("Enter 'a' or 'b' or 'c' for your answer");
console.log("For every right answer your score will be increased by 2");
console.log("For every wrong answer your score will be decreased by 1");
console.log("There are 5 questions in level 1 and 3 questions in level 2");
console.log("To qualify for level 2, you have to get 10 score");
console.log("All The Best!");
console.log("...............................................................");
console.log(" ");
console.log(chalk.bold.bgCyan("Level 1"));
console.log(" ");

function quiz(question, answer, correct, n){
  var userAnswer = readlineSync.question(chalk.bold.blue("Q"+n+": "+question));
  console.log(" ");
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.bold.green("Yeah! You are right"));
    score = score + 2;
    console.log(chalk.bold.magenta("Your current score is : "+score));
  }else{
    console.log(chalk.bold.red("Oh! You are wrong"));
    score = score - 1;
    console.log(chalk.bold.blueBright("Correct answer is : "+correct));
    console.log(chalk.bold.magenta("Your current score is : "+score));
    console.log(" ");
  }
}

var questionList1 = [
  {
    question: `Javascript is an _______ language?
    a: Object Oriented
    b: Procedural
    c: Object Based\n`,
    answer: "a",
    correct:"Object Oriented"
  },
  {
    question: `Which of the following keywords is used to define a variable in Javascript?
    a: var
    b: let
    c: both\n`,
    answer: "c",
    correct:"both"
  },
  {
    question: `Upon encountering empty statements, what does the Javascript Interpreter do?
    a: throws an error 
    b: ignore the statements
    c: gives a warning\n`,
    answer: "b",
    correct:"ignore the statements"
  },
  {
    question: `When an operator’s value is NULL, the typeof returned by the unary operator is:
    a: Boolean
    b: Undefined
    c: Object\n`,
    answer: "c",
    correct:"Object"
  },
  {
    question: `Which of the following is not a Javascript framework?
    a: React
    b: Cassandra
    c: Node\n`,
    answer: "b",
    correct:"Cassandra"
  }
];

var questionList2 = [
  {
    question: `What keyword is used to declare an asynchronous function in Javascript?
    a: async
    b: await
    c: setTimeout\n`,
    answer: "a",
    correct:"async"
  },
  {
    question: `Which of the following object is the main entry point to all client-side JavaScript features and APIs?
    a: Position
    b: Window
    c: Location\n`,
    answer: "b",
    correct:"Window"
  },
  {
    question: `Which of the following is not an error in JavaScript?
    a: Missing of Bracket
    b: Division by zero
    c: Syntax error\n`,
    answer: "b",
    correct:"Division by zero"
  }
];

function play1(){
  for(var i=0; i<questionList1.length; i++){
  quiz(questionList1[i].question, questionList1[i].answer, questionList1[i].correct, i+1);
}
}
play1();

function play2(){
  for(var i=0; i<questionList2.length; i++){
  quiz(questionList2[i].question, questionList2[i].answer, questionList2[i].correct, i+1);
}
}

if(score >= 10){
  console.log(chalk.bold.bgMagenta("Congratualations! You are qualified for level 2"));
  console.log(" ");
  console.log(chalk.bold.bgCyan("Level 2"));
  play2();
}else{
  console.log(chalk.bold.red("Sorry you can't qualify for level 2"));
}

var highScores = 
{
  name: "Sudipta",
  score: 16
};
var userScores = 
{
  name: userName,
  score: score
};

console.log(" ");
console.log(".........................................................................");
console.log(chalk.cyan.bold("Thanks "+userName+" for attempting this quiz!"));
console.log(chalk.bold.greenBright("Your Score is = "+score));
if(userScores.score >= highScores.score){
  console.log(chalk.bold.green("Hurrah! You has beatean the highscore"));
}else{
  console.log(chalk.bold.yellow("HighScore is = "+highScores.score));
}