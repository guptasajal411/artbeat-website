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

$(".firstFooter").click(function () {
    if($(".firstCheckbox").is(":checked")){
        $(".firstCard").css("border", "0");
        $(".firstCheckbox").prop("checked",false);
    }
    else{
        $(".firstCard").css("border", "5px solid #0C63E4");
        $(".secondCard").css("border", "0");
        $(".thirdCard").css("border", "0");
        $(".secondCheckbox").prop("checked",false);
        $(".thirdCheckbox").prop("checked",false);
        console.log("checked")
        $(".firstCheckbox").prop("checked",true);
    }
})
$(".firstCheckbox").click(function () {
    if($(".firstCheckbox").is(":checked")){
        $(".firstCard").css("border", "0");
        $(".firstCheckbox").prop("checked",false);
    }
    else{
        $(".firstCard").css("border", "5px solid #0C63E4");
        $(".secondCard").css("border", "0");
        $(".thirdCard").css("border", "0");
        $(".secondCheckbox").prop("checked",false);
        $(".thirdCheckbox").prop("checked",false);
        console.log("checked")
        $(".firstCheckbox").prop("checked",true);
    }
})

$(".secondFooter").click(function () {
    if($(".secondCheckbox").is(":checked")){
        $(".secondCard").css("border", "0");
        $(".secondCheckbox").prop("checked",false);
    }
    else{
        $(".secondCheckbox").prop("checked",true);
        $(".secondCard").css("border", "5px solid #0C63E4");
        $(".thirdCard").css("border", "0");
        $(".firstCard").css("border", "0");
        $(".firstCheckbox").prop("checked",false);
        $(".thirdCheckbox").prop("checked",false);
        $(".secondCheckbox").prop("checked",true);
        console.log("checked");
    }
})

$(".secondCheckbox").click(function () {
    if($(".secondCheckbox").is(":checked")){
        $(".secondCard").css("border", "0");
        $(".secondCheckbox").prop("checked",false);
    }
    else{
        $(".secondCheckbox").prop("checked",true);
        $(".secondCard").css("border", "5px solid #0C63E4");
        $(".thirdCard").css("border", "0");
        $(".firstCard").css("border", "0");
        $(".firstCheckbox").prop("checked",false);
        $(".thirdCheckbox").prop("checked",false);
        console.log("checked");
        $(".secondCheckbox").prop("checked",true);
    }
})

$(".thirdFooter").click(function () {
    if($(".thirdCheckbox").is(":checked")){
        $(".thirdCard").css("border", "0");
        $(".thirdCheckbox").prop("checked",false);
    }
    else{
        $(".thirdCheckbox").prop("checked",true);
        $(".thirdCard").css("border", "5px solid #0C63E4");
        $(".firstCard").css("border", "0");
        $(".secondCard").css("border", "0");
        $(".firstCheckbox").prop("checked",false);
        $(".secondCheckbox").prop("checked",false);
        console.log("checked")
    }

})
$(".thirdCheckbox").click(function () {
    if($(".thirdCheckbox").is(":checked")){
        $(".thirdCard").css("border", "0");
        $(".thirdCheckbox").prop("checked",false);
    }
    else{
        $(".thirdCheckbox").prop("checked",true);
        $(".thirdCard").css("border", "5px solid #0C63E4");
        $(".firstCard").css("border", "0");
        $(".secondCard").css("border", "0");
        $(".firstCheckbox").prop("checked",false);
        $(".secondCheckbox").prop("checked",false);
        console.log("checked")
    }
})

