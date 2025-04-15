let danhSachTodo = [];
let duLieuLocal = localStorage.getItem("todoList");
if (duLieuLocal) {
    danhSachTodo = JSON.parse(duLieuLocal);
}

const ul = document.getElementById("todoList");
const input = document.getElementById("inputTodo");
const btnThem = document.getElementById("btnThem");

function hienThiDanhSach() {
    let html = "";
    danhSachTodo.forEach((item, index) => {
        html += `
        <li>
            ${item.congViec}
            <button class="btn-xoa" onclick="xoaTodo(${index})">Xóa</button>
        </li>`;
    });
    ul.innerHTML = html;
}


function luuVaoLocalStorage() {
    localStorage.setItem("todoList", JSON.stringify(danhSachTodo));
}

function themTodo() {
    let congViec = input.value.trim();
    if (congViec) {
        danhSachTodo.push({ congViec }); // Sửa ở đây
        luuVaoLocalStorage();
        hienThiDanhSach();
        input.value = "";
    } else {
        alert("Vui lòng nhập công việc.");
    }
}


function xoaTodo(index) {
    let xacNhan = confirm("Bạn có chắc muốn xóa công việc này?");
    if (xacNhan) {
        danhSachTodo.splice(index, 1);
        luuVaoLocalStorage();
        hienThiDanhSach();
    }
}

// Sự kiện nút thêm
btnThem.addEventListener("click", () => {
    themTodo();
});

// Hiển thị danh sách khi tải trang
hienThiDanhSach();