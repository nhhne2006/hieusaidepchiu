let danhSachSinhVien = [];

// thêm sinh viên
function themSinhVien() {
    let soLuongSV = Number(prompt("Vui lòng nhập số lượng sinh viên bạn muốn thêm"));
    for (let i = 0; i < soLuongSV; i++) {
        let tenSinhVien = prompt("Nhập tên sinh viên thứ " + (i + 1) + " :");
        danhSachSinhVien.push(tenSinhVien);
    }
    alert("Thêm sinh viên thành công");
}

// hiển thị danh sách sinh viên
function hienThiSinhVien() {
    if (danhSachSinhVien.length === 0) {
        alert("Bạn chưa nhập số lượng sinh viên");
        return;
    } else {
        alert("Danh sách sinh viên: \n" + danhSachSinhVien.join("\n"));
    }
}

// tìm sinh viên theo tên
function timSinhVien() {
    let tenCanTim = prompt("Nhập tên sinh viên cần tìm");
    let timKiem = danhSachSinhVien.filter(sinhVien => sinhVien.toLowerCase() === tenCanTim.toLowerCase());
    if (timKiem.length > 0) {
        alert("Sinh viên bạn tìm được là: " + timKiem.join(","));
    } else {
        alert("Không tìm thấy tên sinh viên");
    }
}

function xoaSinhVien() {
    let tenCanXoa = prompt("Nhập tên sinh viên cần xóa");

    // Tìm chỉ số của sinh viên trong mảng
    let index = danhSachSinhVien.findIndex(sinhVien => sinhVien.toLowerCase() === tenCanXoa.toLowerCase());

    // Kiểm tra nếu sinh viên tồn tại trong mảng
    if (index !== -1) {
        danhSachSinhVien.splice(index, 1); // Xóa sinh viên tại vị trí index
        alert("Đã xóa sinh viên: " + tenCanXoa);
    } else {
        alert("Không tìm thấy sinh viên để xóa");
    }
}


function menu() {
    let luaChon;
    do {
        luaChon = Number(prompt("Chọn chức năng:\n1. Nhập danh sách sinh viên\n2. Hiển thị danh sách sinh viên\n3. Tìm sinh viên theo tên\n4. Xóa sinh viên khỏi danh sách\n5. Thoát"));

        switch (luaChon) {
            case 1:
                themSinhVien();
                break;
            case 2:
                hienThiSinhVien();
                break;
            case 3:
                timSinhVien();
                break;
            case 4:
                xoaSinhVien();
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    } while (luaChon !== 5);
}

menu();