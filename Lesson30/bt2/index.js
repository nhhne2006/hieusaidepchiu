let sach = [
    {
        id: 1,
        name: "Thế giới rộng lớn, lòng người chật hẹp",  // Tên sách
        price: 92000,  // Giá sách
        quantity: 100,  // Số lượng sách
        category: "Tâm lý",  // Thể loại sách
    },
    {
        id: 2,
        name: "Hành Tinh Của Một Kẻ Nghĩ Nhiều",
        price: 64500,
        quantity: 250,
        category: "Tâm lý",
    },
    {
        id: 3,
        name: "Đại Dương Đen",
        price: 158400,
        quantity: 10,
        category: "Nội tâm",
    },
];

let cart = [];

function nhapLuaChon() {
    let luaChon;
    do {
        luaChon = Number(prompt("Nhập vào lựa chọn:"));
        if (isNaN(luaChon) || luaChon <= 0) alert("Lựa chọn không hợp lệ!");
    } while (isNaN(luaChon) || luaChon <= 0);
    return luaChon;
}

function hienThiTatCaSach(sach) {
    if (sach.length === 0) {
        alert("Sách trong kho trống!");
        return;
    }

    let productList = "\nDanh sách sách:\n";
    sach.forEach((value) => {
        productList += `\n   ID: ${value.id}\n   Name: ${value.name}\n   Price: ${value.price}\n   Quantity: ${value.quantity}\n   Category: ${value.category}\n`;
    });

    let totalQuantity = sach.reduce((sum, book) => sum + book.quantity, 0);
    productList += `Tổng số lượng sách trong kho: ${totalQuantity}`;
    alert(productList);
}

function hienThiSachTheoDanhMuc(sach) {
    if (sach.length === 0) {
        alert("Sách trong kho trống!");
        return;
    }

    let danhMuc;
    do {
        danhMuc = prompt("Nhập vào thể loại sách:");
        if (!danhMuc) alert("Dữ liệu nhập không được bỏ trống");
    } while (!danhMuc);

    let categories = sach.filter(
        (value) => value.category.toLowerCase() === danhMuc.toLowerCase()
    );

    if (categories.length === 0) {
        alert("Không có thể loại sách này!");
        return;
    }

    let categoryList = `Danh mục: ${danhMuc}\n`;
    categories.forEach((value) => {
        categoryList += `\n   ID: ${value.id}\n   Name: ${value.name}\n   Price: ${value.price}\n   Quantity: ${value.quantity}\n`;
    });

    alert(categoryList);
}

