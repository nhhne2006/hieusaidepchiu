const cart = [
    { name: "Mèn mèn", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1 },
    { name: "Bánh bao", price: 15000, quantity: 3 }
];

// Hàm tính tổng giá trị giỏ hàng
function tinhTongGiaTri(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

alert("Tổng giá trị giỏ hàng: " + tinhTongGiaTri(cart));
