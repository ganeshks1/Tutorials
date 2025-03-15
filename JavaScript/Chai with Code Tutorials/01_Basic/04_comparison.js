// Basic comparison operations
console.log(2 > 1);   // true
console.log(2 <= 1);  // false
console.log(2 < 1);   // false
console.log(2 == 1);  // false
console.log(2 != 1);  // true

// Comparisons involving strings
console.log("3" > 1); // true: "3" (string) is converted to a number 3 and compared.
console.log("9" < 2); // false: "9" is converted to number 9 and compared to 2.
// These behaviors highlight potential pitfalls of loose type coercion in JavaScript.


// Comparisons involving `null`
console.log(null > 0);   // false: null is converted to 0 but treated differently in comparisons.
console.log(null == 0);  // false: `null` is loosely equal only to `undefined`, not to 0.
console.log(null >= 0);  // true: `null` is converted to 0, so the comparison holds true.

// Loose and strict equality checks with `null` and `undefined`
console.log(null == undefined);  // true: Both are loosely equal.
console.log(null === undefined); // false: Strict equality checks both value and type.

// Explanation of null in comparisons:
// - Equality checks (`==`) do not convert `null` to a number. `null` is only equal to `undefined`.
// - Comparisons (`>`, `<`, `>=`, `<=`) convert `null` to a number (treated as 0). 
//   This inconsistency can lead to unexpected results, so avoid using `null` in numeric comparisons.

// Example to illustrate:
console.log("null >= 0:", null >= 0); // true: null is converted to 0, and 0 >= 0 is true.
console.log("null > 0:", null > 0);   // false: null is converted to 0, but 0 > 0 is false.

// Loose and strict equality checks
console.log("2" == 2);  // true: Loose equality converts "2" (string) to 2 (number) before comparing.
console.log("2" === 2); // false: Strict equality compares both value and type. "2" is a string, not a number.

/*
Key Points to Remember:
1. Loose equality (`==`) allows type coercion, which can lead to unexpected results. Prefer strict equality (`===`).
2. Comparisons (`>`, `<`, `>=`, `<=`) convert non-numeric values like strings or `null` to numbers before evaluating.
3. `null` and `undefined` behave uniquely in JavaScript:
   - `null == undefined` is true because they are loosely equal.
   - `null === undefined` is false because they are different types.
   - Avoid using `null` or `undefined` in mathematical comparisons unless necessary.
4. Consider using TypeScript to enforce stricter type checks and avoid these pitfalls.
*/