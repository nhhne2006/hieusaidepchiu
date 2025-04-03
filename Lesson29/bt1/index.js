let contacts = [];

function inputChoice() {
    let choice;
    do {
        choice = Number(prompt("Nhập vào lựa chọn: "));
        if (isNaN(choice) || choice <= 0)
            alert("Số nhập vào không hợp lệ!");
    } while (isNaN(choice) || choice <= 0);
    return choice;
}

// Hàm hiển thị danh sách danh bạ
function displayContacts(contacts) {
    let contactList = "Danh sách danh bạ:\n";
    if (contacts.length === 0) {
        alert("Danh sách danh bạ hiện tại trống.");
    } else {
        contacts.forEach((value) => {
            contactList += `\n   ID: ${value.id}\n   Name: ${value.name}\n   Email: ${value.email}\n   Phone: ${value.phone}\n`;
        });
        alert(contactList);
    }
}

// Hàm thêm danh bạ
function inputContact(contacts) {
    let n;
    do {
        n = Number(prompt("Nhập vào số lượng danh bạ muốn thêm:"));
        if (isNaN(n) || n <= 0) alert("Số lượng nhập vào không hợp lệ");
    } while (isNaN(n) || n <= 0);

    while (n > 0) {
        let id =
            contacts.length > 0
                ? Math.max(...contacts.map((c) => c.id)) + 1
                : 1;

        let name;
        do {
            name = prompt("Nhập vào tên danh bạ:");
            if (!name) alert("Tên danh bạ không được để trống!");
        } while (!name);

        let email;
        do {
            email = prompt("Nhập vào email danh bạ:");
            if (!email) alert("Email danh bạ không được để trống!");
        } while (!email);

        let phone;
        do {
            phone = prompt("Nhập vào số điện thoại:");
            if (!phone) alert("Số điện thoại không được để trống!");
        } while (!phone);

        contacts.push({ id, name, email, phone });

        n--;
    }
    alert("Thêm danh bạ thành công!");
}

// Hàm tìm kiếm danh bạ
function searchContacts(contacts) {
    let search;
    do {
        search = prompt("Nhập vào số điện thoại:");
        if (!search) alert("Số điện thoại không được để trống!");
    } while (!search);

    let searchArray = contacts.filter((item) => item.phone.includes(search));

    if (searchArray.length > 0) {
        let contactList = "Kết quả tìm kiếm:\n";
        searchArray.forEach((value) => {
            contactList += `\n   ID: ${value.id}\n   Name: ${value.name}\n   Email: ${value.email}\n   Phone: ${value.phone}\n`;
        });
        alert(contactList);
    } else {
        alert("Không tìm thấy danh bạ nào có số điện thoại này.");
    }
}

// Hàm cập nhật danh bạ
function updateContact(contacts) {
    let id;
    do {
        id = Number(prompt("Nhập vào id:"));
        if (isNaN(id) || id <= 0) alert("Id nhập vào không hợp lệ!");
    } while (isNaN(id) || id <= 0);

    let contact = contacts.find((c) => c.id === id);
    if (!contact) {
        alert("Không tìm thấy danh bạ với ID này!");
        return;
    }

    let name;
    do {
        name = prompt("Nhập vào tên danh bạ:");
        if (!name) alert("Tên danh bạ không được để trống!");
    } while (!name);

    let email;
    do {
        email = prompt("Nhập vào email danh bạ:");
        if (!email) alert("Email danh bạ không được để trống!");
    } while (!email);

    let phone;
    do {
        phone = prompt("Nhập vào số điện thoại:");
        if (!phone) alert("Số điện thoại không được để trống!");
    } while (!phone);

    contact.name = name;
    contact.email = email;
    contact.phone = phone;

    alert("Cập nhật danh bạ thành công!");
}

// Hàm xóa danh bạ
function deleteContact(contacts) {
    let id;
    do {
        id = Number(prompt("Nhập ID của danh bạ cần xóa:"));
        if (isNaN(id) || id <= 0) alert("ID không hợp lệ!");
    } while (isNaN(id) || id <= 0);

    let index = contacts.findIndex((c) => c.id === id);
    if (index === -1) {
        alert("Không tìm thấy danh bạ với ID này!");
        return;
    }

    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa?");
    if (confirmDelete) {
        contacts.splice(index, 1);
        alert("Xóa danh bạ thành công!");
    } else {
        alert("Hủy xóa danh bạ.");
    }
}

function menuChoice() {
    while (true) {
        // Hiển thị menu trước khi nhận lựa chọn
        let menu = `
        1. Thêm đối tượng Contact.
        2. Hiển thị danh bạ.
        3. Tìm kiếm thông tin.
        4. Cập nhật thông tin.
        5. Xóa đối tượng Contact.
        6. Thoát.
        `;
        let choice = Number(prompt(menu));

        if (choice === 6) {
            alert("Thoát chương trình!");
            break; // Dừng vòng lặp nếu chọn "Thoát"
        }

        // Thực hiện hành động dựa trên lựa chọn
        switch (choice) {
            case 1:
                inputContact(contacts);
                break;

            case 2:
                displayContacts(contacts);
                break;

            case 3:
                searchContacts(contacts);
                break;

            case 4:
                updateContact(contacts);
                break;

            case 5:
                deleteContact(contacts);
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    }
}

menuChoice();
