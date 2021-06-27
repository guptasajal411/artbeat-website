$(".question-1").click(function(){
    $("#question-1-yes").css("padding-right", "5vw");
    $("#question-1-yes").css("background-color", "#5cb85c");
    $("#question-1-no").css("padding-left", "0.5vw");
    $("#question-1-no").css("padding-right", "0.5vw");
    $("#question-1-no").css("background-color", "#d9534f");
    $("#question-1-yes").css("color", "white");
    $("#question-1-no").css("color", "white");
    $("#question-1-yes").css("border-top-left-radius", "5px");
    $("#question-1-yes").css("border-bottom-left-radius", "5px");
    $("#question-1-no").css("border-top-right-radius", "5px");
    $("#question-1-no").css("border-bottom-right-radius", "5px");
})

$(".question-2").click(function(){
    $("#question-2-yes").css("padding-right", "4.5vw");
    $("#question-2-yes").css("background-color", "#5cb85c");
    $("#question-2-no").css("padding-left", "0.5vw");
    $("#question-2-no").css("padding-right", "0.5vw");
    $("#question-2-no").css("background-color", "#d9534f");
    $("#question-2-yes").css("color", "white");
    $("#question-2-no").css("color", "white");
    $("#question-2-yes").css("border-top-left-radius", "5px");
    $("#question-2-yes").css("border-bottom-left-radius", "5px");
    $("#question-2-no").css("border-top-right-radius", "5px");
    $("#question-2-no").css("border-bottom-right-radius", "5px");
})

$(".firstCheckbox").click(function () {
    $(".firstCard").css("border", "5px solid red!important");
    console.log("tru hai ji");
})