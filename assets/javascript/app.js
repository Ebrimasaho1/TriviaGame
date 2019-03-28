//start button
$(".quesAns").hide();

$("#start").click(function () {
    $(".startButton").hide();
    displayQuestions();
    $(".quesAns").show();

});

console.log("check transition");

var index = 0;
var questions = [{
    question: "Which planet is the biggest in the solar system?",
    answerOne: "Mars",
    answerTwo: "Neptune",
    answerThree: "Venus",
    answerFour: "Jupiter",
    rightAnswer: "Jupiter"
},
{
    question: "How Jupiter acquired its outer swarm of moons?",
    answerOne: "Co-Accretion",
    answerTwo: "Capture",
    answerThree: "large Impact",
    answerFour: "Fusion",
    rightAnswer: "Capture"
},
{
    question: " What is the approximate distance of the Earth from the Sun in au?",
    answerOne: "1",
    answerTwo: "15",
    answerThree: "13",
    answerFour: "20",
    rightAnswer: "1"

}];


function displayQuestions() {
    $(".showAns").text("");
    var timer = 15;
    intervalId = setInterval(decreaseTime, 1000);
    function decreaseTime() {
        timer--;
        $("#display").text(timer);

        if (timer === 0) {
            index++;
            clearInterval(intervalId);
            setTimeout(displayQuestions, 5000);
        }
    }

    $(".questions").text(questions[index].question);
    $(".answerOne").text(questions[index].answerOne);
    $(".answerTwo").text(questions[index].answerTwo);
    $(".answerThree").text(questions[index].answerThree);
    $(".answerFour").text(questions[index].answerFour);
}


$(".answer").on("click", function () {
    var userAnswer = $(this).text();
    console.log(userAnswer);

    if (userAnswer === questions[index].rightAnswer) {
        // $("img").show();
        console.log("Correct Answer!");
        $(".showAns").text("Correct Answer!");
    }
    else {
        console.log("Try again!");
        $(".showAns").text("Wrong Answer!")
    }
    clearInterval(intervalId);
    index++;
    setTimeout(displayQuestions, 2000);

});






