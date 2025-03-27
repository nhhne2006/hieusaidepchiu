let array = []; // Mảng toàn cục

function hienThiMenu() {
    alert(
        "===== MENU =====\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất trong mảng và ra chỉ số của nó\n" +
        "4. Tính tổng và trung bình cộng của các số dương trong mảng\n" +
        "5. Đảo ngược mảng\n" +
        "6. Kiểm tra mảng có dối xứng không\n" +
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

// 3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
function timMaxVaChiSo() {
    if (array.length === 0) {
        alert("Mảng rỗng. Vui lòng nhập mảng trước.");
        return;
    }

    let max = Math.max(...array);
    let index = array.indexOf(max);
    alert("Giá trị lớn nhất là: " + max + "\nChỉ số của phần tử lớn nhất là: " + index);
}

// 4. Tính tổng và trung bình cộng của các số dương trong mảng
function tinhTongTrungBinh() {
    if (array.length === 0) {
        alert("Mảng rỗng. Vui lòng nhập mảng trước.");
        return;
    }

    let tong = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            tong += array[i];
            count++;
        }
    }
    let trungBinh = count > 0 ? tong / count : 0;
    alert("Tổng các số dương là: " + tong + "\nTrung bình cộng các số dương là: " + trungBinh);
}

// 5. Đảo ngược mảng
function daoNguocMang() {
    if (array.length === 0) {
        alert("Mảng rỗng. Vui lòng nhập mảng trước.");
        return;
    }
    array.reverse();
    alert("Mảng sau khi đảo ngược: " + array.join(", "));
}

// 6. Kiểm tra mảng có dối xứng không
function kiemTraDoiXung() {
    if (array.length === 0) {
        alert("Mảng rỗng. Vui lòng nhập mảng trước.");
        return;
    }

    let isSymmetric = true;
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        if (array[i] !== array[array.length - 1 - i]) {
            isSymmetric = false;
            break;
        }
    }
    if (isSymmetric) {
        alert("Mảng là đối xứng.");
    } else {
        alert("Mảng không phải là đối xứng.");
    }
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
            timMaxVaChiSo(); // Tìm phần tử lớn nhất và chỉ số của nó
            break;
        case 4:
            tinhTongTrungBinh(); // Tính tổng và trung bình cộng của các số dương
            break;
        case 5:
            daoNguocMang(); // Đảo ngược mảng
            break;
        case 6:
            kiemTraDoiXung(); // Kiểm tra mảng có đối xứng không
            break;
        case 7:
            alert("Đã thoát chương trình. Hẹn gặp lại!");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn số từ 1 đến 7.");
    }
} while (luaChon !== 7);
