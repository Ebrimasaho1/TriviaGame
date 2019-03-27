//start button
 $("#start").click(function(){
    
 });
//function timelimit(){
    
//}
var targetDiv = document.getElementById(".startButton");
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "quesAns");

// document.getElementById("#start").html = ".quesAns";
console.log("check transition");

var index=0;
var questions = [{
    question: "Which planet is the biggest in the solar system?",
    answerOne: "Mars",
    answerTwo: "Neptune",
    answerThree: "Venus",
    answerFour: "Jupiter",
    rightAnswer: "Jupiter"
}];

function displayQuestions() {
$(".questions").text(questions[index].question);
$(".answerOne").text(questions[index].answerOne);
$(".answerTwo").text(questions[index].answerTwo);
$(".answerThree").text(questions[index].answerThree);
$(".answerFour").text(questions[index].answerFour);
}
displayQuestions();

$(".answer").on("click", function(){
var userAnswer = $(this).text();
console.log(userAnswer);

if(userAnswer===questions[index].answerFour){
    alert("Correct Answer!")
}
else {
    alert("Try again!")
}


});

// var index=1;
// var questions = [{
//     question: "How Jupiter acquired its outer swarm of moons?",
//     answerOne: "Co-Accretion",
//     answerTwo: "capture",
//     answerThree: "large Impact",
//     answerFour: "Fusion",
//     rightAnswer: "Capture"
// }];
