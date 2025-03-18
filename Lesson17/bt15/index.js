const pi = Math.PI;
let r = prompt("Nhập bán kính (r):");
let h = prompt("Nhập chiều cao (h):");

// parseFloat chuyển đổi một chuỗi (string) thành một số thực (số có phần thập phân)
// tóm lại nó giúp chuyển đổi thành 1 số thực
r = parseFloat(r);
h = parseFloat(h);

// Tính chu vi
let chuViDay = 2 * pi * r;

// Tính diện tích xung quanh
let dienTichXungQuanh = 2 * pi * r * h;

// Tính diện tích toàn phần
let dienTichToanPhan = 2 * pi * r * (r + h);

// Tính thể tích
let theTich = pi * r * r * h;


alert("Chu vi đáy là:" + chuViDay.toFixed(2));
alert("Diện tích xung quanh là: " + dienTichXungQuanh.toFixed(2));
alert("Diện tích toàn phần là: " + dienTichToanPhan.toFixed(2));
alert("Thể tích hình trụ là:" + theTich.toFixed(2));
