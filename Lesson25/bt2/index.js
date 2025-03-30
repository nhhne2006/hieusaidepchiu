// Hàm tính tổng hai số
function tinhTongHaiSo(a, b) {
    // Kiểm tra xem cả hai tham số có phải là số nguyên không
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("dữ liệu không hợp lệ");
        return;
    }

    // Tính tổng hai số
    let tong = a + b;
    alert("Tổng hai số là " + tong);
}

tinhTongHaiSo(2, 6);
tinhTongHaiSo(3, "text");
tinhTongHaiSo(-7, -7);
tinhTongHaiSo(4.5, 3);
