function kiemTraSo() {
    let input = prompt("Nhập số bạn cần kiểm tra: ");
    let n = Number(input);
    let sqrt = Math.sqrt(n);
    let result = (Number.isInteger(sqrt)) ? n + " là số chính phương" : n + " không phải là số chính phương";
    alert(result);
    console.log(result);
}

kiemTraSo();