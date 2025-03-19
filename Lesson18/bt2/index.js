let toan = Number(prompt("Vui lòng nhập điểm Toán của bạn"));
let van = Number(prompt("Vui lòng nhập điểm Văn của bạn"));
let anh = Number(prompt("Vui lòng nhập điểm Tiếng Anh của bạn"));

let sum = (toan + van + anh) / 3

let soThapPhan = sum.toFixed(2); // Lấy 2 số cuối thập phân

alert("Số điểm trung bình của bạn là: " + sum + " điểm");

function kiemTraDiem(){
    if(sum >= 8){
        alert("Bạn được danh hiệu học sinh Giỏi");
    } else if (sum >= 6.5 && sum <= 8){
        alert("Bạn được danh hiệu học sinh Khá");
    }else if(sum >= 5.0 && sum <=6.4){
        alert("Bạn được danh hiệu học sinh Trung Bình");
    }else{
        alert("Tệ quá bạn được học sinh Yếu");
    }
}

kiemTraDiem()