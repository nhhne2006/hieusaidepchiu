for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        alert("FizzBuzz");  // In "FizzBuzz" nếu chia hết cho cả 3 và 5
    } else if (i % 3 === 0) {
        alert("Fizz");  // In "Fizz" nếu chia hết cho 3
    } else if (i % 5 === 0) {
        alert("Buzz");  // In "Buzz" nếu chia hết cho 5
    } else {
        alert(i);  // In ra số nguyên nếu không chia hết cho 3 hoặc 5
    }
}
