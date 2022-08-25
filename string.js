function showVerticalMessage(str) {
    if(!str) return str;

    for (let char of str) {
        if (char === 's') {
            console.log(char.toUpperCase());
            continue;
        }
        console.log(char);
    }
}


showVerticalMessage('strada')