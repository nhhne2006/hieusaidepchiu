let tienGui = Number(prompt("Mời bạn nhập số tiền bạn muốn gửi"));
let laiSuat = Number(prompt("Nhập lãi suất (%) (ví dụ: 1 cho 1%)"));
let soThangGui = Number(prompt("Mời bạn nhập số tháng cần gửi"));

// Chuyển lãi suất từ phần trăm sang số thập phân
laiSuat = laiSuat / 100;

// Tính tiền lãi
let tienLai = tienGui * laiSuat * soThangGui;

// Tính tiền nhận được
let tienNhanDuoc = tienGui + tienLai;

// Hiển thị kết quả
alert("Tiền lãi: " + tienLai.toFixed(3));
alert("Tiền nhận được: " + tienNhanDuoc.toFixed(3));
