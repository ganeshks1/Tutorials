
for (let i = 1; i <= 1000; i++) {
    // Outer loop runs from i = 1 to i <= 5
    // This determines the number being multiplied

    for (let j = 1; j <= 10; j++) {
        // Inner loop runs from j = 1 to j <= 5
        // This determines the multiplier
        console.log(`${i} x ${j} = ${i * j}`); // Logs the product of i and j
    }
    // At the end of each iteration of the inner loop, the outer loop moves to the next value
}