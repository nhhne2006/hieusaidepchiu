let nhapThang = parseInt(prompt("Vui lòng nhập tháng bạn muốn xem"));

if (nhapThang >= 1 && nhapThang <= 3) {
    alert("Mùa xuân");
} else if (nhapThang >= 4 && nhapThang <= 6) {
    alert("Mùa hạ");
} else if (nhapThang >= 7 && nhapThang <= 9) {
    alert("Mùa thu");
} else if (nhapThang >= 10 && nhapThang <= 12) {
    alert("Mùa đông");
} else {
    alert("Tháng bạn nhập không hợp lệ !!!");
}
