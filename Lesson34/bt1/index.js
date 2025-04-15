document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let nhapEmail = document.getElementById("email").value;
    let nhapPassword = document.getElementById("password").value;
    let nhapConfirmPassword = document.getElementById("confirmPassword").value;

    if (nhapEmail === "" || nhapPassword === "" || nhapConfirmPassword === "") {
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }

    // Lấy danh sách tài khoản đã lưu từ localStorage (nếu chưa có thì tạo mảng rỗng)
    let danhSachTaiKhoan = JSON.parse(localStorage.getItem("users")) || [];

    let emailDaTonTai = danhSachTaiKhoan.some(function(user) {
        return user.email === nhapEmail;
    });

    if (emailDaTonTai) {
        alert("Email đã tồn tại. Vui lòng dùng email khác.");
        return;
    }

    if (nhapPassword !== nhapConfirmPassword) {
        alert("Mật khẩu và xác nhận mật khẩu không khớp.");
        return;
    }

    let taiKhoanMoi = {
        email: nhapEmail,
        password: nhapPassword
    };

    danhSachTaiKhoan.push(taiKhoanMoi);

    // Lưu lại vào localStorage
    localStorage.setItem("users", JSON.stringify(danhSachTaiKhoan));

    alert("Đăng ký thành công!");

});
