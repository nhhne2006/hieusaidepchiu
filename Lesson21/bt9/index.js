let num = parseInt(prompt("Mời bạn nhập một số nguyên:"));

// Kiểm tra đầu vào
if (isNaN(num) || num < 2) {
    alert(num + " không phải là số nguyên tố");
} else {
    let check = true;

    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            check = false; 
            break;
        }
    }

    if (check) {
        alert(num + " là số nguyên tố");
    } else {
        alert(num + " không phải là số nguyên tố");
    }
}
