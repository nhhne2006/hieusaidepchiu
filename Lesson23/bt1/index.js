// Nhập mảng số nguyên
let arr = [1, 22, 12, 8, 7, 9];  // Bạn có thể thay đổi giá trị trong mảng này

// Khởi tạo một mảng để lưu các số lớn hơn hoặc bằng 10
let result = [];

// Duyệt mảng và tìm các số lớn hơn hoặc bằng 10
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        result.push(arr[i]); // Thêm số vào mảng result nếu nó lớn hơn hoặc bằng 10
    }
}

// Kiểm tra nếu mảng result không rỗng
if (result.length > 0) {
    alert("Các số lớn hơn hoặc bằng 10 là: " + result.join(" "));
} else {
    alert("Không có số nào lớn hơn hoặc bằng 10");
}
