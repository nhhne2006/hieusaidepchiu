let a = Number(prompt("Vui lòng nhập giá trị a: "));
let b = Number(prompt("Vui lòng nhập giá trị b: "));
let c = Number(prompt("Vui lòng nhập giá trị c: "));

// Tính delta
let delta = b * b - 4 * a * c;

// Kiểm tra delta
if (delta < 0) {
    alert("Phương trình vô nghiệm...");
} else {
    // Tính nghiệm delta 
    let phuongTrinh1 = (- b + Math.sqrt(delta)) / (2 * a);
    let phuongTrinh2 = (- b - Math.sqrt(delta)) / (2 * a);


    // Hiển thị kết quả x1 và x2
    alert("Phương trình có 2 nghiệm phân biệt:\n" + "x1 là: " + phuongTrinh1 + "\n" + "x2 là: " + phuongTrinh2);

}