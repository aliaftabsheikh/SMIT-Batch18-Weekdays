function a(num1, num2) {
    console.log("Executing function a");

    function b() {
        console.log("Executing function b");

        function c() {
            console.log("Executing function c")
            console.log(num1 + num2);
        }

        c();

        console.log("Function c has finished executing");
    }

    b();

    console.log("Function b has finished executing");
}
a(10, 20)

console.log("Function a has finished executing");