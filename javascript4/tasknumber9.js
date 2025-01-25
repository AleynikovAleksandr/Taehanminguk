class Email {
    constructor(email) {
        this.email = email;
    }

    // Геттер для проверки валидности email
    get isValid() {
        const emailParts = this.email.split("@");
        
        // Проверка на наличие @ и доменной зоны
        if (emailParts.length !== 2) return false;

        const [login, domainZone] = emailParts;
        const domainParts = domainZone.split(".");
        
        // Проверка на правильность доменной зоны
        if (domainParts.length < 2) return false;
        
        const domain = domainParts[1];

        const invalidChars = /[\*\#\$\%\^]/;
        const isLoginValid = !invalidChars.test(login);
        const isDomainValid = domain.length <= 3;

        return isLoginValid && isDomainValid;
    }

    // Сеттер для изменения email
    set setEmail(newEmailArray) {
        this.email = `${newEmailArray[0]}@${newEmailArray[1]}.${newEmailArray[2]}`;
    }
}

// Класс Contact, наследующий Email
class Contact extends Email {
    constructor(email, phone) {
        super(email);
        this.phone = phone;
    }

    // Геттер для определения типа телефона
    get phoneType() {
        const sanitizedPhone = this.phone.replace("+", ""); // Убираем знак +
        const phoneLength = sanitizedPhone.length;

        if (!this.phone.includes("+")) {
            return "Неизвестный";
        } else if (phoneLength === 12) {
            return "Мобильный";
        } else if (phoneLength === 18) {
            return "Городской";
        } else {
            return "Неизвестный";
        }
    }
}

const contact1 = new Contact("example@ex.com", "+123456789012");
console.log(contact1.isValid); // true
console.log(contact1.phoneType); // "Мобильный"

const contact2 = new Contact("invalid#email.com", "123456789012345678");
console.log(contact2.isValid); // false
console.log(contact2.phoneType); // "Неизвестный"

// Изменяем email второго контакта
contact2.setEmail = ["user2", "gmail", "com"];
console.log(contact2.email); // "user2@gmail.com"

// Изменяем телефон второго контакта
contact2.phone = "+123456789012345678";
console.log(contact2.phoneType); // "Городской"
