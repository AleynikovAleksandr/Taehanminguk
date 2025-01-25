class Email {
    constructor(email) {
        this.email = email;
    }

    get isValid() {

        const [login, domainZone] = this.email.split("@");
        const domain = domainZone.split(".")[1];
        
        const invalidChars = /[\*\#\$\%\^]/;
        const isLoginValid = !invalidChars.test(login);
        const isDomainValid = domain.length <= 3;

        return isLoginValid && isDomainValid;
    }

    set setEmail(newEmailArray) {
        this.email = `${newEmailArray[0]}@${newEmailArray[1]}.${newEmailArray[2]}`;
    }
}

const email1 = new Email("example@ex.com");
console.log(email1.isValid); 
email1.setEmail = ["newUser", "yahoo", "com"];
console.log(email1.email); 

const email2 = new Email("invalid*login@mail.org");
console.log(email2.isValid); 
email2.setEmail = ["user2", "gmail", "com"];
console.log(email2.email); 
