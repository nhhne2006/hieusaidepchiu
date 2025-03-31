function locEmailHopLe(mang) {
    // Kiểm tra nếu không phải là mảng
    if (!Array.isArray(mang)) {
        return "Dữ liệu không hợp lệ";
    }

    // Kiểm tra nếu mảng rỗng
    if (mang.length === 0) {
        return "Mảng không có phần tử nào";
    }

    // Lọc email hợp lệ
    const ketQua = mang.filter(email =>
        email.includes("@") && !email.includes(" ") && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    );

    // Trả kết quả hoặc thông báo nếu không có phần tử nào thỏa mãn
    return ketQua.length > 0 ? ketQua : "Mảng không có phần tử nào";
}

console.log(locEmailHopLe(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out .com"]));
console.log(locEmailHopLe([]));
console.log(locEmailHopLe("abc"));