function kiemTraSoChanLe(){

    let numbers = Number(prompt("Vui lòng nhập số mà bạn muốn chọn: "));

    // Kiểm tra số chẵn hoặc lẻ
    if (numbers % 2 === 0){
        alert(numbers +" là số chẵn");
    } else {
        alert(numbers + " là số lẻ");
    }
}

kiemTraSoChanLe();