let chores = ["laundry", "Downstairs bathroom and main area", "Vacuum all floors", "Living room", "Dishes", "Clean room", "Sweep"]

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateChore(){
    index = randomNumber(0, chores.length);
    chore = chores[index];
    return chore;
}

window.onload = function (){
    output();
    
    function output(){
        let string_element = generateChore();
        document.getElementById("chore").innerHTML = string_element;
    }
}
