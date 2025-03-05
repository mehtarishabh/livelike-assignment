/*
This function returns the string with the first
letter capitalized.
*/
export function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

/*
This function returns a number rounded to 
the next number with equal or greator digits
with all zeros except the first one.
Example: 
1. highestMultipleOf10(90) => 100
2. highestMultipleOf10(80) => 90
3. highestMultipleOf10(800) => 900
4. highestMultipleOf10(100.90) => 200
*/
export function highestMultipleOf10(num) {
    num = Math.trunc(num)
    let digits = num.toString().length;
    let leftMostDigit = num.toString().split('')[0]
    if(leftMostDigit<9) {
        return +(leftMostDigit+1).toString().padEnd(digits, '0')
    } else {
        return +(1).toString().padEnd(digits+1, '0')
    }
}