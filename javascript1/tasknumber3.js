let a = 2;
let b = 1245;
let sign = "+";

let result;

if (sign === "+") {
    result = a + b;
} else if (sign === "-") {
    result = a - b;
} else if (sign === "*") {
    result = a * b;
} else if (sign === "/") {
    if (b === 0) {
        console.log("Делить на 0 нельзя!");
    } else {
        result = a / b;
    }
} else {
    console.log("Некорректный оператор!");
}

if (result !== undefined) {
    console.log(result);
}
