let moiNhapSo = alert("Mời bạn nhập vào 3 số a b c để giải phương trình");

let a = parseInt(prompt("Nhập giá trị a"));
let b = parseInt(prompt("Nhập giá trị b"));
let c = parseInt(prompt("Nhập giá trị c"));

let delta = b * b - 4 * a * c;

// Kiểm tra các trường hợp nghiệm của phương trình
if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);  // Nghiệm thứ nhất
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);  // Nghiệm thứ hai
    alert("Phương trình có hai nghiệm phân biệt: x1 = " + x1 + " và x2 = " + x2);

} else if (delta === 0) {
    let x = -b / (2 * a);  // Nghiệm kép
    alert("Phương trình có nghiệm kép: x = " + x);
    
} else {
    alert("Phương trình vô nghiệm.");
}