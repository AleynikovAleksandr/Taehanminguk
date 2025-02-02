let cards = [  
    '4000 0012 0056 9499',  
    '4000 0013 5456 7379',  
    '4000 0014 1456 9869',  
    '4000 0015 3466 7859',  
    '4000 0016 3556 6899',  
    '4000 0017 4456 4699'
];

let maskedCards = cards.map(card => {
    return card.replace(/(\d{4})\s?.+?\s?(\d{4})$/, '$1*****$2');
});

console.log(maskedCards);