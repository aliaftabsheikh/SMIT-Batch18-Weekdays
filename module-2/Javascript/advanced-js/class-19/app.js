const cart = [
    {
        id: 1,
        name: 'Product 1',
        price: 200
    },

    {
        id: 2,
        name: 'Product 2',
        price: 300
    },

    {
        id: 3,
        name: 'Product 3',
        price: 400
    }
]


// const cart = api.createOrder(cart, function (orderId) {
//     console.log('Order created with ID: ' + orderId);
//     api.processPayment(orderId, function (paymentStatus) {
//         console.log('Payment status: ' + paymentStatus);
//         api.shipOrder(orderId, function (shippingStatus) {
//             console.log('Shipping status: ' + shippingStatus);
//             api.notifyCustomer(orderId, function (notificationStatus) {
//                 console.log('Customer notified: ' + notificationStatus);
//                 api.updateInventory(orderId, function (inventoryStatus) {
//                     console.log('Inventory updated: ' + inventoryStatus);
//                     api.generateInvoice(orderId, function (invoiceStatus) {
//                         console.log('Invoice generated: ' + invoiceStatus);
//                         api.sendInvoice(orderId, function (sendStatus) {
//                             console.log('Invoice sent: ' + sendStatus);
//                         })
//                     })

//                 })
//             })
//         });
//     });
// })



// PROMISES APPROACH

// Promise states ---> Pending, Fulfilled, Rejected

// const cart = createOrder(cart)

// cart.then(function (orderId) {
//     api.processPayment(orderId).then(function (paymentStatus) {
//         console.log('Payment status: ' + paymentStatus);
//         api.shipOrder(orderId).then(function (shippingStatus) {
//             console.log('Shipping status: ' + shippingStatus);
//             api.notifyCustomer(orderId).then(function (notificationStatus) {
//                 console.log('Customer notified: ' + notificationStatus);
//                 api.updateInventory(orderId).then(function (inventoryStatus) {
//                     console.log('Inventory updated: ' + inventoryStatus);
//                 }).then(function () {
//                     api.generateInvoice(orderId).then(function (invoiceStatus) {
//                         console.log('Invoice generated: ' + invoiceStatus);
//                         api.sendInvoice(orderId).then(function (sendStatus) {
//                             console.log('Invoice sent: ' + sendStatus);
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

// cart.then((orderId) => api.processPayment(orderId))
// .then((paymentStatus) => {
//     console.log('Payment status: ' + paymentStatus);
//     return api.shipOrder(orderId)
// }).then((shippingStatus) => {
//     console.log('Shipping status: ' + shippingStatus);
//     return api.notifyCustomer(orderId)
// }).then((notificationStatus) => {
//     console.log('Customer notified: ' + notificationStatus);
//     return api.updateInventory(orderId)
// }).then((inventoryStatus) => {
//     console.log('Inventory updated: ' + inventoryStatus);
//     return api.generateInvoice(orderId)
// }).then((invoiceStatus) => {
//     console.log('Invoice generated: ' + invoiceStatus);
//     return api.sendInvoice(orderId)
// }).then((sendStatus) => {
//     console.log('Invoice sent: ' + sendStatus);
// }).catch((error) => {
//     console.error('Error: ' + error);''
// })


// FETCH API APPROACH

// GET 


const posts = fetch('https://jsonplaceholder.typicode.com/posts/3')  

posts.then((response) => {
   return response.json()
    
}).then((data) => {
    console.log(data)
})


