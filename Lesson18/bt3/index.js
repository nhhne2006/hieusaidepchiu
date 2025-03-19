let checkUser = prompt("Vui lòng nhập tên người dùng");

function kiemTraDangNhap(){
    if(checkUser === "ADMIN"){
        alert("Xin chào ADMIN");
        let passWord = prompt("Mời bạn vui lòng nhập mật khẩu");
        if(passWord === "TheMaster"){
            alert("Wellcome");
        }else if(passWord === null){
            alert("Cancelled");
        }else{
            alert("Bạn chưa nhập PassWord");
        }

    }else if(checkUser === null){
        alert("Cancelled");
    }else{
        alert("I Don’t know you");
    }
}
kiemTraDangNhap();