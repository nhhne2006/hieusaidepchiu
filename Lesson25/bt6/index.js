// Hàm kiểm tra chuỗi đối xứng
function isPalindrome(str) {
    // Chuyển chuỗi thành chữ thường và loại bỏ khoảng trắng và ký tự không hợp lệ
    let cleanStr = '';
    
    for (let i = 0; i < str.length; i++) {
        // Kiểm tra nếu ký tự là chữ cái hoặc số
        let char = str[i].toLowerCase(); // Chuyển thành chữ thường
        if (char.match(/[a-z0-9]/)) {
            cleanStr += char; // Thêm ký tự hợp lệ vào chuỗi mới
        }
    }

    let left = 0;
    let right = cleanStr.length - 1;

    // Kiểm tra các ký tự từ hai đầu
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false; // Nếu có sự khác biệt, không phải chuỗi đối xứng
        }
        left++;
        right--;
    }

    return true; // Nếu không có sự khác biệt, là chuỗi đối xứng
}

// Nhận chuỗi từ người dùng
let userInput = prompt("Nhập vào một chuỗi:");

if (userInput) {
    if (isPalindrome(userInput)) {
        alert("Là chuỗi đối xứng");
    } else {
        alert("Không phải chuỗi đối xứng");
    }
}
