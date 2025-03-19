let a = Number(prompt("Mời bạn nhập vào số a"));
let b = Number(prompt("Mời bạn nhập vào số b"));

let phepTinh = prompt("Mời bạn nhập vào phép tính bạn muốn tính (+ - * /)");

let result;

function tinhToan(){
    if (phepTinh === "+"){
        result = a + b;

    } else if(phepTinh === "-"){
        result = a - b;

    } else if(phepTinh === "*"){
        result = a * b;

    } else if(phepTinh === "/"){
        if(b === 0 || a === 0){
            alert("Không thể chia cho 0")
        } else {
            result = a / b;
        }

    } else{
        alert("Bạn nhập sai dấu rồi...")
    }

    if(result !== undefined){
        alert("Kết quả: " + a + " " + phepTinh + " " + b + " = " + result);
    }
    
}
tinhToan();