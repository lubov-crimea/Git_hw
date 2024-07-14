/*1. Создайте функцию getOnlyNumbers, принимающую на вход массив arrayOnAnyValues
2. Внутри функции создайте переменную result, в которую упадет результат работы метода .filter()
3. В метод filter передайте callback функцию, проверяющую является ли значение числом.
4. В переменной result должны остаться только те элементы массива arrayOnAnyValues, которые являются числами ('2' - не число)
5. Вернуть result из функции*/

//Task 1
/*const arrayOnAnyValues = [NaN, 1, true, 5, "hello", undefined, 15.5, {}, []];

function getOnlyNumbers(arrayOnAnyValues){
    let result = [];
    result = arrayOnAnyValues.filter(el => typeof el === 'number' && !isNaN(el));
            return result;
     
};

console.log(getOnlyNumbers(arrayOnAnyValues)); */


/*
1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
  чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
  Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли. */

//Task 2_1 решала с гпт не зашла. 
/*let sentence = 'I am the best AQA ever!';
function getSentence (sentence){
    let lowerCaseSentence = sentence.toLowerCase();
    let charactersArray = lowerCaseSentence.split('');
    let lettersArray = charactersArray.filter(char => /[a-z]/i.test(char));
    let countsArray = lettersArray.map(letter => {
        let count = charactersArray.filter(char => char === letter).length;
        return count;
    });
    return countsArray;
}

let result = getSentence(sentence);
console.log(result); */

/*2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
  Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
  const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
*/
//Task 2_2 
/*const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
let sum = 0;
let middle;

function sumOfPrice (prices){
for (let i = 0; i < prices.length; i++){
sum = sum+prices[i];
}
return sum;

};
sumOfPrice (prices);

function middlePrise(sum, prices){
    middle = sum/prices.length;
    //console.log(middle);
    return middle;
};
middlePrise(sum, prices);

console.log(`Итого: ${sum} $, средняя цена товара - ${middle} $`); */



/*3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возврастанию количества гласных букв в слове.
//интересно но некогда

4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
  Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
  Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
  Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 
  Пример:
  const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]
  //интересно но некогда
*/

/*
6**. В файле вы найдете массив карточек юзеров. Задача - создать функцию, которая уберет из массива дубликаты. 
  Вернуть массив с сугубо уникальными карточками. Реализовать методом SET. 
  Разобраться, как считать данные из файла КОДОМ, а не копировать ручками.
*/
//решала с чатом, но выбрать с его фигни и скроить нужное тоже оказалось нелегко. задача такая оч пригодится.
const cards = require('/AQA_2/dz/Homework_lection_7/cards.json');
//console.log(cards);
console.log(cards.length);

let uniqueCards = [];
function removeDuplicates(cards) {
        return Array.from(new Set(cards.map(card => JSON.stringify(card))))
            .map(cardString => JSON.parse(cardString));
}

uniqueCards = removeDuplicates(cards); 
console.log(uniqueCards.length); 