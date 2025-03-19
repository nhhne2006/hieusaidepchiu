let year = Number(prompt("Vui lòng nhập năm cần kiểm tra:"));

// isNaN dùng để kiểm tra xem nó có phải là chữ hay số
// nếu nó là số thì sẽ trả về false và bỏ qua bước (Bạn phải nhập số)
// còn ngược lại là true thì nó sẽ thực hiện bước (Bạn phải nhập số)
if (isNaN(year)) {
    alert("Bạn phải nhập số");
} else {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        alert(year + " là năm nhuận");
    } else {
        alert(year + " không phải là năm nhuận");
    }
}
