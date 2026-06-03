// const cart = [
//     {
//         id: 1,
//         name: 'Product 1',
//         price: 10.00,
//         quantity: 2
//     },
//     {
//         id: 2,
//         name: 'Product 2',
//         price: 20.00,
//         quantity: 1
//     },
//     {
//         id: 3,
//         name: 'Product 3',
//         price: 15.00,
//         quantity: 3
//     }
// ]


// function addToCart(cart) {
//     const total = cart.map(item => item.price * item.quantity).reduce((acc, curr) => acc + curr, 0)
//     return total
// }

// const total = addToCart(cart)
// console.log(`Total: $${total.toFixed(2)}`)



const cart = [
    {
        id: 1,
        name: 'Product 1',
        price: 10.00,
        quantity: 2
    },
    {
        id: 2,
        name: 'Product 2',
        price: 20.00,
        quantity: 1
    },
    {
        id: 3,
        name: 'Product 3',
        price: 15.00,
        quantity: 3
    }
]

// api.addToCart(cart, function () {
//     api.getCartTotal(function (total) {
//         console.log(`Total: $${total.toFixed(2)}`);
//         api.checkout(function () {
//             api.orderStatus(function (status) {
//                 console.log(`Order Status: ${status}`);
//                 api.getEstimatedDelivery(function (delivery) {
//                     api.OrderDelivered(function () {
//                         api.CustomerFeedback(function (feedback) {
//                              api.OrderReturn(function () {
//                                 api.ProcessRefund(function () {
//                                     console.log('Refund Processed');
//                                     api.RefundComplete(function () {
//                                         console.log('Refund Complete');
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })

//             });
//         });
//     });
// })


// PROMISE APPROACH

// API always return a promise when we call any function
// Promise have 3 states: pending, fulfilled, rejected
// .then always call on fulfilled state and .catch always call on rejected state
// .then guarnteed to run after the previous .then is resolved and it will pass the resolved value to the next .then

// const addtoCartPromise = api.addToCart(cart);

// addtoCartPromise.then(() => {
//     return api.getCartTotal();
// }).then((total) => {
//     console.log(`Total: $${total.toFixed(2)}`);
//     return api.checkout();
// }).then(() => {
//     return api.orderStatus();
// }).then((status) => {
//     console.log(`Order Status: ${status}`);
//     return api.getEstimatedDelivery();
// }).then((delivery) => {
//     return api.OrderDelivered();
// }).catch((error) => {
//         console.error('Error adding to cart:', error);
//  })


 const API = "http://jsonplaceholder.typicode.com/posts/3";

const fetchData = fetch(API);

fetchData.then((response)=>{
    console.log('Response received');
    return response.json();
}).then((data)=>{
    console.log('Data received');
    console.log(data);
}).catch((error)=>{
    console.error('Error fetching data:', error);
})