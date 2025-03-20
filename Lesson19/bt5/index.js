let chuoi = prompt("Nhập vào một chuỗi bất kỳ:");

// Hàm .includes() sẽ kiểm tra trong chuỗi có chứa dấu cách " " không
if (chuoi.includes(" ")) {
    alert("Chuỗi chứa dấu cách");
} else {
    alert("Chuỗi không chứa dấu cách");
}
