// Hàm đếm số lượng số nguyên dương trong mảng
function demSoNguyenDuong(arr) {
    // Kiểm tra nếu tham số không phải là mảng
    if (!Array.isArray(arr)) {
        alert("dữ liệu không hợp lệ");
        return;
    }

    // Biến để lưu trữ số lượng số nguyên dương
    let count = 0;

    // Duyệt qua mảng và đếm số nguyên dương
    for (let i = 0; i < arr.length; i++) {
        // Kiểm tra nếu phần tử là số nguyên dương
        if (typeof arr[i] === 'number' && arr[i] > 0 && Number.isInteger(arr[i])) {
            count++;
        }
    }

    // Hiển thị kết quả
    if (count === 0) {
        alert("không có số nguyên dương trong mảng");
    } else {
        alert("Số lượng số nguyên dương trong mảng là: " + count);
    }
}

// Ví dụ kiểm tra
demSoNguyenDuong([4, 5.4, 6, -2]);
demSoNguyenDuong([1, 2, 5, 7, -8, 6]);
demSoNguyenDuong([1.2, -3, -6]);
demSoNguyenDuong("text");