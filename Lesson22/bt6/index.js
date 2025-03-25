let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];  // Mảng số nguyên có sẵn

let input = prompt("Mời bạn nhập vào một số nguyên bất kỳ");  // Yêu cầu người dùng nhập số

let count = 0;  // Biến đếm số lần xuất hiện của số

// Duyệt qua mảng để đếm số lần xuất hiện của số đã nhập
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === Number(input)) {  // So sánh phần tử trong mảng với giá trị nhập vào
        count++;  // Tăng biến đếm lên nếu tìm thấy số
    }
}

// Hiển thị kết quả
if (count > 0) {
    alert("Số " + input + " xuất hiện " + count + " lần trong mảng");
} else {
    alert("Số " + input + " không tồn tại trong mảng");
}
