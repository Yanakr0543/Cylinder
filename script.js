s = prompt('Введите s');
h = prompt('Введите h');
r = prompt('Введите r');
console.log(s,h,r);
document.write('<p>'+'Обьем цилиндра с площадью основания (S)= '+s+''+', радиусом (R)= '+h+''+' и высотой (H)= '+r+''+' равен:'+'</p>');
v = s*h;
v = Math.PI*Math.pow(r, 2)*h;
console.log(v);
document.write(v);
