let input1 = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

// Hàm sắp xếp mảng theo thứ tự tăng dần bằng thuật toán Bubble Sort
function bubbleSort(mang) {
    let n = mang.length;
    // Duyệt qua tất cả các phần tử trong mảng
    for (let i = 0; i < n; i++) {
        // Lặp qua mảng chưa được sắp xếp
        for (let j = 0; j < n - i - 1; j++) {
            // Nếu phần tử tại vị trí j lớn hơn phần tử tại vị trí j+1, đổi chỗ chúng
            if (mang[j] > mang[j + 1]) {
                let temp = mang[j];
                mang[j] = mang[j + 1];
                mang[j + 1] = temp;
            }
        }
    }
}

bubbleSort(input1);

// Sử dụng join để chuyển mảng thành chuỗi và hiển thị kết quả
alert("Output 1: " + input1.join(", "));
