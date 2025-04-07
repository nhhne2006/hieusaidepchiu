let sanPham = [
    {
        id: 1,
        ten: "Mèn Mén",
        gia: 20000,
        soLuong: 20,
        danhMuc: "Món ăn dân tộc Mông",
    },
    {
        id: 2,
        ten: "Mứt",
        gia: 80000,
        soLuong: 21,
        danhMuc: "Món ăn dân tộc Kinh",
    },
    {
        id: 3,
        ten: "Cơm Lam",
        gia: 40000,
        soLuong: 15,
        danhMuc: "Món ăn dân tộc Mông",
    },
    {
        id: 4,
        ten: "Bánh Đậu Xanh",
        gia: 60000,
        soLuong: 30,
        danhMuc: "Món ăn dân tộc Kinh",
    },
];

let cart = [];

function nhapLuaChon() {
    let luaChon;
    do {
        luaChon = Number(prompt("Nhập vào lựa chọn của bạn:"));
        if (isNaN(luaChon) || luaChon <= 0)
            alert("Giá trị nhập vào không hợp lệ!");
    } while (isNaN(luaChon) || luaChon <= 0);
    return luaChon;
}

function hienThiSanPham(sanPham) {
    if (sanPham.length === 0) {
        alert("Chưa có sản phẩm!");
        return;
    }

    let danhMucSanPham = {};
    sanPham.forEach((sp) => {
        if (!danhMucSanPham[sp.danhMuc]) danhMucSanPham[sp.danhMuc] = [];
        danhMucSanPham[sp.danhMuc].push(sp);
    });

    let productList = "Danh sách sản phẩm:\n";
    for (let danhMuc in danhMucSanPham) {
        productList += `Danh mục: ${danhMuc}\n`;
        danhMucSanPham[danhMuc].forEach((sp) => {
            productList += `ID: ${sp.id}\nTên: ${sp.ten}\nGiá: ${sp.gia}\nSố lượng: ${sp.soLuong}\n-----------------------------\n`;
        });
    }
    alert(productList); // Hiển thị tất cả sản phẩm trong một lần
}

function themVaoGioHang(cart, sanPham) {
    let id;
    do {
        id = Number(prompt("Nhập vào id sản phẩm"));
        if (isNaN(id) || id <= 0) alert("Id sản phẩm không hợp lệ!");
    } while (isNaN(id) || id <= 0);

    let sp = sanPham.find((p) => p.id === id);

    if (!sp) {
        alert("ID sản phẩm không tồn tại!");
        return;
    }

    if (sp.soLuong === 0) {
        alert("Số lượng sản phẩm đã hết!");
        return;
    }

    let soLuong;
    do {
        soLuong = Number(prompt("Nhập vào số lượng sản phẩm"));
        if (isNaN(soLuong) || soLuong <= 0 || soLuong > sp.soLuong)
            alert("Số lượng sản phẩm không hợp lệ!");
    } while (isNaN(soLuong) || soLuong <= 0 || soLuong > sp.soLuong);

    sp.soLuong -= soLuong;

    let gioHangItem = cart.find((item) => item.id === id);
    if (gioHangItem) {
        gioHangItem.soLuong += soLuong;
    } else {
        cart.push({
            id: sp.id,
            ten: sp.ten,
            gia: sp.gia,
            soLuong: soLuong,
            danhMuc: sp.danhMuc,
        });
    }

    alert("Thêm sản phẩm thành công!");
}

function sapXepSanPham(sanPham) {
    while (true) {
        alert(`\n   Chọn cách sắp xếp`);
        alert("   1. Sắp xếp theo giá tăng dần");
        alert("   2. Sắp xếp theo giá giảm dần");
        alert("   3. Quay lại menu chính");
        let luaChon = nhapLuaChon();

        if (luaChon === 3) break;

        switch (luaChon) {
            case 1:
                sanPham.sort((a, b) => a.gia - b.gia);
                alert("Đã sắp xếp theo giá tăng dần!");
                hienThiSanPham(sanPham);
                break;

            case 2:
                sanPham.sort((a, b) => b.gia - a.gia);
                alert("Đã sắp xếp theo giá giảm dần!");
                hienThiSanPham(sanPham);
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    }
}

function hienThiGioHang(cart) {
    if (cart.length === 0) {
        alert("\nGiỏ hàng trống!");
        return;
    }

    let gioHangList = "\nDanh sách sản phẩm trong giỏ hàng:\n";
    let tongTien = 0;
    cart.forEach((item, index) => {
        let itemTotal = item.gia * item.soLuong;
        tongTien += itemTotal;
        gioHangList += `ID: ${item.id}\nTên: ${item.ten}\nGiá: ${item.gia}\nSố lượng: ${item.soLuong}\nTổng cộng: ${itemTotal}\n-----------------------------\n`;
    });

    gioHangList += `\nTổng số tiền: ${tongTien}`;
    alert(gioHangList);
}

function luaChonMenu() {
    while (true) {
        alert("1. Hiển thị danh sách\n2. Mua sản phẩm\n3. Sắp xếp sản phẩm\n4. Tính tổng số tiền trong giỏ hàng\n5. Thoát");

        let luaChon = nhapLuaChon();

        if (luaChon === 5) {
            alert("Thoát chương trình!");
            break;
        }

        switch (luaChon) {
            case 1:
                hienThiSanPham(sanPham);
                break;

            case 2:
                themVaoGioHang(cart, sanPham);
                break;

            case 3:
                sapXepSanPham(sanPham);
                break;

            case 4:
                hienThiGioHang(cart);
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    }
}

luaChonMenu();
