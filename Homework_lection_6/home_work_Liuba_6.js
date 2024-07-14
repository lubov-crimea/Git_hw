//Task_1
/*function getEmployeeInfo(name){
const names = ["Pasha", "Masha", "Grisha", "Kasha", "Sasha"];
const salary = [1000, 5000, 3500, 4000, 15000];
let nameSalary = [];

for (let i=0; i < names.length; i++) {
    if(names[i] === name){
        nameSalary.push(names[i]);
        nameSalary.push(salary[i]);
        return nameSalary;
        }
    }
    return null;
};

console.log(getEmployeeInfo("Masha"));*/

//Task_2_1
/*const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'Hawai'];
const originalPizzas = [];
function getPizzasNames(myPizzas){
    let allCompetitors = true;
for (let i=0; i<myPizzas.length; i++){
    if(!competitorPizzas.includes(myPizzas[i])){
        originalPizzas.push(myPizzas[i]);
        allCompetitors = false;
        }    
    }
    if (allCompetitors) {
    return null;
    }
    return originalPizzas;
};

//const result = getPizzasNames(['Carbonara', 'Diablo', 'Crazy chicken', 'Fat ass']);
const result = getPizzasNames(['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'Hawai']);
console.log(result); */

//Task_2_2

//let sentece = "Этот текст для проверки моего говнокода и еще слово издевятиб";

/*function getSentence (sentece){
    const words = sentece.split(' ');
    let maxLength = 0;
    const maxWordArea = [];

    for(let word of words){
        if(word.length > maxLength) {
            maxLength = word.length;
            maxWordArea.length = 0;
            maxWordArea.push(word);
        } else if (word.length === maxLength) {
            maxWordArea.push(word);
        }
    }
    console.log(maxWordArea);
}; */

/*function getSentence (sentece){
    const words = sentece.split(' ');
        
    words.sort ((a,b) => b.length - a.length);
    const maxLength = words[0].length;

    const maxWordArea = words.filter(word => word.length === maxLength);
    console.log(maxWordArea);
}; 

getSentence (sentece); */

// Task_2_3
/*let numbers = [2, 5, 14, 67, 14, 23232, 5, 18988, 18988];
function checkDoubleNumbers () {
    const uniqueValues = numbers.filter((element, index) => {
        return numbers.indexOf(element) === index;
    });
return uniqueValues;
};
const result = checkDoubleNumbers();
console.log(result); */

//Task 2_4

/*function getWord (word) {
let newWord = word.split('').reverse().join('');
    if (word === newWord) {
    console.log(`${newWord} is a palyndrom`);
    }
    else {
    console.log(`${word} is not a palyndrom`);
    }
}

getWord('казак');
getWord('арбуз');*/

// ~~~   Таск 3 !!!решала с чатом, пусть тут просто валяется
/*function getSumOfNumbers(number) {
    let numberString = number.toString();

    if (numberString.length === 1) {
        return +numberString; // базовый случай: если осталась одна цифра, возвращаем её как число
    }

    let sumDigits = 0;
    for (let digit of numberString) {
        sumDigits += +digit;
    }

    if (sumDigits <= 9) {
        return sumDigits; // если сумма цифр меньше или равна 9, возвращаем результат
    } else {
        return getSumOfNumbers(sumDigits); // иначе запускаем функцию снова для суммы цифр
    }
}

console.log(getSumOfNumbers(55)); // Выведет 1 (5 + 5 = 10, затем 1 + 0 = 1)
console.log(getSumOfNumbers(1234)); // Выведет 1 (1 + 2 + 3 + 4 = 10, затем 1 + 0 = 1)
console.log(getSumOfNumbers(9999)); // Выведет 9 (9 + 9 + 9 + 9 = 36, затем 3 + 6 = 9) */
