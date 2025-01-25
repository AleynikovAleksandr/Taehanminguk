let users = [
    {id: 1, name: 'Alex', lastname: 'Wilyam', age: 20},
    {id: 2, name: 'Steven', lastname: 'King', age: 34} 
];

// Функция для добавления нового пользователя
function addUser(name, lastname, age) {
    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1; // Формируем новый ID
    users.push({ id, name, lastname, age });
    console.log(`User added: ${name} ${lastname}, age: ${age}`);
}

// Функция для обновления данных пользователя
function updateUser(id, name, lastname, age) {
    const user = users.find(user => user.id === id); // Находим пользователя по ID
    if (user) {
        user.name = name;
        user.lastname = lastname;
        user.age = age;
        console.log(`User with id=${id} updated.`);
    } else {
        console.log(`User with id=${id} not found.`);
    }
}

// Функция для удаления пользователя по ID
function deleteUser(id) {
    const index = users.findIndex(user => user.id === id); // Находим индекс пользователя
    if (index !== -1) {
        const deletedUser = users.splice(index, 1); // Удаляем пользователя
        console.log(`User deleted: ${deletedUser[0].name} ${deletedUser[0].lastname}`);
    } else {
        console.log(`User with id=${id} not found.`);
    }
}

console.log("Initial users:", users);

addUser('Michael', 'Scott', 45);
console.log("After adding a user:", users);

updateUser(2, 'Steven', 'Smith', 35);
console.log("After updating a user:", users);

deleteUser(1);
console.log("After deleting a user:", users);
