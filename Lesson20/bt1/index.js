let n = prompt("Nhập vào một số nguyên N:");

// Chuyển giá trị nhập vào thành số nguyên
n = parseInt(n);

if (n > 0) {
  let tong = 0;

  // Dùng vòng lặp để tính tổng từ 1 đến N
  for (let i = 1; i <= n; i++) {
    tong += i;
  }

  alert("Tổng các số nguyên từ 1 đến " + n + " là: " + tong);
} else if (n === 0) {
  alert("Dữ liệu nhập vào không hợp lệ!");
} else {
  alert("Dữ liệu nhập vào không hợp lệ!");
}
