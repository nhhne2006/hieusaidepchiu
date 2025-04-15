let danhSachTaiKhoan = [
    {
        id: 1,
        name: "Hiệu nè mày",
        date: "2006-01-14",
        status: "Hoàn Thành",
        phuTrach: "Tao làm"
    }
];

// Lấy dữ liệu từ Local Storage 
let duLieuLocal = localStorage.getItem("danhSachTaiKhoan");
if (duLieuLocal) {
    danhSachTaiKhoan = JSON.parse(duLieuLocal);
}

let body = document.getElementById("body");
let chinhSua = document.getElementById("chinhSua");
let nutLuu = document.getElementById("btn-luu");


function hienThiDanhSach() {
    let luuTruDanhSach = "";
    danhSachTaiKhoan.forEach((taiKhoan, index) => {
        luuTruDanhSach += `
            <tr>
                <td>${index}</td>
                <td>${taiKhoan.name}</td>
                <td>${taiKhoan.date}</td>
                <td>${taiKhoan.status}</td>
                <td>${taiKhoan.phuTrach}</td>
                <td>
                    <button onclick="chinhSuaDanhSach(${index})">Sửa</button>
                    <button onclick="xoaDanhSach(${index})">Xóa</button>
                </td>
            </tr>`;
    });
    body.innerHTML = luuTruDanhSach;
}


function luuVaoLocalStorage() {
    localStorage.setItem("danhSachTaiKhoan", JSON.stringify(danhSachTaiKhoan));
}

function themDanhSach() {
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let status = document.getElementById("status").value;
    let phuTrach = document.getElementById("phuTrach").value;

    danhSachTaiKhoan.push({ name, date, status, phuTrach });
    luuVaoLocalStorage();
    hienThiDanhSach();
}

let button = document.getElementById("summit");
button.addEventListener("click", () => {
    themDanhSach();
});


let indexDangSua = null;

function chinhSuaDanhSach(index) {
    chinhSua.style.display = "flex";
    indexDangSua = index;

    document.getElementById("edit-name").value = danhSachTaiKhoan[index].name;
    document.getElementById("edit-date").value = danhSachTaiKhoan[index].date;
    document.getElementById("edit-status").value = danhSachTaiKhoan[index].status;
    document.getElementById("edit-phuTrach").value = danhSachTaiKhoan[index].phuTrach;
}

nutLuu.addEventListener("click", () => {
    let name = document.getElementById("edit-name").value;
    let date = document.getElementById("edit-date").value;
    let status = document.getElementById("edit-status").value;
    let phuTrach = document.getElementById("edit-phuTrach").value;

    danhSachTaiKhoan[indexDangSua] = { name, date, status, phuTrach };
    luuVaoLocalStorage();
    chinhSua.style.display = "none";
    hienThiDanhSach();
});

// Xóa danh sách
function xoaDanhSach(index) {
    let check = confirm("Bạn có chắc muốn xóa không?");
    if (check) {
        danhSachTaiKhoan.splice(index, 1);
        luuVaoLocalStorage();
        hienThiDanhSach();
    }
}

hienThiDanhSach();
