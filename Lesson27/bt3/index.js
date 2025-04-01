// tính diện tích hình tròn
function dienTichHinhTron(banKinh) {
    return Math.PI * Math.pow(banKinh, 2);
}

// tính chu vi hình tròn
function chuViHinhTron(banKinh) {
    return 2 * Math.PI * banKinh;
}

// tính diện tích hình chữ nhật
function dienTichHinhChuNhat(chieuDai, chieuRong) {
    return chieuDai * chieuRong;
}

// tính chu vi hình chữ nhật
function chuViHinhChuNhat(chieuDai, chieuRong) {
    return 2 * (chieuDai + chieuRong);
}

function menu() {

    let luaChon;
    do {
        luaChon = Number(prompt("Chọn chức năng:\n1. Tính diện tích hình tròn\n2. Tính chu vi hình tròn\n3. Tính diện tích hình chữ nhật\n4. Tính chu vi hình chữ nhật\n5. Thoát"));

        switch (luaChon) {
            case 1:
                let banKinhTron = parseFloat(prompt("Vui lòng nhập bán kính"));
                alert("Diện tích hình tròn là: " + dienTichHinhTron(banKinhTron));
                break;
            case 2:
                let banKinh = parseFloat(prompt("Vui lòng nhập bán kính"));
                alert("Chu vi hình tròn là: " + chuViHinhTron(banKinh));
                break;
            case 3:
                let chieuDaiHcn = parseFloat(prompt("Vui lòng nhập chiều dài"));
                let chieuRongHcn = parseFloat(prompt("Vui lòng nhập chiều rộng"));
                alert("Diện tích hình chữ nhật là: " + dienTichHinhChuNhat(chieuDaiHcn, chieuRongHcn));
                break;
            case 4:
                let chieuDaiChuVi = parseFloat(prompt("Vui lòng nhập chiều dài"));
                let chieuRongChuVi = parseFloat(prompt("Vui lòng nhập chiều rộng"));
                alert("Chu vi hình chữ nhật là: " + chuViHinhChuNhat(chieuDaiChuVi, chieuRongChuVi));
                break;
            case 5:
                alert("Bạn đã thoát khỏi chương trình");
                break;
            default:
                alert("Vui lòng nhập lựa chọn của bạn");
        }
    } while(luaChon !== 5);
}

menu();