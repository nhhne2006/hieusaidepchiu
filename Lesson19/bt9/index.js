// 1. Nối chuỗi: "javascript" là chuỗi, dấu + dùng để nối chuỗi nên số 5 sẽ được ép thành chuỗi
let result = "javascript" + 5;
console.log(result); // Kết quả: "javascript5"

// 2. Trừ chuỗi với số: "javascript" không thể ép thành số nên kết quả là NaN
let result2 = "javascript" - 1;
console.log(result2); // Kết quả: NaN

// 3. Nối chuỗi: "3" là chuỗi, dấu + sẽ nối chuỗi và số 2 sẽ được ép thành chuỗi
let result3 = "3" + 2;
console.log(result3); // Kết quả: "32"

// 4. Trừ chuỗi số với số: "9" có thể ép thành số 9, thực hiện phép trừ 9 - 4
let result4 = "9" - 4;
console.log(result4); // Kết quả: 5

// 5. isNaN("123"): "123" có thể ép thành số 123, không phải NaN nên kết quả false
// ngược lại nếu là NaN thì nó sẽ trả về True
let result5 = isNaN("123");
console.log(result5); // Kết quả: false

// 6. isNaN("hello"): "hello" không ép thành số được, kết quả là NaN nên trả về true
let result6 = isNaN("hello");
console.log(result6); // Kết quả: true

// 7. Number.isNaN("123"): kiểm tra chính xác xem có phải NaN hay không, không ép kiểu
// "123" không phải NaN nên kết quả false
let result7 = Number.isNaN("123");
console.log(result7); // Kết quả: false

// 8. Number.isNaN(NaN): kiểm tra chính xác NaN, đúng là NaN nên kết quả true
let result8 = Number.isNaN(NaN);
console.log(result8); // Kết quả: true
