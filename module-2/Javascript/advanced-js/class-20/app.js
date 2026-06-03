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


// const order = api.cartOrder(cart, function (orderId) {
//     api.processPayment(orderId, function (paymentResult) {
//         api.deliverOrder(orderId, function (deliveryResult) {
//             api.getOrderStatus(orderId, function (status) {
//                 api.notifyUser(status, function (notification) {
//                     api.logNotification(notification, function (log) {
//                         api.sendEmail(notification, function (emailStatus) {
//                             api.logEmailStatus(emailStatus, function (logEmail) {
//                                 api.logOrderStatus(orderId, status, function (logOrder) {
//                                     console.log('Order processing complete:', logOrder)
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })


// PROMISES


// const order = api.cartOrder(cart)


// order.then((orderId)=>{
//     api.processPayment(orderId).then((paymentResult)=>{
//         api.deliverOrder(orderId).then((deliveryResult)=>{
//             api.getOrderStatus(orderId).then((status)=>{
//                 api.notifyUser(status).then((notification)=>{
//                     api.logNotification(notification).then((log)=>{
//                         api.sendEmail(notification).then((emailStatus)=>{
//                             api.logEmailStatus(emailStatus).then((logEmail)=>{
//                                 api.logOrderStatus(orderId, status).then((logOrder)=>{
//                                     console.log('Order processing complete:', logOrder)
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// }).catch((error)=>{
//     console.error('Error processing order:', error)
// })





// order
//     .then((orderId) => api.processPayment(orderId).then((paymentResult) => ({ orderId, paymentResult })))
//     .then(({ orderId }) => api.deliverOrder(orderId).then((deliveryResult) => ({ orderId, deliveryResult })))
//     .then(({ orderId }) => api.getOrderStatus(orderId).then((status) => ({ orderId, status })))
//     .then(({ orderId, status }) => api.notifyUser(status).then((notification) => ({ orderId, status, notification })))
//     .then(({ orderId, status, notification }) => api.logNotification(notification).then((log) => ({ orderId, status, notification, log })))
//     .then(({ orderId, status, notification }) => api.sendEmail(notification).then((emailStatus) => ({ orderId, status, emailStatus })))
//     .then(({ orderId, status, emailStatus }) => api.logEmailStatus(emailStatus).then((logEmail) => ({ orderId, status, logEmail })))
//     .then(({ orderId, status }) => api.logOrderStatus(orderId, status))
//     .then((logOrder) => console.log('Order processing complete:', logOrder))
//     .catch((error) => console.error('Error processing order:', error))

// FETCH 

const todoApi = 'https://jsonplaceholder.typicode.com/todos'


const todos = fetch(todoApi)

todos.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
})

console.log(todos)