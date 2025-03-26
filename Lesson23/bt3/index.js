
let n = parseInt(prompt("Nhập số lượng phần tử trong mảng:")); 

// Kiểm tra nếu n không hợp lệ
if (n <= 0) {
    alert("Số lượng phần tử không hợp lệ");
} else {

    let arr = [];
    let count = 0;

    // Nhập các phần tử cho mảng
    for (let i = 0; i < n; i++) {
        let num = prompt("Nhập phần tử thứ " + (i + 1) + ":");
        arr.push(parseFloat(num)); // Thêm phần tử vào mảng và chuyển thành số thực
    }

    // Duyệt mảng để đếm số phần tử âm
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++; // Nếu phần tử âm, tăng biến count lên 1
        }
    }

    alert("Số phần tử âm trong mảng là: " + count);
}
