function iIstFridayToday() {
    const today = new Date();
    const dayOfWeek = today.getDay();  

    if (dayOfWeek === 5) {
        console.log("Сегодня пятница");
    } else if (dayOfWeek === 6) {
        console.log("Пятница была вчера");
    } else if (dayOfWeek === 4) {
        console.log("Завтра пятница!");
    } else {
        const daysUntilFriday = (5 - dayOfWeek + 7) % 7;  
        console.log(`Пятница будет через ${daysUntilFriday} ${daysUntilFriday === 1 ? 'день' : 'дней'}`);
    }
}

iIstFridayToday();