let array = []; // Mảng toàn cục

function hienThiMenu() {
    alert(
        "===== MENU =====\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất và nhỏ nhất\n" +
        "4. Tính tổng các phần tử\n" +
        "5. Tìm số lần xuất hiện của một phần tử\n" +
        "6. Sắp xếp mảng tăng dần\n" +
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

    alert("Mảng đã nhập: " + array.join(", ")); // Hiển thị mảng đã nhập
}

// 2. Hiển thị mảng
function hienThiMang() {
    if (array.length === 0) {
        alert("Mảng đang rỗng. Vui lòng nhập mảng trước.");
    } else {
        alert("Mảng hiện tại là: " + array.join(", "));
    }
}

// tìm số lớn nhỏ
function timMaxMin() {
    if (array.length === 0) {
        alert("Mảng rỗng. Vui lòng nhập mảng trước.");
        return;
    }

    // Khởi tạo giá trị max và min đầu tiên bằng phần tử đầu tiên trong mảng
    let max = array[0];
    let min = array[0];

    // Duyệt qua mảng và tìm max, min
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]; // Cập nhật max nếu tìm thấy phần tử lớn hơn
        }
        if (array[i] < min) {  // Sửa lại lỗi cú pháp ở đây
            min = array[i]; // Cập nhật min nếu tìm thấy phần tử nhỏ hơn
        }
    }

    alert("Giá trị lớn nhất là: " + max + "\nGiá trị nhỏ nhất là: " + min);
}

// Tính tổng
function tinhTong() {
    if (array.length === 0) {
        alert("Mảng rỗng. Vui lòng nhập mảng trước.");
        return;
    }
    let tong = 0;
    for (let i = 0; i < array.length; i++) {
        tong += array[i];
    }
    alert("Tổng các phần tử trong mảng là: " + tong);
}

// đếm số lần xh
function demSoLanXuatHien() {
    if (array.length === 0) {
        alert("Mảng rỗng. Vui lòng nhập mảng trước.");
        return;
    }
    let so = parseInt(prompt("Nhập số cần kiểm tra số lần xuất hiện:"));
    let dem = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === so) {
            dem++;
        }
    }
    alert("Số " + so + " xuất hiện " + dem + " lần trong mảng.");
}

// sắp xếp tăng dần
function sapXepTangDan() {
    if (array.length === 0) {
        alert("Mảng rỗng. Vui lòng nhập mảng trước.");
        return;
    }
    array.sort(function(a, b) {
        return a - b;
    });
    alert("Mảng sau khi sắp xếp tăng dần: " + array.join(", "));
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
            timMaxMin(); // Tìm max min
            break;
        case 4:
            tinhTong();// Tính tổng các phần tử (ví dụ, bạn có thể viết hàm sau)
            break;
        case 5:
            demSoLanXuatHien();// Tìm số lần xuất hiện của một phần tử
            break;
        case 6:
            sapXepTangDan();// Sắp xếp mảng tăng dần
            break;
        case 7:
            alert("Đã thoát chương trình. Hẹn gặp lại!");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn số từ 1 đến 7.");
    }
} while (luaChon !== 7);
