function logString(...args) {

    const result = args.join(' ') + ' ';
    console.log(result);
}

logString("Hello", "my", "world!"); 
