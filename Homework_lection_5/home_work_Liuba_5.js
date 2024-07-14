//Task 1
/*let minNumber = 0;
let currentNumber = 10;
while (currentNumber >= minNumber) {
    console.log (currentNumber)
    currentNumber--;
} 
    */
//Task 1_2
/*let smile = ':)';
for (let i = 1; i <= 5; i++) {
    console.log((':)').repeat(i));
}
    */

//Task 2_1  не понимаю смысл вайла в этом скрипте.

/*let bytes = 30000000; 

let mb = (bytes/1024).toFixed(1);
console.log(mb+' Mb');
let gb = (mb/1024).toFixed(1);
console.log(gb+' Mb');
let tb = (gb/1024).toFixed(1);
console.log(tb+' Mb'); */

//Task 2_2 треугольник
/*
let size = 7; 
let row = 1;

while (row <= size) {
    let spaces = size - row;
    let stars = 2 * row - 1;
    let line = ' '.repeat(spaces) + '*'.repeat(stars);
    console.log(line);
    row++;
} 
    */

//ромб не врубаюсь. 

//Task 2_3
/*const maxNumber = 100;
let currentNumber = 1;

while (currentNumber <= maxNumber) {
 console.log(currentNumber)
 currentNumber++;
    if (currentNumber % 3 === 0) {
        console.log(`число ${currentNumber} делится без остатка на 3`)
    }
    else if (currentNumber % 5 === 0) {
        console.log(`число ${currentNumber} делится без остатка на 5`)
    }
    else if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
        console.log(`число ${currentNumber} делится без остатка на 3 и 5`)
    }
    else {
        console.log(`число ${currentNumber} не делится без остатка на 3 и 5`)
    }
}
*/

//Task 2_4  фигануть предложение в кемл кейс. решала с помощью gpt пусть просто тут полежит.

/*function toCamelCase(str) {
    // Преобразуем всю строку в нижний регистр и разделяем на слова
    let words = str.toLowerCase().split(/\s+/);

    // Преобразуем первую букву каждого слова в верхний регистр, кроме первого слова
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    // Сливаем все слова в одну строку
    return words.join('');
}

let sentence = "Какие заковыристые задания";
console.log(toCamelCase(sentence)); 
*/

//Task 3_1 мусолили вдвоем с чатом


/*
function countLetters(word) {
    const consonants = 'бвгджзйклмнпрстфхцчшщ';
    const vowels = 'аеёиоуыэюя';

    let consonantCount = 0;
    let vowelCount = 0;
    
    word = word.toLowerCase();


    for (let i = 0; i < word.length; i++) {
        if (consonants.includes(word[i])) {
            consonantCount++;
        } else if (vowels.includes(word[i])) {
            vowelCount++;
        }
    }

    return {
        consonantCount: consonantCount,
        vowelCount: vowelCount
    }
}

let counts = countLetters("задолбалась");

console.log("word contains " + counts.vowelCount + "  vowels and "+counts.consonantCount + "  consonants")
*/

//Task 3_2 не-не
