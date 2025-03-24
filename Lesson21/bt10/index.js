let n = parseInt(prompt("Mời bạn nhập số nguyên n để in n số nguyên tố đầu tiên:"));

let count = 0;  // Đếm số lượng số nguyên tố đã tìm được
let num = 2;    // Bắt đầu kiểm tra từ số 2
let luuTruBien = "";  // Biến này sẽ chứa tất cả các số nguyên tố

while (count < n) {
    let check = true;

    // Kiểm tra nếu num là số nguyên tố
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            check = false;
            break;
        }
    }

    // Nếu là số nguyên tố, lưu vào biến luuTruBien
    if (check) {
        luuTruBien += num + " ";  // Thêm số nguyên tố vào chuỗi (cách nhau bởi dấu cách)
        count++;
    }

    // Tiếp tục kiểm tra số tiếp theo
    num++;
}

// In tất cả các số nguyên tố sau khi tìm đủ
alert("Các số nguyên tố đầu tiên là: " + luuTruBien);
