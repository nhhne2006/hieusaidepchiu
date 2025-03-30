// Hàm viết hoa chữ cái đầu tiên
function capitalize(str) {
    // Tách chuỗi thành các từ, sau đó biến ký tự đầu tiên của mỗi từ thành chữ hoa
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    // Gộp các từ lại thành một chuỗi và trả về
    return words.join(' ');
}

console.log(capitalize("hello WORLD"));
console.log(capitalize("rlKKei acaDEMy"));