let numbers = Number(prompt("Nhập vào một số bất kỳ:"));

if (numbers % 3 === 0 && numbers % 5 === 0) {
    alert(numbers + " chia hết cho cả 3 và 5");
} else {
    alert(numbers + " không chia hết cho cả 3 và 5");
}
