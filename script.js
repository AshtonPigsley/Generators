let chores = ["Laundry", "Downstairs Bathroom and Main area", "Vaccum All Floors", "Livingroom", "Dishes", "Clean Room", "Sweep"]
let chore_pics = {"Laundry":"laundry.webp", 
"Downstairs Bathroom and Main area":"downstairs.png", 
"Vaccum All Floors": "vaccum.gif", 
"Livingroom": "livingroom.jpg", 
"Dishes": "dishes.jpg", 
"Clean Room": "room.jfif", 
"Sweep": "sweep.png"};
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateChore(){
    index = randomNumber(0, (chores.length - 1));
    chore = chores[index];
    return chore;
}

window.onload = function (){
    output();
    
    function output(){
        let string_element = generateChore();
        let pic = chore_pics[string_element];
        document.getElementById("chore").innerHTML = string_element;
        document.getElementById("chore_pic").setAttribute("src",pic);
        
    }
}
