let prompt=require("prompt-sync")();
let n=prompt("Enter a Number : ");
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(j + " "); 
    }console.log();
    
}