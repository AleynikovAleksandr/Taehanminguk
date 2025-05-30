function getInfo(prices) {
    return prices.reduce(
        (acc, price) => {
            if (price.startsWith('Цена')) acc[0]++;
            if (price.endsWith('$')) acc[1]++;
            return acc;
        },
        [0, 0]
    );
}

let prices = [
    'Цена товара - 1200$', 
    'Стоимость - 500$', 
    'Цена не определена', 
    '9999', 
    'Ценовая категория - больше 300$', 
    'Цена за услугу 500 EUR', 
    '150$'
];

console.log(getInfo(prices));
