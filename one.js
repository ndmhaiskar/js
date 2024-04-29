





//https://www.freecodecamp.org/news/learn-javascript-for-beginners/

/*
flips = 0
isHead = false

while(!isHead){
    flips++
    isHead = Math.random() < 0.5
}
console.log(`Coin is flipped ${flips} times before Head comes`)
*/

/*
let heads = 0
let tails = 0
for(let i=0;i<10;i++){
    if(Math.random() > 0.5){
        heads++
    }
    else {
        tails++
    }
}
console.log("Coin tossed 10 times")
console.log(`heads = ${heads}`)
console.log(`tails = ${tails}`)

*/



/*
let color = ["red","blue","green"]
for(let i=0;i<color.length;i++){
    console.log(`${i}: ${color[i]}`)
}

for(let j=1;j<20;j+=3){
    console.log(`j=${j}`)
}

let grade = "D"
switch(grade){
    case "A":
        console.log("Chocolate")
        break
    case "B":
        console.log("Coockie")
        break
    case "C":
        console.log("Candy")
        break
    default:
        console.log("No reward to give")
}
*/




/*
let num = 40
switch(num){
    case 10: 
        console.log("num=10"+num)
        break
    case 20:
        console.log(`num=20 ${num}`)
        break
    case 40:
        console.log(`num=40 ${num}`)
        break
    default:
        console.log( `num is available not in position`)

}

*/

let colors = ["red","green","blue"]
if (colors[0] == "green"){
    console.log("Green always")
}
else if (colors[2] == "blue") {
    console.log("Must be red")
}
else {
    console.log("must be blue")
}
