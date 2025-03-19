// Nhập số
let soNhap = Number(prompt("Nhập số nguyên từ 0 đến 999:"));

if (soNhap >= 0 && soNhap <= 999) {
    alert(docSo(soNhap));
} else {
    alert("Vui lòng nhập số từ 0 đến 999!");
}



function docSo(num) {
    let ketQua = "";

    let tram = Math.floor(num / 100);
    let chuc = Math.floor((num % 100) / 10);
    let donVi = num % 10;

    // Đọc hàng trăm
    if (tram > 0) {
        if (tram == 1) {
            ketQua += "một trăm ";
        } else if (tram == 2) {
            ketQua += "hai trăm ";
        } else if (tram == 3) {
            ketQua += "ba trăm ";
        } else if (tram == 4) {
            ketQua += "bốn trăm ";
        } else if (tram == 5) {
            ketQua += "năm trăm ";
        } else if (tram == 6) {
            ketQua += "sáu trăm ";
        } else if (tram == 7) {
            ketQua += "bảy trăm ";
        } else if (tram == 8) {
            ketQua += "tám trăm ";
        } else if (tram == 9) {
            ketQua += "chín trăm ";
        }
    }

    // Đọc hàng chục
    if (chuc > 1) {
        if (chuc == 2) {
            ketQua += "hai mươi ";
        } else if (chuc == 3) {
            ketQua += "ba mươi ";
        } else if (chuc == 4) {
            ketQua += "bốn mươi ";
        } else if (chuc == 5) {
            ketQua += "năm mươi ";
        } else if (chuc == 6) {
            ketQua += "sáu mươi ";
        } else if (chuc == 7) {
            ketQua += "bảy mươi ";
        } else if (chuc == 8) {
            ketQua += "tám mươi ";
        } else if (chuc == 9) {
            ketQua += "chín mươi ";
        }
    } else if (chuc == 1) {
        ketQua += "mười ";
    } else if (tram > 0 && chuc == 0 && donVi != 0) {
        ketQua += "linh ";
    }

    // Đọc hàng đơn vị
    if (donVi != 0) {
        if (donVi == 1 && chuc >= 2) {
            ketQua += "mốt ";
        } else if (donVi == 5 && chuc >= 1) {
            ketQua += "lăm ";
        } else if (donVi == 1) {
            ketQua += "một ";
        } else if (donVi == 2) {
            ketQua += "hai ";
        } else if (donVi == 3) {
            ketQua += "ba ";
        } else if (donVi == 4) {
            ketQua += "bốn ";
        } else if (donVi == 5) {
            ketQua += "năm ";
        } else if (donVi == 6) {
            ketQua += "sáu ";
        } else if (donVi == 7) {
            ketQua += "bảy ";
        } else if (donVi == 8) {
            ketQua += "tám ";
        } else if (donVi == 9) {
            ketQua += "chín ";
        }
    }

    // Trường hợp số 0
    if (tram == 0 && chuc == 0 && donVi == 0) {
        ketQua = "không";
    }

    return ketQua; // Bạn không cần .trim() nếu không muốn
}
