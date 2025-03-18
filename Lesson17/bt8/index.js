let dateOne = prompt("Vui lòng nhập ngày đầu tiên (YYYY-MM-DD): ");
let dateTwo = prompt("Vui lòng nhập ngày thứ hai (YYYY-MM-DD): ");

let dateOneNeMay = new Date(dateOne);
let dateTwoNeMay = new Date(dateTwo);

let tinhNgay = Math.abs(dateOneNeMay - dateTwoNeMay);
// Dùng Math.abs để tránh số âm
// Sau khi trừ thì nó sẽ ra mili giây
// Thì chúng ta sẽ dùng Công thức để chuyển đổi mili giây sang ngày để tính chuẩn xác

let chuyenDoiMiliseconds = tinhNgay / (1000 * 3600 * 24);

alert("Số ngày chên lệch là: " + chuyenDoiMiliseconds + " ngày");


