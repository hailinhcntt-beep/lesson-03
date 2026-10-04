let chieuCao = 0;
//a là chiều cao lý tưởng
a = (chieuCao-100)*9/10;
// b là chiều cao tối đa
b = chieuCao-100;
// c là chiều cao tối thiểu
c = (chieuCao-100)*8/10;

if (chieuCao > 100 && chieuCao < 200){
console.log("chiều cao lý tưởng là : " + a +" , chiều cao tối đa là : " + b + " , chiều cao tối thiểu là : " + c );
}
else {
    console.log(" Chiều cao không hợp lệ");
}