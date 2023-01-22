function sumSquare() {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let sum = 0;
    let sum2 = 0;
    for (let i = 0; i <= 10; i++) {
        sum += i**2
    }
    
    for (let i = 0; i <= 10; i++) {
        sum2 += i
    }
    return sum2**2 - sum
}

sumSquare()