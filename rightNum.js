
//Right-Angled Number Pyramid
let prompt=require("prompt-sync")();
let n=prompt("Enter a number :");
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(i + " ");
    }console.log();
    
}
