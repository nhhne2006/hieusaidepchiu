let arr = [1, 2, 3, 4, 5, 6];

// Kiểm tra mảng rỗng
if (arr.length === 0) {
    alert("Không có số lớn nhất");
} else {
    let max = arr[0];  // Khởi tạo max là phần tử đầu tiên trong mảng
    let index = 0;     // Khởi tạo vị trí của max

    // Duyệt mảng để tìm số lớn nhất
    for (let i = 1; i < arr.length; i++) { // Bắt đầu từ i = 1
        if (arr[i] > max) {
            max = arr[i];  // Cập nhật giá trị max
            index = i;     // Cập nhật vị trí của max
        }
    }

    alert("Số lớn nhất là: " + max);
    alert("Vị trí: " + index);
}
