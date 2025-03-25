let input = prompt("Mời bạn nhập vào 1 chuỗi bất kì");

// Kiểm tra xem người dùng có phải nhập số hay không
if(!isNaN(input)) {
    // .split("") tạo 1 chuỗi rỗng và hàm này dùng để tách số ra và biến nó thành chuỗi vd 123 nó sẽ chuyển sang thành chuỗi  và tách"1" "2" "3"
    // reverse() hàm dùng để đảo ngược 
    // .join("") ngược lại với hàm split thì hàm này sẽ nối các phần tử trong mảng lại thành 1 chuỗi dính liền
    let daoNguocChuoi = input.split("").reverse().join("");
    alert("Kết quả đảo ngược chuỗi là: " + daoNguocChuoi);
} else{
    alert("Chuỗi không hợp lệ")
}