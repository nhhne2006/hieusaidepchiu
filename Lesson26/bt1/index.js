function locGiaTri(mang) {
    // Kiểm tra nếu không phải là mảng
    if (!Array.isArray(mang)) {
        return "Dữ liệu không hợp lệ";
    }

    // Kiểm tra nếu mảng rỗng
    if (mang.length === 0) {
        return "Mảng không có phần tử nào";
    }

    // Kiểm tra nếu có phần tử không phải là số
    if (mang.some(item => typeof item !== "number")) {
        return "Dữ liệu không hợp lệ";
    }

    // Lọc các giá trị >= 10
    const ketQua = mang.filter(num => num >= 10);

    // Trả kết quả hoặc thông báo nếu không có phần tử nào thỏa mãn
    return ketQua.length > 0 ? ketQua : "Mảng không có phần tử nào";
}

// Ví dụ sử dụng:
console.log(locGiaTri([1, 22, 10, 9, 8]));
console.log(locGiaTri([]));
console.log(locGiaTri("abc"));
