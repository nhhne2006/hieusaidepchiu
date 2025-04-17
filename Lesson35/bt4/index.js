let danhSachNhanVien = [
    { ten: "Nguyễn Văn A", chucVu: "Developer" },
    { ten: "Trần Thị B", chucVu: "Designer" },
    { ten: "Phạm Văn C", chucVu: "Project Manager" },
];

const ITEMS_PER_PAGE = 3;
let currentPage = 1;

let duLieuLocal = localStorage.getItem("dsNhanVien");
if (duLieuLocal) {
    danhSachNhanVien = JSON.parse(duLieuLocal);
}

const tbody = document.getElementById("bangNhanVien");
const inputTen = document.getElementById("tenNhanVien");
const inputChucVu = document.getElementById("chucVu");
const btnThem = document.getElementById("btnThem");

// Tạo div phân trang động
const divPhanTrang = document.createElement("div");
divPhanTrang.style.marginTop = "10px";
document.body.appendChild(divPhanTrang);

function hienThiNhanVien(page = 1) {
    currentPage = page;
    const batDau = (page - 1) * ITEMS_PER_PAGE;
    const ketThuc = batDau + ITEMS_PER_PAGE;
    const nhanViens = danhSachNhanVien.slice(batDau, ketThuc);

    let html = "";
    nhanViens.forEach((nv, index) => {
        html += `
            <tr>
                <td>${batDau + index + 1}</td>
                <td>${nv.ten}</td>
                <td>${nv.chucVu}</td>
            </tr>
        `;
    });
    tbody.innerHTML = html;

    hienThiPhanTrang();
}

function hienThiPhanTrang() {
    let soTrang = Math.ceil(danhSachNhanVien.length / ITEMS_PER_PAGE);
    let html = `<button ${currentPage === 1 ? "disabled" : ""} onclick="chuyenTrang(${currentPage - 1})">Previous</button>`;

    for (let i = 1; i <= soTrang; i++) {
        html += `<button ${i === currentPage ? "disabled" : ""} onclick="chuyenTrang(${i})">${i}</button>`;
    }

    html += `<button ${currentPage === soTrang ? "disabled" : ""} onclick="chuyenTrang(${currentPage + 1})">Next</button>`;
    divPhanTrang.innerHTML = html;
}

function chuyenTrang(trang) {
    hienThiNhanVien(trang);
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
        let soTrangMoi = Math.ceil(danhSachNhanVien.length / ITEMS_PER_PAGE);
        hienThiNhanVien(soTrangMoi); // chuyển đến trang mới nhất
        inputTen.value = "";
        inputChucVu.value = "";
    } else {
        alert("Vui lòng nhập đầy đủ thông tin.");
    }
}

btnThem.addEventListener("click", themNhanVien);

window.chuyenTrang = chuyenTrang; // Để gọi được từ HTML onclick

hienThiNhanVien();
