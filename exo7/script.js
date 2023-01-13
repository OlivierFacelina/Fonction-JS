let entier = 5;

function getFactorial(number) {
    let prod = number;
    if (number == 0) {
        return 1;
    }
    else {
        return prod *= getFactorial(number-1)
    }
}

console.log(`!${entier} =`,getFactorial(entier));

