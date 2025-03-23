let number = prompt("Nhập vào một số nguyên:");

number = parseInt(number);

if (isNaN(number) || number < 2) {
  alert("Không phải là số nguyên tố");
} else {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    alert(number + " là số nguyên tố");
  } else {
    alert(number + " không phải là số nguyên tố");
  }
}
