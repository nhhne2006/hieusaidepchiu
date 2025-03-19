let kinhNghiem = Number(prompt("Vui lòng nhập số năm kinh nghiệm của bạn"));

function checkNhanVien(){
    if (kinhNghiem < 0.9){
        alert("Mới vào nghề");
    } else if(kinhNghiem >= 1 && kinhNghiem <=3){
        alert("Nhân viên có kinh nghiệm");
    }else if(kinhNghiem >= 4 && kinhNghiem <=5.9){
        alert("Chuyên viên");
    }else{
        alert("Quản lý");
    }
}

checkNhanVien();