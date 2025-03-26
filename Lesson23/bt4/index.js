
let arr = ['c', '2', 'd', '3'];

let count = 0;

// Duyệt mảng và kiểm tra xem phần tử có phải là ký tự số hay không
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] !== ' ') {
        count++;  // Tăng biến count nếu phần tử là ký tự số
    }
}

if (count > 0) {
    alert("Số ký tự số trong mảng là: " + count);
} else {
    alert("Không có ký tự số trong mảng");
}
