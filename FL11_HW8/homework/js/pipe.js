function pipe(a) {
    let b = a;
    for (let i = 1; i < arguments.length; i++) {
        b = arguments[i](b);
    }
    return b;
}

pipe(1, Math.sqrt);
