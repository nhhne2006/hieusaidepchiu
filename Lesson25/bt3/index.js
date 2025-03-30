// Hàm kiểm tra và hiển thị các phần tử chẵn trong mảng
function kiemTraSoChan(arr) {
    // Kiểm tra nếu tham số không phải là mảng
    if (!Array.isArray(arr)) {
        alert("dữ liệu không hợp lệ");
        return;
    }

    // Mảng lưu các số chẵn
    let soChan = [];

    // Duyệt mảng và kiểm tra phần tử chẵn
    for (let i = 0; i < arr.length; i++) {
        // Kiểm tra nếu phần tử là số và là số chẵn
        if (typeof arr[i] === 'number' && arr[i] % 2 === 0) {
            soChan.push(arr[i]);
        }
    }

    // Kiểm tra mảng số chẵn có rỗng không
    if (soChan.length === 0) {
        alert("mảng không chứa số chẵn");
    } else {
        alert("Các phần tử chẵn trong mảng là: " + soChan.join(', '));
    }
}

kiemTraSoChan([11, 4, 65, 6]);
kiemTraSoChan([1, 3, 5, 17]);
kiemTraSoChan("text");