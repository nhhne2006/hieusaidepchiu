let a = parseInt(prompt("Vui lòng nhập vào số a"));
let b = parseInt(prompt("Vui lòng nhập vào số b"));
let c = parseInt(prompt("Vui lòng nhập vào số c"));

// giả sử cho max bằng a là lớn nhất
// sau đó sẽ đi so sánh với b và c
let max = a;

if (b > max){
    max = b;
}

if (c > max){
    max = c;
}

alert( "số lớn nhất trong 3 số là: " + max);   