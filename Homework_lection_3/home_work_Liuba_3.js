let item_1 = 5;
console.log(item_1);
let item_2 = 3;
console.log(item_2);
let item_3 = item_1+item_2;
console.log(item_3);
let item_4 = "Yolochka";
console.log(item_4);
console.log(item_3+item_4);
console.log(item_3*item_4);
let item_5 = item_3;

let item_6;
let item_6_type;
item_6 = 15;
item_6_type = typeof item_6;
console.log("item_6 == ", typeof item_6+", "+"item_6_type == ", typeof item_6_type);

let item_7 = " " + item_6;
console.log(typeof item_7);

let item_7_type = typeof item_7;
console.log("item_7 == ", typeof item_7+", "+"item_7_type == ", typeof item_7_type); 

/* Я не врубаюсь как это записывать в коде. Нужен пример решения подобной задачи.
Task2_1 
𝑥2−6𝑥+9=0  
ax2+bx+c=0  (𝑥−𝑝)2=0,  где p - это  это половина коэффициента 𝑏
x2−6x+9=(x−3)2   =(x−3)(x−3) = x2−3x−3x+9
1х2-6х+9=0  (x−3)2=0 корень 3

Task2_2
х2-4х-5=0 два корня 
*/

//Task_3
let n=1;
let sum;

if (Number.isInteger(n) && n>=1 && n<=9) {
let nn = String(n) + String(n);                  //11
let nnn = String(n) + String(n) + String(n);     //111

nn = parseInt(nn);
nnn = parseInt(nnn);

sum = n + nn + nnn;                              //1+11+111=123
    console.log (`результат вычислений для ${n} =`, sum)
} else {
    console.log ("число не прошло проверку");
}


/*Task_3 варик с промптом, но почему то пишет undefined когда я ввожу валидное число((( 
let n = prompt("Введите число от 1 до 9:");
n = parseInt(n);

if (Number.isInteger(n) && n>=1 && n<=9) {
let nn = String(n) + String(n);                  //11
let nnn = String(n) + String(n) + String(n);     //111

nn = parseInt(nn);
nnn = parseInt(nnn);

let sum = n + nn + nnn;                              //1+11+111=123
    console.log (`результат вычислений для ${n}`, sum)
} else {
    console.log ("число не прошло проверку");
}
*/


