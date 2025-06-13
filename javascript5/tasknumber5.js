function iIstFridayToday() {
    const today = new Date();
    const dayOfWeek = today.getDay();

    switch(dayOfWeek) {
        case 5:
            console.log("Сегодня пятница");
            break;
        case 6:
            console.log("Пятница была вчера");
            break;
        case 4:
            console.log("Завтра пятница!");
            break;
        default:
            const daysUntilFriday = (5 - dayOfWeek + 7) % 7;
            const word = daysUntilFriday === 1 ? 'день' : (daysUntilFriday >= 2 && daysUntilFriday <= 4 ? 'дня' : 'дней');
            console.log(`Пятница будет через ${daysUntilFriday} ${word}`);
    }
}

iIstFridayToday();