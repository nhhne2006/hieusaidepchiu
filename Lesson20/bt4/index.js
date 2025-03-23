let str = prompt("Nhập vào chuỗi:");
let search = prompt("Nhập vào ký tự cần tìm:");

let found = false; // Biến để lưu trạng thái tìm thấy ký tự

for (let i = 0; i < str.length; i++) {
  if (str[i] === search) {
    found = true;
    break; // Dừng vòng lặp khi tìm thấy ký tự
  }
}

if (found) {
  alert("Tồn tại từ cần tìm kiếm");
} else {
  alert("Không tồn tại từ cần tìm kiếm");
}
