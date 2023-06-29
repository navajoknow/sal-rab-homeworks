// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    // Аргументом функции является JSON
    // Преобразуйте строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
    let data;
    data = JSON.parse(json);
    // и запишите в переменную data
    let products = data.products;
    // Верните как результат функции свойство products объекта data
    return products;
}

// Напишите функцию renderProductsCards(json)
// Аргументом функции является JSON
function renderProductsCards(json) {
// Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются
clearProducts();
// Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат в переменную products
let products = parseProducts(json);
// Запишите в переменную length значение свойства products.length
length = products.length;
// Напишите цикл, в котором перебираете все products от 0 до (length - 1)
for (let i = 0; i < length; i += 1) {
// и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)
    addProduct(products[i]);
 }
}