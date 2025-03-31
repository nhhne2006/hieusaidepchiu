function isPrime(n) {
    if (n < 2) {
        return false;  // Số nhỏ hơn 2 không phải là số nguyên tố
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;  // Nếu chia hết cho i thì không phải là số nguyên tố
        }
    }
    return true;  // Nếu không chia hết cho số nào, thì là số nguyên tố
}

function locSoNguyenTo(mang) {
    // Kiểm tra nếu không phải là mảng
    if (!Array.isArray(mang)) {
        return "Dữ liệu không hợp lệ";
    }

    // Kiểm tra nếu mảng rỗng
    if (mang.length === 0) {
        return "Mảng không có phần tử nào";
    }

    // Lọc các số nguyên tố
    const ketQua = mang.filter(isPrime);

    // Trả kết quả hoặc thông báo nếu không có phần tử nào thỏa mãn
    return ketQua.length > 0 ? ketQua : "Mảng không có phần tử nào";
}


console.log(locSoNguyenTo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(locSoNguyenTo([]));
console.log(locSoNguyenTo("abc"));
