let kyTu = prompt("Mời bạn nhập ký tự");
let letter = true; // giả sử lúc đầu là đúng

for ( let i = 0; i < kyTu.length ; i++){ // vòng lặp kiểm tra từng ký tự

    if ((kyTu[i] >= "A" && kyTu[i] <= "Z" || kyTu[i] >= "a" && kyTu[i] <= "z")){
        // nếu đúng nó là ký tự thì giữ nguyên
        
    } else {
        // nếu không phải là chữ thì cho nó là false
        letter = false;
        break;
    }
}

// in ra kết quả nhờ letter (true false)
if(letter){
    alert("Ký tự " + kyTu + " là một chữ cái");
} else{
    alert("Ký tự " + kyTu + " là không phải là một chữ cái");
}
