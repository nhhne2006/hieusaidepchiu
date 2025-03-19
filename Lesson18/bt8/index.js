let a = Number(prompt("Nhập cạnh a:"));
let b = Number(prompt("Nhập cạnh b:"));
let c = Number(prompt("Nhập cạnh c:"));

// Kiểm tra xem tam giác có hợp lệ không 
if (a + b > c && a + c > b && b + c > a) {

    // Xác định xem loại tam giác
    if (a === b && b === c) {
        alert("Tam giác đều");

    } else if (a === b || b === c || a === c) {
        if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
            alert("Tam giác vuông cân");

        } else {
            alert("Tam giác cân");
        }

    } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        alert("Tam giác vuông");
    } else {
        alert("Tam giác thường");
    }
} else {
    alert("Ba cạnh không tạo thành hình tam giác");
}
