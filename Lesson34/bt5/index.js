let danhSachNhanVien = [
    { ten: "Nguyễn Văn A", chucVu: "Developer" },
    { ten: "Trần Thị B", chucVu: "Designer" },
    { ten: "Phạm Văn C", chucVu: "Project Manager" }
];

let duLieuLocal = localStorage.getItem("dsNhanVien");
if (duLieuLocal) {
    danhSachNhanVien = JSON.parse(duLieuLocal);
}

const tbody = document.getElementById("bangNhanVien");
const inputTen = document.getElementById("tenNhanVien");
const inputChucVu = document.getElementById("chucVu");
const btnThem = document.getElementById("btnThem");

function hienThiNhanVien() {
    let html = "";
    danhSachNhanVien.forEach((nv, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>${nv.ten}</td>
                <td>${nv.chucVu}</td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

function luuVaoLocal() {
    localStorage.setItem("dsNhanVien", JSON.stringify(danhSachNhanVien));
}

function themNhanVien() {
    let ten = inputTen.value.trim();
    let chucVu = inputChucVu.value.trim();

    if (ten && chucVu) {
        danhSachNhanVien.push({ ten, chucVu });
        luuVaoLocal();
        hienThiNhanVien();
        inputTen.value = "";
        inputChucVu.value = "";
    } else {
        alert("Vui lòng nhập đầy đủ thông tin.");
    }
}

btnThem.addEventListener("click", () => {
    themNhanVien();
});

hienThiNhanVien();
