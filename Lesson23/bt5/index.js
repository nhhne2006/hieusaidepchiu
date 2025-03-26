// Nhập số lượng phần tử của mảng
let n = parseInt(prompt("Nhập số lượng phần tử trong mảng:"));

// Kiểm tra nếu n không hợp lệ
if (n <= 0) {
    alert("Số lượng phần tử không hợp lệ");
} else {
    // Nhập mảng các phần tử
    let arr = [];
    let total = 0;

    // Nhập các phần tử cho mảng
    for (let i = 0; i < n; i++) {
        let num = prompt("Nhập phần tử thứ " + (i + 1) + ":");
        arr.push(num);  // Thêm phần tử vào mảng
    }

    // Duyệt mảng để tính tổng các ký tự là số
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            total += parseFloat(arr[i]);  // Cộng vào tổng nếu phần tử là ký tự số
        }
    }

    alert("Tổng các ký tự số trong mảng là: " + total);
}
