let input = prompt("Nhập vào một chuỗi số:");

if (isNaN(input) || input === "") {
  alert("Số không hợp lệ");
} else {
  let reversedInput = input.split("").reverse().join("");
  // split(""): Tách chuỗi thành một mảng các ký tự.
  // reverse(): Đảo ngược mảng các ký tự.
  // join(""): Ghép các ký tự trong mảng thành một chuỗi.
  
  if (input === reversedInput) {
    alert(input + " là số đối xứng");
  } else {
    alert(input + " không phải số đối xứng");
  }
}
