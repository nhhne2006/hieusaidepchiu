// Hàm kiểm tra và tìm phần tử nhỏ nhất trong mảng
function timPhanTuNhoNhat(arr) {
    // Kiểm tra nếu mảng rỗng
    if (arr.length === 0) {
        alert("mảng không chứa phần tử");
        return;
    }

    // Biến để lưu trữ giá trị nhỏ nhất, khởi tạo với giá trị lớn nhất có thể
    let min = Infinity;

    // Duyệt mảng và tìm giá trị nhỏ nhất
    for (let i = 0; i < arr.length; i++) {
        // Kiểm tra nếu phần tử không phải là số hợp lệ
        if (typeof arr[i] !== 'number') {
            alert("giá trị không hợp lệ");
            return;
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }
    alert("Phần tử nhỏ nhất trong mảng là " + min);
}

timPhanTuNhoNhat([2, 4, 8, 1, 9]);
timPhanTuNhoNhat([]);
timPhanTuNhoNhat([5, 2, 7, 5, 4]);
timPhanTuNhoNhat(['a', 'b', 'c']);
