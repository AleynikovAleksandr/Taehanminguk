let products = [
    { id: 1, title: 'велосипед', price: 45000, count: 3, marks: [4, 3, 5, 3] },
    { id: 2, title: 'ролики', price: 25000, count: 5, marks: [4, 3, 5, 5] },
    { id: 3, title: 'арбалет', price: 1700, count: 9, marks: [3, 3, 4, 5] },
    { id: 4, title: 'коньки', price: 4500, count: 3, marks: [4, 3, 4, 3] },
    { id: 5, title: 'ракетки', price: 900, count: 15, marks: [5, 3, 5, 3] },
    { id: 6, title: 'штанги', price: 14000, count: 5, marks: [3, 3, 3, 2] },
    { id: 7, title: 'стрелы', price: 1200, count: 55, marks: [3, 2, 4, 5] },
    { id: 8, title: 'мячи', price: 500, count: 49, marks: [5, 4, 4, 4] },
    { id: 9, title: 'сетка', price: 5000, count: 6, marks: [4, 5, 2, 5] },
    { id: 10, title: 'гантели', price: 3400, count: 12, marks: [3, 2, 4, 2] },
    { id: 11, title: 'маты', price: 16500, count: 7, marks: [4, 4, 4, 5] }
];

let task_1 = products.filter(product => product.count > 10);
console.log("Task 1 (count > 10):", task_1);

let task_2 = products.find(product => product.price >= 800 && product.price <= 900);
console.log("Task 2 (price in range 800-900):", task_2);

let task_3 = [...products].sort((a, b) => b.price - a.price);
console.log("Task 3 (sorted by price descending):", task_3);

let task_4 = products.reduce((total, product) => total + (product.price * product.count), 0);
console.log("Task 4 (total price of all products):", task_4);

let task_5 = products.map(product => ({
    ...product,
    marks_total: product.marks.reduce((sum, mark) => sum + mark, 0)
})).sort((a, b) => b.marks_total - a.marks_total);
console.log("Task 5 (marks_total and sorted):", task_5);
