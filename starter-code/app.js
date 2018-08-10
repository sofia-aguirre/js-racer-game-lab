var myPokemon = document.querySelector("wingull");
myPokemon.addEventListener('mouseover', evolve);

var evolve = function () {
    myPokemon.removeAttribute("src")
    myPokemon.setAttribute("src", "./images/charizard.png")
}




// var wingull = {
//     div: document.getElementById("wingull"),
//     name: "Wingull",
//     noise: "win win GULL"
// }

// var wingull;

// function startGame() {
//     myGameArea.start();
//     wingull = new component(30, 30, "red", 10, 120);
// }

// var myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 1000;
//         this.canvas.height = 1000;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0][2]);
//         this.interval = setInterval(updateGameArea, 20);
//         window.addEventListener('keydown', function (e) {
//             myGameArea.key = e.keyCode;
//         })
//         window.addEventListener('keyup', function (e) {
//             myGameArea.key = false;
//         })
//     }, 
//     clear : function(){
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }
// }

// function updateGameArea() {
//     myGameArea.clear();
//     Pokemon.speedX = 0;
//     Pokemon.speedY = 0; 
//     if (myGameArea.key && myGameArea.key == 37) {Pokemon.speedX = -1; }
//     if (myGameArea.key && myGameArea.key == 39) {Pokemon.speedX = 1; }
//     if (myGameArea.key && myGameArea.key == 38) {Pokemon.speedY = -1; }
//     if (myGameArea.key && myGameArea.key == 40) {Pokemon.speedY = 1; }
//     Pokemon.newPos(); 
//     Pokemon.update();
// }


// window.onload = function () {
//     characters = {
//         wingull: {
//             div: document.getElementById("wingull"),
//             name: "Wingull",
//             type: "flying/water",
//             noise: "win win GULL"
//         }
//     }
// };

// var characters = {};

// document.onkeydown = function(key) {
//     characters.wingull.position = parseInt(characters.wingull.div.style.left, 10);
//     movePlayer(key)
// };


// function movePlayer(key) {
//     switch(key.which) {
//         case 37: // left
//             var newWingullPosition = characters.wingull.position += 30;
//             characters.wingull.div.style.left = newWingullPosition + "px";
//             break;
//         case 38: // up
//             var newWingullPosition = characters.wingull.position += 30;
//             characters.wingull.div.style.up = newWingullPosition + "px";
//         break;
//         case 39: // right
//             var newWingullPosition = characters.wingull.position += 30;
//             characters.wingull.div.style.right = newWingullPosition + "px";
//         break;
//         case 40: // down
//             var newWingullPosition = characters.wingull.position += 30;
//             characters.wingull.div.style.down = newWingullPosition + "px";
//         break;
//         };
// };


//ugh not working, I'll come back to this part later
// var wingull = {
//     name: "Wingull",
//     type: "flying/water",
//     noise: "win win GULL",
// //methods
// onkeydown: function(key) {
//     wingull.position = parseInt(wingull.div.style.left, 10);
//     movePlayer(key);
// },
//     movePlayer: function(key) {
//         switch(key.which) {
//         case 37: // left
//             var newWingullPosition = flyers.wingull.position += 30;
//             flyers.wingull.div.style.left = newWingullPosition + "px";
//             break;
//         case 38: // up
//             var newWingullPosition = flyers.wingull.position += 30;
//             flyers.wingull.div.style.up = newWingullPosition + "px";
//             break;
//         case 39: // right
//             var newWingullPosition = flyers.wingull.position += 30;
//             flyers.wingull.div.style.right = newWingullPosition + "px";
//             break;
//         case 40: // down
//             var newWingullPosition = flyers.wingull.position += 30;
//             flyers.wingull.div.style.down = newWingullPosition + "px";
//             break;
//         };
//     }
// }