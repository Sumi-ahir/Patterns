// Star Pyramid
let prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter a Number: "));

for (let i = 1; i <= n; i++) {
    // print spaces
    for (let s = 1; s <= n - i; s++) {
        process.stdout.write("  "); // double space for alignment
    }
    // print stars
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* "); 
    }
    console.log();
}
