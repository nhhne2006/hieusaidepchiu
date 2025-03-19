let nhapSo = prompt("Vui lòng nhập số từ 0 -> 9 mà bạn muốn đọc");

if (nhapSo === null || nhapSo.trim() === "") {
    alert("Bạn chưa nhập gì cả...");
} else {
    nhapSo = Number(nhapSo);
    switch (nhapSo) {
        case 0:
            alert("Số không");
            break;
        case 1:
            alert("Số một");
            break;
        case 2:
            alert("Số hai");
            break;
        case 3:
            alert("Số ba");
            break;
        case 4:
            alert("Số bốn");
            break;
        case 5:
            alert("Số năm");
            break;
        case 6:
            alert("Số sáu");
            break;
        case 7:
            alert("Số bảy");
            break;
        case 8:
            alert("Số tám");
            break;
        case 9:
            alert("Số chín");
            break;
        default:
            alert("Số không hợp lệ! Vui lòng nhập từ 0 đến 9.");
    }
}
