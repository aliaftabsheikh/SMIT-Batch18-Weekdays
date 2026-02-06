// function expandText(){
//     var demiText = document.getElementById('demiText')
//     var container = document.getElementsByClassName('box_container')[0];

//     container.classList = 'box_container_expanded'



//     var expandedText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, dolores dicta. Vel officia consequuntur ratione quae quas praesentium vitae nobis deleniti beatae, facilis ut perspiciatis hic accusantium quia, voluptate in.'

//     demiText.innerHTML = expandedText

// }

// function makeInvisible(){
//     var image = document.getElementById('image')

//     image.className = 'hidden'
// }

function toggleImage(){
    var image = document.getElementById('image')
    var button = document.getElementById('image-visibility-btn')

    if(image.className === 'hidden'){
        button.innerText = 'Make Invisible'
        image.className = 'visible'
    } else {
        button.innerText = 'Make Visible'
        image.className = 'hidden'
    }
}

var randomImages = [
    'https://media.wired.com/photos/5ceeed5b0bdd96c34c6174a3/16:9/w_2400,h_1350,c_limit/01_Ferrari_SF90_03.jpg',

    'https://www.amalgamcollection.com/products/ferrari-sf90-stradale?srsltid=AfmBOorFpM6l2bZ1OnPlg4o2Lkci3_qQocH6CLLUXeviAVEBjI1qkKJg',

    'https://imageio.forbes.com/specials-images/imageserve/6552427075f8cabe3a24d6f1/The-Ferrari-SF90-Stradale---/0x0.jpg?height=476&width=480&fit=bounds',
]

function swapPic(){
    var image = document.getElementById('image')
    var randomIndex = Math.floor(Math.random() * randomImages.length)
    
    console.log('Swap Pic Called !', randomImages[randomIndex], randomIndex)
    image.src = randomImages[randomIndex]

}


function makeBig() {
 document.getElementById("box").className += " big";
 }
