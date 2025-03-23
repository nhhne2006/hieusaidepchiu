let a = prompt("Nhập vào giá trị a:");
let b = prompt("Nhập vào giá trị b:");

a = parseInt(a);
b = parseInt(b);

if (isNaN(a) || isNaN(b)) {
  alert("Dữ liệu nhập vào không hợp lệ!");
} else if (b < 0) {
  alert("Không thể tính mũ với số mũ âm");
} else {
  let result = 1;

  // Tính A^B bằng vòng lặp
  for (let i = 1; i <= b; i++) {
    result *= a;
  }

  alert("Kết quả của " + a + " mũ " + b + " là: " + result);
}
