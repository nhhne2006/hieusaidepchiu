    let tienGui = prompt("Mời bạn nhập số tiền cần gửi: ");
    let thangGui = prompt("Mời bạn nhập số tháng: ");
    let laiSuat = 0.043; // lãi suất 4.3%

    let tinhLai = tienGui * laiSuat * thangGui / 12;

    alert("Số tiền bạn nhận được sau " + thangGui +" tháng gửi là: " + tinhLai.toLocaleString('vi-VN') + " Vnđ");
