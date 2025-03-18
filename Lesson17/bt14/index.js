// Nhập vào bán kính và chiều cao
let banKinh = parseFloat(prompt("Mời bạn nhập bán kính (r): "));
let chieuCao = parseFloat(prompt("Mời bạn nhập chiều cao (h): "));

const pi = Math.PI; // const giá trị không thể thay đổi sau khi gán

// Tính chu vi đáy
let chuViDay = 2 * pi * banKinh;

// Tính diện tích xung quanh
let dienTichXQ = 2 * pi * banKinh * chieuCao;

// Tính diện tích toàn phần
let dienTichTP = 2 * pi * banKinh * (banKinh + chieuCao);

// Tính thể tích
let theTich = pi * Math.pow(banKinh, 2) * chieuCao;


alert("Chu vi đáy là: " + chuViDay.toFixed(2));
alert("Diện tích xung quanh là: " + dienTichXQ.toFixed(2));
alert("Diện tích toàn phần là: " + dienTichTP.toFixed(2));
alert("Thể tích hình trụ là: " + theTich.toFixed(2));
