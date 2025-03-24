// Duyệt qua các số từ 100 đến 999
for (let num = 100; num < 1000; num++) {
    let numStr = num.toString();  // Chuyển số thành chuỗi để tách các chữ số
    let a = parseInt(numStr[0]);  // Chữ số đầu tiên
    let b = parseInt(numStr[1]);  // Chữ số thứ hai
    let c = parseInt(numStr[2]);  // Chữ số thứ ba

    // Tính tổng các chữ số mũ 3
    let kiemTra = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
    
    // Kiểm tra nếu số này là số Armstrong
    if (kiemTra === num) {
        alert(num + " là số Armstrong");
    }
}
