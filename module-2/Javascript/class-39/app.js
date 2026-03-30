// function checkForSelection() {
//     if (document.getElementById("states").selectedIndex === 0) {
//         alert("Please select a state.");
//         return false;
//     }
// }


// function validateRadios() {
//     var radios = document.getElementsByName("courses");
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             return true;
//         }
//     }
//     alert("Please check one.");
//     return false;
// }


var text = "1223.122a323"

console.log(parseFloat(text))


// 1 function validateZIP() {
// 2 var valueEntered = document.getElementById("zip").value;
// 3 var numChars = valueEntered.length;
// 4 if (numChars < 5) {
// 5 alert("Please enter a 5-digit code.");
// 6 return false;
// 7 }
// 8 for (var i = 0; i <= 4; i++) {
// 9 var thisChar = parseInt(valueEntered[i]);
// 10 if (isNaN(thisChar)) {
// 11 alert("Please enter only numbers.");
// 12 return false;
// 13 }
// 14 }
// 15 }


// function validateEmail() {
//     var eEntered = document.getElementById("email").value;
//     if (eEntered.indexOf(" ") !== -1) {
//         alert("No spaces allowed in address");
//         return false;
//     }
//     return true;
// }



try {
    // var userPrompt = prompt("Enter a username:");

    // console.log(userPrompt)

    throw new Error("Apna hi error hai yeh !!!")

} catch (error) {
    console.log("PROMPT BROWSER KA PART HAI BHAI !!!!", error.message)
}

console.log("HELOOOOOOOOOOOOOOOOOOOOOOOOOOo!")
