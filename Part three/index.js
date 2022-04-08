
const numbers = [`numbers/image009.gif`,"numbers/image010.gif", "numbers/image011.gif",
"numbers/image012.gif", "numbers/image013.gif", "numbers/image014.gif", "numbers/image015.gif",
"numbers/image016.gif", "numbers/image017.gif", "numbers/image018.gif", "numbers/image019.gif",
"numbers/image020.gif","numbers/image021.gif", "numbers/image022.gif", "numbers/image023.gif",
"numbers/image024.gif"];
let pictures = ["pictures/image001.gif","pictures/image002.gif", "pictures/image003.gif",
"pictures/image004.gif","pictures/image005.gif", "pictures/image006.gif", "pictures/image007.gif",
"pictures/image008.gif", "pictures/batman.jpg", "pictures/car.jpg", "pictures/spider.jpg", "pictures/marvel.jpg"];

function random_shuffle(arr){
    let curr = 0;
    let randomIndex;
    while(curr < arr.length){
        randomIndex =Math.floor(Math.random()*curr);
        [arr[randomIndex], arr[curr]] = [arr[curr], arr[randomIndex]];
        curr +=1
    }
    return arr;
}
function fill_grid_bgrd(arr){
    for (let x = 1; x<=arr.length; x++){
        document.getElementById(`${x}`).style.backgroundImage = `url(${arr[x-1]})`;
    }
}
window.onload = ()=>{
fill_grid_bgrd(numbers);
}
let level;
let pics = [];
function play(){
    const choice = document.getElementById("pics");
    const num = choice.options[choice.selectedIndex].value;
    let chosen = pictures.slice(0, num)
    const option = document.getElementById("option");
    level = option.options[option.selectedIndex].value
    level *=1000;
    let time;
    if (num == '8'){
        time = 120;
    }
    else if (num == '10'){
        time = 150;
    }
    else{
        time = 180;
    }
    pics=[];
    for(let x = 0; x<2; x++){
        chosen = random_shuffle(chosen);
        for (let i = 0; i<8 && pics.length<16; i++){
            pics.push(chosen[i]);
        }
    }
    fill_grid_bgrd(pics);
    setTimeout(function(){fill_grid_bgrd(numbers)}, level);
    setInterval(function() {
        document.getElementById("timer").innerHTML = `You have ${time} seconds remaining`;
        time -- 
        if (time == 0){
            alert("Time out");
            window.location.replace("index.html")
        }
}, 1000);
}
function reveal(arg){
    const index = Number(arg)
    document.getElementById(arg).style.backgroundImage = `url(${pics[index-1]})`;
}