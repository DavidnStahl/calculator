

let input = document.getElementById('value');

let one = document.getElementById('1').onclick = function(){
    input.value += 1;
}

let two = document.getElementById('2').onclick = function(){
    input.value += 2;
}

let three = document.getElementById('3').onclick = function(){
    input.value += 3;
}

let four = document.getElementById('4').onclick = function(){
    input.value += 4;
}

let five = document.getElementById('5').onclick = function(){
    input.value += 5;
}

let six = document.getElementById('6').onclick = function(){
    input.value += 6;
}

let seven = document.getElementById('7').onclick = function(){
    input.value += 7;
}

let eight = document.getElementById('8').onclick = function(){
    input.value += 8;
}

let nine = document.getElementById('9').onclick = function(){
    input.value += 9;
}

let zero = document.getElementById('0').onclick = function(){
    input.value += 0;
}

let plus = document.getElementById('+').onclick = function(){
    input.value += "+";
}

let multiplyBtn = document.getElementById('*').onclick = function(){
    input.value += "*";
}

let divisionBtn = document.getElementById('/').onclick = function(){
    input.value += "/";
}

let minus = document.getElementById('-').onclick = function(){
    input.value += "-";
}


let equalBtn = document.getElementById('=').onclick = function(){
    let toPluss = input.value.split("+");
    let toMinus = input.value.split("-");
    let toMulti = input.value.split("*");
    let toDivision = input.value.split("/");
    let result = 0;

    console.log(toPluss);
    console.log(toMinus);
    console.log(toMulti);
    console.log(toDivision);

    if(toPluss.length > 1){
        for(let i = 0; i < toPluss.length; i++){
            result += Number(toPluss[i]);
            console.log(result);
        }
    }

    if(toMinus.length > 1){
        for(let i = 0; i < toMinus.length; i++){
            if(i == 0){
                result = Number(toMinus[i]);
            }
            else{
                result -= Number(toMinus[i]);
            }
        }
    }
    if(toMulti.length > 1){
        for(let i = 0; i < toMulti.length; i++){
            if(i == 0){
                result = Number(toMulti[i]);
            }
            else{
                result *= Number(toMulti[i]);    
            }
        }
    }

    if(toDivision.length > 1){
        for(let i = 0; i < toDivision.length; i++){
            if(i == 0){
                result = Number(toDivision[i]);
            }
            else{
                result /= Number(toDivision[i]);
            }
        }
    }

    input.value = result;
}
let cBtn = document.getElementById('c').onclick = function(){
    input.value = "";
}

