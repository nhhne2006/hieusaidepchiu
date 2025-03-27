let array = []; // Mảng toàn cục

function hienThiMenu() {
    alert(
        "===== MENU =====\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tính các phần tử chẵn và lẻ\n" +
        "4. Tính trung bình cộng của mảng\n" +
        "5. Xóa phần tử tại vị trí chỉ định\n" +
        "6. Tìm phần tử lớn nhất và nhỏ nhất\n" +
        "7. Thoát"
    );
}

// 1. Nhập mảng
function nhapMang() {
    let input = prompt("Mời bạn nhập các số nguyên cách nhau bằng dấu phẩy (ví dụ: 1, 2, 3, 4...)");

    array = input.split(",").map(function (item) {
        item = item.trim(); // Loại bỏ khoảng trắng ở đầu và cuối phần tử
        return parseInt(item); // Chuyển phần tử thành số nguyên
    });

    alert("Mảng đã nhập: " + array.join(", "));
}

// 2. Hiển thị mảng
function hienThiMang() {
    if (array.length === 0) {
        alert("Mảng đang rỗng. Vui lòng nhập mảng trước.");
    } else {
        alert("Mảng hiện tại là: " + array.join(", "));
    }
}

// 3. Tính các phần tử chẵn và lẻ
function tinhChanLe() {
    if (array.length === 0) {
        alert("Mảng rỗng. Vui lòng nhập mảng trước.");
        return;
    }

    let chan = 0, le = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            chan++;
        } else {
            le++;
        }
    }

    alert("Số phần tử chẵn: " + chan + "\nSố phần tử lẻ: " + le);
}

// 4. Tính trung bình cộng của mảng
function tinhTrungBinh() {
    if (array.length === 0) {
        alert("Mảng rỗng. Vui lòng nhập mảng trước.");
        return;
    }

    let tong = 0;
    for (let i = 0; i < array.length; i++) {
        tong += array[i];
    }
    let trungBinh = tong / array.length;

    alert("Trung bình cộng của mảng là: " + trungBinh);
}

// 5. Xóa phần tử tại vị trí chỉ định
function xoaPhanTu() {
    if (array.length === 0) {
        alert("Mảng rỗng. Vui lòng nhập mảng trước.");
        return;
    }

    let viTri = parseInt(prompt("Nhập vị trí cần xóa (từ 0 đến " + (array.length - 1) + "):"));
    if (viTri >= 0 && viTri < array.length) {
        array.splice(viTri, 1);
        alert("Mảng sau khi xóa: " + array.join(", "));
    } else {
        alert("Vị trí không hợp lệ.");
    }
}

// 6. Tìm phần tử lớn nhất và nhỏ nhất
function timMaxMin() {
    if (array.length === 0) {
        alert("Mảng rỗng. Vui lòng nhập mảng trước.");
        return;
    }

    let max = Math.max(...array);
    let min = Math.min(...array);

    alert("Giá trị lớn nhất là: " + max + "\nGiá trị nhỏ nhất là: " + min);
}

let luaChon;
do {
    hienThiMenu(); // Hiển thị menu
    luaChon = parseInt(prompt("Mời bạn chọn chức năng (1-7):")); // Người dùng chọn chức năng

    switch (luaChon) {
        case 1:
            nhapMang(); // Gọi hàm nhập mảng
            break;
        case 2:
            hienThiMang(); // Hiển thị mảng
            break;
        case 3:
            tinhChanLe(); // Tính phần tử chẵn và lẻ
            break;
        case 4:
            tinhTrungBinh(); // Tính trung bình cộng của mảng
            break;
        case 5:
            xoaPhanTu(); // Xóa phần tử tại vị trí chỉ định
            break;
        case 6:
            timMaxMin(); // Tìm phần tử lớn nhất và nhỏ nhất
            break;
        case 7:
            alert("Đã thoát chương trình. Hẹn gặp lại!");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn số từ 1 đến 7.");
    }
} while (luaChon !== 7);
