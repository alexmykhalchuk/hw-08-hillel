/**

* Описание задачи: Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.

* Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false

* Сложность задачи: 1 of 5

* @param element - элемент для проверки

* @returns {boolean}

*/



export const isPlainObject = (element) => {
    if (!Array.isArray(element) && element !== null && element instanceof Object) {
       return alert("true")
    } else {
        return alert("false")
}
};



const data = "1";

isPlainObject (data)

//console.log(isPlainObject(data)); // true