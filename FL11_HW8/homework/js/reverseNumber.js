function reverseNumber(a) {
    let b = a;
    let c = 0;
    while (b !== 0) {
        c = 10 * c + b % 10;
        b = Math.trunc(b / 10);
    }
    return c;
}

reverseNumber(624);
