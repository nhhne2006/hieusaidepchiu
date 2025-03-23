let n = prompt("Nhập vào một số nguyên N:");
n = parseInt(n);

if (n > 0) {
  let output = "";
  
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) {
      output += i + " ";
    }
  }

  alert("Các số chia hết cho 5 từ 1 đến " + n + " là: " + output);
} else {
  alert("Dữ liệu nhập vào không hợp lệ!");
}
