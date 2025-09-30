//Inverted Right Pyramid with number
let prompt=require("prompt-sync")();
let n=prompt("Enter a Number : ");

for(let i=n;i>=1;i--){
    for(let j=1;j<=i;j++){
        process.stdout.write(j + " ");   
    }console.log();
    
}