let input = prompt("Mời bạn nhập vào một dãy số");

// Kiểm tra nếu đầu vào hợp lệ (chỉ chứa số)
if (!isNaN(input) && input.trim() !== "") {
    // Tách chuỗi thành mảng các ký tự
    let kiemTra = input.split("");

    // Khởi tạo max là một số rất nhỏ (âm vô cùng)
    let max = -Infinity;

    // Duyệt qua mảng và tìm số lớn nhất
    for (let i = 0; i < kiemTra.length; i++) {
        let num = Number(kiemTra[i]); // Chuyển từng ký tự thành số
        if (num > max) {
            max = num;  // Cập nhật max nếu tìm được giá trị lớn hơn
        }
    }

    alert(max + " là số lớn nhất trong dãy số");
} else {
    alert("Dãy số không hợp lệ");
}
