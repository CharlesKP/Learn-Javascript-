function variable() {
    let input = document.getElementById('variableInput').value;                                         //input from user value

    $('#variable-result').css({'color':'blue'});

    if (isNaN(input) === false) {                                                                       //if input isn't a number then
        document.getElementById('variable-result').innerHTML = "That input is a number! " + input;
    } else if (input === "false" || input === "true") {                                                 //else if input is true or false then boolean
        document.getElementById('variable-result').innerHTML = "That input is a boolean! " + input;
    } else if (input.charAt(0) === '"' && input.charAt(input.length - 1) === '"') {                     //else if character at index 0 and last index both are "" then it's a string
        document.getElementById('variable-result').innerHTML = "That input is a string! " + input;
    } else {                                                                                            //else (eg: input string without quotation) check what the variable definitions
        $('#variable-result').css({'color':'red'});
        document.getElementById('variable-result').innerHTML = "Your input was not a number(6), boolean(false) or string(\"false\")";
    }
}


function  whatNumber() {

    $('#conditions-result').css({'color':'blue'});
    let x = document.getElementById('conditionInput').value;

    if (x == 0) {                                                            //x is equal to 0
        document.getElementById("conditions-result").innerHTML = "X is equal to 0";
    } else if (x > 0 && x < 20) {                                            //x is between 0 and 5
        document.getElementById("conditions-result").innerHTML = "X is greater than 0, but less than 20"; 
    } else if (x >= 20) {                                                    //x didn't meet the above conditions
        document.getElementById("conditions-result").innerHTML = "X is 20 or greater";   
    } else {
        $('#conditions-result').css({'color':'red'});
        document.getElementById("conditions-result").innerHTML = "Whoops! enter a positive number only";
    }
}


function multiply() {   
    let x = document.getElementById('multiplyInput').value;                 //input from user value
    if (isNaN(x)) {                                                         //error for user inputting strings and not numbers
        $('#function-result').css({'color':'red'});
        document.getElementById('function-result').innerHTML = "This function can only accept numbers, not strings.";
    } else {                                                                //else, input is number and proceed with operation
        $('#function-result').css({'color':'blue'});
        document.getElementById('function-result').innerHTML = "x * 2 = " + (x*2);
    }
       
}


function showDate() {                                                           //show date/time function
    if (document.getElementById("date").innerHTML == "") {                      //if the date is currently not displayed
        document.getElementById("date-button").innerHTML = "Click to clear";    //change button text
        document.getElementById("date").innerHTML = Date();                     //display date
        document.getElementById("spacer").innerHTML = "<br><br>"                //alter spacer so doesn't push the other buttons down th4e page
    } else {
        document.getElementById("date-button").innerHTML = "Click for Date/Time!";  //else this is the text
        document.getElementById("date").innerHTML = "";                             //hide date
        document.getElementById("spacer").innerHTML = "<br><br><br>"                //spacer
    }
  }



function hovering() {                                                                   //function for hover
    if (document.getElementById("hover-button").innerHTML == "Mouseout to revert!") {   //if currently hovering below is with mouseout
        document.getElementById("hover-button").innerHTML = "Hover to change!";         //hover over me
        document.getElementById("hover-button").classList.remove('btn-info');           //change classes to change button color
        document.getElementById("hover-button").classList.add('btn-primary');
    } else {
        document.getElementById("hover-button").innerHTML = "Mouseout to revert!";      //else mouse is currenty hovering
        document.getElementById("hover-button").classList.remove('btn-primary');        //change color classes for button
        document.getElementById("hover-button").classList.add('btn-info');
    }
}



function clicked() {                                                                    //function for clicking the button
    if (document.getElementById("click-button").innerHTML == "Click to change!") {      //if in original state
        document.getElementById("click-button").innerHTML = "It changed color!";        //change text and approriate color/class
        document.getElementById("click-button").classList.remove('btn-danger');
        document.getElementById("click-button").classList.add('btn-warning');
    } else {                                                                            //else click me to change color and classes/text
        document.getElementById("click-button").innerHTML = "Click to change!";
        document.getElementById("click-button").classList.remove('btn-warning');
        document.getElementById("click-button").classList.add('btn-danger');
    }
}


//JQuery

$(document).ready(function() {

    let clickMe = document.getElementById("click-jquery");                          //variable = to clickMe button

        $("#click-jquery").click(function() {                                       //function for if button clicked
            if (clickMe.classList.contains("btn-primary")) {                        //if the button is blue (has not yet been clicked)
                $("#click-jquery").removeClass("btn-primary").addClass("btn-info"); //implement the following animations
                $("#square").fadeOut(2000);
                $("#triangle").delay(2000).toggle("slide");
                $(".rectangle").show(0).delay(3000).fadeTo("slow", 0);
                $(".circle").css("background-color", "green");
                $(".circle").delay(4500).slideUp(400);
        }});
});
