let a = Number(prompt("Nhập hệ số a:"));
let b = Number(prompt("Nhập hệ số b:"));
let c = Number(prompt("Nhập hệ số c:"));

if (a === 0) {
    alert("Đây không phải phương trình bậc 2!");
} else {
    // tính delta
    let delta = b * b - 4 * a * c;
    
    if (delta < 0) {
        alert("Phương trình vô nghiệm");

    } else if (delta === 0) {
        // tính nghiệm kép
        let x = -b / (2 * a);
        alert("Phương trình có nghiệm kép x1 = x2 = " + x);
    } else {
        // tính nghiệm phân biệt
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert("Phương trình có 2 nghiệm phân biệt:\n x1 = " + x1 + "; x2 = " + x2);
    }
}
