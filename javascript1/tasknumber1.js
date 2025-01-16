let price = 10000;
let range = "day";

let rangeshifting = {
    "month": "месяц",
    "day": "день",
    "week": "неделю"
};

let result = `${price} Р в ${rangeshifting[range]}`;
console.log(result);
