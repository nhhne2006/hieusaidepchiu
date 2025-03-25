let input = [1, 4, 7, 8, 3]; // Bạn có thể thay đổi dãy số này

let soChan = 0;  // Tổng các số chẵn
let soLe = 0;    // Tổng các số lẻ

// Duyệt qua mảng và tính tổng các số chẵn và lẻ
for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {  // Kiểm tra số chẵn
        soChan += input[i];
    } else {  // Nếu không phải số chẵn thì là số lẻ
        soLe += input[i];
    }
}

// Hiển thị kết quả
alert("Tổng các số chẵn: " + soChan);
alert("Tổng các số lẻ: " + soLe);
