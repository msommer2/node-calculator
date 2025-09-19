// Terminal interface calculator in node.js

const readline = require('readline');

// Interface
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform calculation
function calculate() {
    interface.question(`Enter your calculation using '+' '-' '*' '/' (e.g., 2 + 2) or type 'exit' to quit: `, (input) => {
        if (input.trim().toLowerCase() === 'exit') {
            interface.close();
            return;
        }
        try {
            const result = Function(`'use strict'; return (${input})`)();
            if (isNaN(result)) {
                throw new Error('Invalid calculation');
            }
            console.log(`\nThe result is: ${result}`);
            console.log(`\nThat was so much fun! Why stop now?`);
        } catch (error) {
            console.log(`\nThis is not a number. Please try again.`);
        }
        calculate(); 
    });
}

// Prompt 
console.log(`Let's get ready to calculaaaaaaaaate!`);
calculate();