// console.log(window)

// alert("Hello World")

// console.log(this)

// v8 Engine  -> NodeJS

// console.log(globalThis)

// var btn = document.getElementById("btn")

// btn.addEventListener("click", function () {
//     // window.location.reload()

//     var monkeyWindow = window.open(
//         "",
//         "Monkey Window",
//         "width=400,height=400,top=100,left=100,"
//     );
//     var windowContent = "<h1>Hello World !</h1> <button onclick='window.close()'>Close</button>";

//     monkeyWindow.document.write(windowContent);
// })


function checkForPopBlocker() {
    var testPop = window.open("", "", "width=100,height=100");

    console.log(testPop)
    if (testPop === null || typeof (testPop === "undefined")) {
        alert("Please disable your popup blocker.");
    }
    testPop.close();
}

