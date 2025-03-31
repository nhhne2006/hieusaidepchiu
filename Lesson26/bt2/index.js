function locChuoi(mang) {
    // Kiểm tra nếu không phải là mảng
    if (!Array.isArray(mang)) {
        return "Dữ liệu không hợp lệ";
    }

    // Kiểm tra nếu mảng rỗng
    if (mang.length === 0) {
        return "Mảng không có phần tử nào";
    }

    // Lọc các chuỗi có độ dài lớn hơn 5 ký tự
    const ketQua = mang.filter(item => item.length > 5);

    // Trả kết quả hoặc thông báo nếu không có phần tử nào thỏa mãn
    return ketQua.length > 0 ? ketQua : "Mảng không có phần tử nào";
}

// Ví dụ sử dụng:
console.log(locChuoi(["apple", "banana", "cat", "elephant", "dog"]));
console.log(locChuoi([]));
console.log(locChuoi("abc"));
