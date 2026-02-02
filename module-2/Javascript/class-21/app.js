
// var num1 = 10;
// var num2 = 20;
// add( num1, num2 );

// function add(a, b) {
//     console.log(a + b);

//     var sum = 10 + 20;

//     console.log(sum);
// }

// console.log(num1);
// console.log(num2);

var demiUsers = [
    {
        email: "admin@gmail.com",
        password: "admin123"
    },
    {
        email: "user@gmail.com",
        password: "user123"
    }, 
    {
        email: "hero@gmail.com",
        password: "hero123"
    }
]

function checkAuth(emailId, passwordId) {
    var email = document.getElementById(emailId).value;
    var password = document.getElementById(passwordId).value;

    console.log(email);
    console.log(password);

    //! Static User Authentication
    //  if(email === "admin@gmail.com" && password === "admin123") {
    //     alert("Login Successful!");
    // }else{
    //     alert("Invalid Credentials!");
    // }

    //! Dynamic User Authentication

   for(var i = 0; i < demiUsers.length; i++) {
    if(email == demiUsers[i].email && password == demiUsers[i].password) {
        alert("Login Successful!");
        break;
    }
   }
}