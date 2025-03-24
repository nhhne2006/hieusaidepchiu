let nhapSo = alert("Mời bạn nhập vào 5 số nguyên");

let tongSoLe = 0;

for (let i = 1; i <= 5; i++){
    let nhapSo = parseInt(prompt("Vui lòng nhập số thứ " + i));
    if (nhapSo % 2 !== 0){ // kiểm tra xem có phải là số lẻ không
        tongSoLe += nhapSo; // lưu số lẻ vào biến tongSoLe
    }
}

alert("Tổng các số lẻ đã nhập vào là: " + tongSoLe)