function a(num1, num2) {
    console.log("A execution")

    function b() {
        console.log("B execution")

        function c() {
            console.log("C execution")

            console.log(num1 + num2)
        }

        c()
    }

    b()


}

a(5, 10)