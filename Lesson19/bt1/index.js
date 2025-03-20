let nhapThang = Number(prompt("Vui lòng nhập tháng mà bạn muốn kiểm tra"));

switch (nhapThang) {
    // Tháng có 31 ngày
    case 1:
        alert("Tháng " + nhapThang + " có 31 ngày");
        break;
    case 3:
        alert("Tháng " + nhapThang + " có 31 ngày");
        break;
    case 5:
        alert("Tháng " + nhapThang + " có 31 ngày");
        break;
    case 7:
        alert("Tháng " + nhapThang + " có 31 ngày");
        break;
    case 8:
        alert("Tháng " + nhapThang + " có 31 ngày");
        break;
    case 10:
        alert("Tháng " + nhapThang + " có 31 ngày");
        break;
    case 12:
        alert("Tháng " + nhapThang + " có 31 ngày");
        break;

    // Tháng có 30 ngày
    case 4:
        alert("Tháng " + nhapThang + " có 30 ngày");
        break;
    case 6:
        alert("Tháng " + nhapThang + " có 30 ngày");
        break;
    case 9:
        alert("Tháng " + nhapThang + " có 30 ngày");
        break;
    case 11:
        alert("Tháng " + nhapThang + " có 30 ngày");
        break;

    // Tháng có 28-29 ngày
    case 2:
        alert("tháng 2 có 28 hoặc 29 ngày năm nhuận");
        break;
    
    // điều kiện khi nhập sai
    default:
        alert("Bạn phải nhập số từ 1-12 tháng");
        break;





}