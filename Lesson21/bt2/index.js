
let luuSoLe = 0;
let luuSoChan = 0;

for(i = 1; i<=5; i++){
    let nhapSo = parseInt(prompt("Nhập số nguyên thứ " + i));
    if(nhapSo % 2 !== 0 ){
        luuSoLe++;
    }else{
        luuSoChan++;
    }
}
alert("Tổng các số lẻ là: " + luuSoLe);
alert("Tổng các số chẵn là: " + luuSoChan);

