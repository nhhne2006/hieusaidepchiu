// Hàm kiểm tra số nguyên tố
function kiemTraSoNguyenTo(n) {
    // Kiểm tra nếu n không phải là số nguyên dương
    if (typeof n !== 'number' || n <= 1) {
        alert("dữ liệu không hợp lệ");
        return;
    }

    // Kiểm tra số nguyên tố
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            alert(n + " không phải là số nguyên tố");
            return;
        }
    }

    alert(n + " là số nguyên tố");
}

kiemTraSoNguyenTo(17);
kiemTraSoNguyenTo(6);
kiemTraSoNguyenTo("text");
