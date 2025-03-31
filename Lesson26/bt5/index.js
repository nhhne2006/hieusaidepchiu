function findMax(mang) {
    // Kiểm tra nếu không phải là mảng hoặc mảng rỗng
    if (!Array.isArray(mang) || mang.length === 0) {
        return "Dữ liệu không hợp lệ";
    }

    // Tìm số lớn nhất và vị trí của nó
    const max = Math.max(...mang);
    const position = mang.indexOf(max);

    // Trả kết quả
    return `max = ${max}\nposition = ${position}`;
}

console.log(findMax([10, 9, 5, 11, 24, 5]));
console.log(findMax([]));
console.log(findMax("abc"));
