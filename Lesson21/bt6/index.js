let nhapSo = parseInt(prompt("Vui lòng nhập vào số nguyên"));

uoc = "";

for(let i = 1; i <= nhapSo; i++){
    if(nhapSo % i === 0){
        uoc += i + " ";
    }
}
alert("Các ước của số " + nhapSo + " là " + uoc);