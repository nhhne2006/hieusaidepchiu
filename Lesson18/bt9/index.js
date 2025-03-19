let hour = Number(prompt("Nhập giờ (0-23):"));
let minute = Number(prompt("Nhập phút (0-59):"));
let second = Number(prompt("Nhập giây (0-59):"));

// Xác định AM hay PM
let kyHieu = hour >= 12 ? "PM" : "AM";

// Chuyển giờ 24h về 12h
hour = hour % 12;
hour = (hour === 0) ? 12 : hour;

// Format thành 2 chữ số
// hour.toString() chuyển số thành 1 chuỗi
// padStart(2, '0') phương thức của chuỗi, giúp thêm ký tự vào đầu chuỗi cho đến khi chuỗi đủ độ dài mong muốn
// ví dụ: nếu ta nhập 2 mà nó chưa đủ 2 kí tự thì ngay lập tức nó sẽ hoạt động và thêm số 0 ở đằng trước số 2
let hourStr = hour.toString().padStart(2, '0');
let minuteStr = minute.toString().padStart(2, '0');
let secondStr = second.toString().padStart(2, '0');


alert(hourStr + " : " + minuteStr + " : " + secondStr + " " + kyHieu);
