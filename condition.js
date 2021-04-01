function getFruit(name, price) {
    if(name === 'apple' && price === 15000){
        return `ini adalah ${name} dan berwarna merah`;
    } else if(name === 'mango'){
        return `ini adalah ${name}, rasanya manis, masam`;
    } else {
        return 'Nama buah belum diketahui';
    }
}
// console.log(getFruit('apple', 19000));


function ambilBuah(nama, unit) {
    switch(true) {
        // console.log(nama);
        case (nama === "strawberry") :
            return `ini adalah ${nama} dan berwarna merah, harga sekilo adalah Rp 20.000, 
            maka total harganya adalah ${unit * 20000}`;
            break;
        case (nama === "nangka") :
            return `ini adalah ${nama}, rasanya manis. dan harga sekilonya adalah Rp 15.000,
            maka total harganya adalah ${unit * 15000}`;
            break;
        default: 
            return 'hello';
            break;
    }
}
// console.log(ambilBuah('nangka', 2));


function calculator(num1, num2, operator){
    switch(operator){
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case 'x':
            return num1 * num2;
            break;
        case ':':
            return num1 / num2;
            break;
        case '%':
            return num1 % num2;
            break;
        default: 
            return 'operator tidak diketahui';
            break;
    }
}

console.log(calculator(1, 20, 'x'));