//Сайт находится на стадии разработки)
/**/
const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
];

//1

// characters.forEach(obj => {
//     const keys = Object.keys(obj);
//     keys.forEach(key => {
//         console.log(key);
//     });
// });

//2
// characters.forEach(obj => {
//         const values = Object.values(obj);
//         values.forEach(value => {
//             console.log(value);
//         });
//     });

//3
// characters.forEach(obj => {
//         const keyAndValue = Object.entries(obj);
//         keyAndValue.forEach(([key, value]) => {
//         console.log(`key = ${key}, value = ${value}`);
//     });
// });

//Перебирать каждый объект циклом for..of вида for(const [key, value] of Object.entries)

//   for (const [index, character] of Object.entries(characters)) {
//     for (const [key, value] of Object.entries(character)) {
//         console.log(`key = ${key}, value = ${value}`);
//     }
// }

//Создайте объект qa с полями name, age, salary и методом getInfo, 
// который будет возвращать строку вида: 
// `Hello, my name is ${name}, i'm ${age} and my salary is ${salary}`. 
// Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.

// const qa = {
//     name2: "Pig",
//     age: 2, 
//     salary: 1000,
//     getInfo(){
//         console.log(`Hello, my name is ${this.name2}, i'm ${this.age} and my salary is ${this.salary}`)
//     }  
// }

// qa.getInfo ();

//Task 2
const enterprises = [
    {
        id: 1,
        name: "Предприятие 1",
        departments: [
            {
                id: 2,
                name: "Отдел тестирования",
                employees_count: 10,
            },
            {
                id: 3,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 4,
                name: "Администрация",
                employees_count: 15,
            },
        ]
    },
    {
        id: 5,
        name: "Предприятие 2",
        departments: [
            {
                id: 6,
                name: "Отдел разработки",
                employees_count: 50,
            },
            {
                id: 7,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 8,
                name: "Отдел охраны труда",
                employees_count: 5,
            },
        ]
    },
    {
        id: 9,
        name: "Предприятие 3",
        departments: [
            {
                id: 10,
                name: "Отдел аналитики",
                employees_count: 0,
            },
        ]
    }
]
//1
// name 1 ур вложенности+сумма сотрудников (employees_count)
// departments.name (2 yr)+employees_count

//   function printEnterpriseNames() {
//     enterprises.forEach(enterprise => {
//     let employeesCouner = enterprise.departments.reduce((sum, department)=>sum+department.employees_count, 0); 
//     console.log(`${enterprise.name} насчитывает ${employeesCouner} сотрудников`);

//       for (let department of enterprise.departments) {
//         console.log(`В ${department.name} числится ${department.employees_count} сотрудников`); 
//       }
//     });
//   }
//   printEnterpriseNames();

//2
//   function getEnterpriseName(idOrName) {
//     let found = false;

//     if (typeof idOrName === 'number') {
//         for (const enterprise of enterprises) {
//             const findDepartmentName = enterprise.departments.find(dep => dep.id === idOrName);
//             if (findDepartmentName) {
//                 console.log(enterprise.name);
//                 found = true;
//                 break; 
//             }
//         }
//     } else if (typeof idOrName === 'string') {
//         for (const enterprise of enterprises) {
//             const findDepartmentId = enterprise.departments.find(dep => dep.name === idOrName);
//             if (findDepartmentId) {
//                 console.log(findDepartmentId.id);
//                 found = true;
//                 break; 
//             }
//         }
//     }

//     if (!found) {
//         console.log('Данные не найдеы');
//     }
// }

// getEnterpriseName(2);
// getEnterpriseName(666);
// getEnterpriseName('Отдел маркетинга'); 
// getEnterpriseName('Булочная'); 

//3
// function addEnterprise (name, enterprises) {
//     const existingEnterprise = enterprises.find(enterprise => enterprise.name === name);

//     if (existingEnterprise){
//         console.log ("Такое предприятие уже есть")
//     }
//     else {
//         enterprises.push({name:name})
//         console.log (`${name} успешно добавлено`);
//     }
// }

// addEnterprise ("Предприятие 6", enterprises);
// console.log(enterprises);

//4

// function addDepartment (id, name, enterprises) {
//         const existingDepartment = enterprises.find(enterprise => enterprise.id === id);
//         if (existingDepartment){
//             existingDepartment.departments.push ({name: name});
//             console.log ("Отдел добавлен");    
//             console.log(existingDepartment.departments[existingDepartment.departments.length - 1]); // проверка
//         }
//         else {
//             console.log ("Отдел не найден");
//         }
//     }

// addDepartment(1, "Хлебобулочный отдел_3", enterprises); 

//5

// function editEnterprise(id, newName) {
//     const changeNameEnterprise = enterprises.find(enterprise => enterprise.id === id);
//             if (changeNameEnterprise){
//                 changeNameEnterprise.name = newName;
//                 console.log ("Предприятие переименовано");    
//                 console.log(changeNameEnterprise.name);
//             }
//             else {
//                 console.log ("Предприятие не найдено");
//             }
//         }

//editEnterprise(1, "Предприятие 10");
//editEnterprise(20, "Предприятие 100");

//6
// function editDepartment(id, newNameDepartment) {
//     let departmentFound = false;
//     for (const enterprise of enterprises) {
//         const findDepartmentId = enterprise.departments.find(dep => dep.id === id);
//         if (findDepartmentId) {
//             findDepartmentId.name = newNameDepartment;
//             console.log(`Новое имя департамента ${findDepartmentId.name}`);
//             departmentFound = true;
//             break;
//         }
//         // else {
//         //     console.log ("Департамент не найден")
//         // }
//         }
//         if (!departmentFound) {
//         console.log("Департамент не найден");
//         }
// };

// editDepartment(7, "Кот насрал в тапки 5 раз");

//7 
//не хо удалять найденное через фаинд, тольно по индексу удалило.
/*function deleteEnterprise(id){
            const findEnterprise = enterprises.find(ent => ent.id === id);
        if (findEnterprise) {
            console.log(findEnterprise.name);
            ////findDepartmentId.name.
            findEnterprise.splice();
            console.log(findEnterprise);
        }
        else {
            throw new Error ("Предприятие с таким id не найдено");} */

//             function deleteEnterprise(id){
//             const findEnterprise = enterprises.findIndex(ent => ent.id === id);
            
//             if (findEnterprise == 1) {
//                 enterprises.splice (findEnterprise, 1);
//                 console.log("Предприятие удалено");
//             } else {
//                 console.log("Предприятие с таким id не найдено"); 
//             }
//         }

// deleteEnterprise(5);
// deleteEnterprise(4);

//8
// function deleteDepartment (idDepartment){
//     let departmentFound = false;
//     for (const enterprise of enterprises) {
//         const findDepartmentId = enterprise.departments.find(dep => dep.id === idDepartment);
//         if (findDepartmentId && findDepartmentId.employees_count === 0) {
//                 const indexOfDepartment = enterprise.departments.indexOf(findDepartmentId);
//                 enterprise.departments.splice(indexOfDepartment, 1);
//                 console.log("Департамент успешно удален");   
//                 departmentFound = true;
//                 break;
//         }        
//     }
//     if (!departmentFound) {
//         console.log("Департамент, соответствующий условиям не найден");
//     } 
// }

// deleteDepartment(3)
// deleteDepartment(10)

// 9

// function moveEmployees(idStart, idFinish){
//     for (const enterprise of enterprises) {
//         const findDepartmentIdStart = enterprise.departments.find(dep => dep.id === idStart);
//         const findDepartmentIdFinish = enterprise.departments.find(dep => dep.id === idFinish);
//     if (findDepartmentIdStart&&findDepartmentIdFinish) {
//         console.log (findDepartmentIdStart, findDepartmentIdFinish);
//         sum = findDepartmentIdStart['employees_count']+findDepartmentIdFinish['employees_count'];
//         findDepartmentIdStart['employees_count'] = 0;
//         console.log(findDepartmentIdStart['employees_count']);
//         findDepartmentIdFinish['employees_count'] = sum;
//         console.log(findDepartmentIdFinish['employees_count']);
//     }
//     else {"Айчар откинул копыта"}
//     }    
// }
// moveEmployees(2, 3) // 10 и 20. по результату 0 и 30