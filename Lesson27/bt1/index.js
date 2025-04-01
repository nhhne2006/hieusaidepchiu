function cong(a, b) {
    return a + b;
}

function tru(a, b) {
    return a - b;
}

function nhan(a, b) {
    return a * b;
}

function chia(a, b) {
    return a / b;
}


function menu() {
    let a = parseInt(prompt("Vui lòng nhập số thứ 1"));
    let b = parseInt(prompt("Vui lòng nhập số thứ 2"));
    let choice = parseInt(prompt("Vui lòng chọn chức năng\n 1. Cộng hai số\n 2. Trừ hai số\n 3. Nhân hai số\n 4. Chia hai số\n 5. Thoát\n"));
    switch (choice) {
        case 1:
            alert("Kết quả cộng: " + cong(a, b));
            break;
        case 2:
            alert("Kết quả trừ: " + tru(a, b));
             break;
        case 3:
            alert("Kết quả nhân: " + nhan(a, b));
            break;
        case 4:
            alert("Kết quả chia: " + chia(a, b));
            break;
        case 5:
            alert("Thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
}
menu();