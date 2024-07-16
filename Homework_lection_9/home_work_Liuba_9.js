//Task 1

/*1. Создайте класс Animal
2. В конструкторе класс должен принимать следующие параметры: */


class Animal {
    constructor(type, color, weight, height, place_of_origin) {
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.height = height;
        this.place_of_origin = place_of_origin;
    }

    ////3 Добавьте в класс метод: getInfo, который возвращает в строке полную информацию о животном 
    ////(используйте шаблонные строки с `${}` синтаксисом)
    getInfo() {
        return `Тип: ${this.type}, цвет: ${this.color}, вес: ${this.weight} кг, высота: ${this.height} см, место происхождения: ${this.place_of_origin}`
    }
    ////Создайте геттер для поля color (get color)
    get getColor() {
        return this.color;
    }

    ////  Создайте сеттер для поля color
    set setColor(newColor) {
        this.color = newColor;
        const checkColors = ['Красный', 'Черный', 'Белый', 'Синий'];
        if (checkColors.includes(newColor)) {
            console.log(`цвет ${newColor} соответствует требованиям`)
        }
        else {
            throw new Error('Данный цвет не поддерживается производителем животного')
        }
    }
}        

/*6. Создайте класс Snake, который будет наследовать класс Animal
7. Создайте конструктор в классе Snake, 
который будет принимать все необходимые поля из класса Animal, 
а также поле isPoisonous
8. С помощью super() вызовите конструктор родителя, передав необходимые параметры*/
class Snake extends Animal {
    constructor(type, color, weight, height, place_of_origin, isPoisonous) {
    super(type, color, weight, height, place_of_origin);
    this._isPoisonous = isPoisonous;  
    }
    checkPoisonous(){
        return this._isPoisonous;
    }
       
}

//Task 2
//1. Создайте класс Bird с приватным полем isFlying, отнаследовавшись от Animal
class Bird extends Animal {
    constructor(type, color, weight, height, place_of_origin, isFlying) {
        super(type, color, weight, height, place_of_origin);
        this._isFlying = isFlying; 
    }    
}

//2.Создайте класс CatLike с публичным полем isSafeToPet, отнаследовавшись от Animal
class CatLike extends Animal {
    constructor(type, color, weight, height, place_of_origin, isSafeToPet) {
        super(type, color, weight, height, place_of_origin);
        this.isSafeToPet = isSafeToPet; 
    }    
}
/* 3. Создайте класс Worker, реализующий следующий интерфейс (набор полей и методов):
// class Worker
// firstName
// lastName
// phone
// getFullName() */
class Worker {
    constructor(firstName, lastName, phone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
//4.Создайте класс Zoo, реализующий следующий интерфейс:
//5. Добавьте геттеры и сеттеры к полям address, title, ticket price
//!!! пока не разобралась куда и зачем пихать # и _ передназванием перем. среда # отмечает как ошибку(
class Zoo {
    constructor (address, title, ticket_price, workers = [], animals = [] ) {
    this.address = address;
    this.title = title;
    this.ticket_price = ticket_price;
    this.workers = workers;
    this.animals = animals;
    }
    get getAddress() {
        return this.address;
    }
    get getTitle() {
        return this.title;
    }
    get getTicket_price() {
        return this.ticket_price;
    }
    set setAddress(newAddress) {
        this.address=newAddress;
    }
    set setTitle(newTitle) {
        this.title=newTitle;
    }
    set setTicket_price(newTicket_price) {
        this.ticket_price=newTicket_price;
    }
    //Добавьте метод addWorker(worker), добавляющий работника в массив workers. 
    //На вход метод должен принимать объект класса Worker. 
    //Если объект не является инстансом класса Worker - выкинуть ошибку
    addWorker(worker){
        this.workers.push(worker);
        if(!(worker instanceof Worker)){
            throw new Error(`${worker} Засланный казачок`)
        }
    }
    /*7. Добавьте метод addAnimal(animal), добавляющий животное в массив animals.
    На вход метод должен принимать объект класса Animal, как и любого из его наследников. 
    Если объект не является инстансом класса Animal - выкинуть ошибку
    ТАКЖЕ, если объект является инстансом класса Snake - 
    выкинуть ошибку с тексом "There will be no snakes, mister Potter!"*/
    addAnimal(animal){
        if(!(animal instanceof Animal)){
            throw new Error(`Этот ${animal} не из нашего зоопарка`)
        }
        else if (animal instanceof Snake){
            throw new Error("There will be no snakes, mister Potter!")
        }
        else{
            this.animals.push(animal);
        }
        
    }
    //8. Добавьте методы removeWorker() и removeAnimal()
    removeWorker(worker){
        const index = this.workers.indexOf(worker);
        if(index){
            this.workers.slice(index, 1);  
        }
        else{
            throw new Error(`this ${worker} was not found`)
        }
    }

    removeAnimal(animal){
        if (animal instanceof Bird){
        const index2 = this.animals.indexOf(animal); 
        this.animals.slice(index2, 1);  
        }
        else{
        console.log(`${animal} еще пригодится`)
        }

    }

}




