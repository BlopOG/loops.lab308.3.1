// PART 1: FIZZ BUZZ (The interview classic.)

for (let i = 1; i <= 100; i++) {
    // Check both first or the math falls apart and everything breaks
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i); // just a boring old number, moving on
    }
}


// PART 2: PRIME TIME (Math time again... please don't infinite loop my machine to death)
let n = 4; // starting point. Change this to test higher numbers
let currentNumber = n + 1; 

while (true) {
    let isPrime = true;
    
    // Loop through potential factors. If it divides cleanly, it's not prime.
    for (let i = 2; i < currentNumber; i++) {
        if (currentNumber % i === 0) {
            isPrime = false;
            break; // Found a factor, stop wasting CPU cycles and get out
        }
    }
    

    if (isPrime && currentNumber > 1) {
        console.log(`Next prime after ${n} is: ${currentNumber}`);
        break; 
    }
    
    currentNumber++; // Keep climbing the numbers ladder
}

// ---

// PART 3: FEELING LOOPY (Character-by-character processing. No .split() allowed. Pure pain.)
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Individual cell variables because the instructions said so. 
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let cellIndex = 1; // Keeping track of which container we are shoving characters into

for (let i = 0; i < csvData.length; i++) {
    let char = csvData[i];

    if (char === ",") {
        // Hit a comma, switch to the next cell. Simple enough.
        cellIndex++;
    } else if (char === "\n") {
        // Line break! Dump everything to the terminal right now
        console.log(cell1, cell2, cell3, cell4);
        
        // RESET EVERYTHING OR THE NEXT ROW WILL BE A MUTANT MONSTROSITY
        cell1 = "";
        cell2 = "";
        cell3 = "";
        cell4 = "";
        cellIndex = 1;
    } else {
       r
        if (cellIndex === 1) cell1 += char;
        else if (cellIndex === 2) cell2 += char;
        else if (cellIndex === 3) cell3 += char;
        else if (cellIndex === 4) cell4 += char;
    }
}

// THE FINAL SAFETY NET. If the string didn't end in \n, Bill gets left behind. Don't forget Bill.
if (cell1) {
    console.log(cell1, cell2, cell3, cell4);
}