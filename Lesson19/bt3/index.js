let luaChon = Number(prompt("Nhập phím 1 để đổi tiền Vnd->Usd\nNhập phím 2 để đổi tiền Usd->Vnd"));
const tyGia = 23000;

switch (luaChon) {
    case 1:
        let tienVnd = Number(prompt("Nhập số tiền Vnd cần đổi"));
        if (tienVnd > 0) {
            let tienUsd = tienVnd / tyGia;
            alert(tienVnd + " Vnd" + " = " + tienUsd + " USD");
        } else {
            alert("Số tiền bạn nhập không hợp lệ");
        }
        break;

    case 2:
        let tienUsd = Number(prompt("Nhập số tiền USD cần đổi:"));
        if (tienUsd > 0) {
            let tienVnd = tienUsd * tyGia;
            alert(tienUsd + " Usd" + " = " + tienVnd + " Vnd");
        } else {
            alert("Số tiền không hợp lệ!");
        }
        break;
        
    default:
        alert("Lựa chọn không hợp lệ.\nVui lòng nhập 1 hoặc 2!");
}
