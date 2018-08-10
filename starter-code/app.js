window.onload = function () {
    characters = {
        wingull: {
            div: document.getElementById("wingull"),
            name: "Wingull",
            type: "flying/water",
            noise: "win win GULL"
        }
    }
};

var characters = {};

document.onkeydown = function(key) {
    characters.wingull.position = parseInt(characters.wingull.div.style.left, 10);
    movePlayer(key)
};


function movePlayer(key) {
    switch(key.which) {
        case 37: // left
            var newWingullPosition = characters.wingull.position += 30;
            characters.wingull.div.style.left = newWingullPosition + "px";
            break;
        case 38: // up
            var newWingullPosition = characters.wingull.position += 30;
            characters.wingull.div.style.up = newWingullPosition + "px";
        break;
        case 39: // right
            var newWingullPosition = characters.wingull.position += 30;
            characters.wingull.div.style.right = newWingullPosition + "px";
        break;
        case 40: // down
            var newWingullPosition = characters.wingull.position += 30;
            characters.wingull.div.style.down = newWingullPosition + "px";
        break;
        };
};


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