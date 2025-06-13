function getInfo(prices) {
    let countStarts = 0;
    let countEnds = 0;
    prices.forEach(price => {
        if (price.startsWith('Цена')) countStarts++;
        if (price.endsWith('$')) countEnds++;
    });
    return [countStarts, countEnds];
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