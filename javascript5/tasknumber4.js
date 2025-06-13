function kingSayd(string) {
    console.log(string.startsWith('Король сказал:') ? string : 'Король сказал: ' + string);
}

kingSayd("сегодня хорошая погода");  
kingSayd("Король сказал: я вернусь!");  