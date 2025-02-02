function getInfo(prices) {
    let startsWithPrice = 0;
    let endsWithDollar = 0;

    prices.forEach(price => {
        if (price.startsWith('Цена')) startsWithPrice++;
        if (price.endsWith('$')) endsWithDollar++;
    });

    return [startsWithPrice, endsWithDollar];
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
