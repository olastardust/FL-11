function formatTime(a) {
    let min = a % 60;
    let hour = (a - min) / 60 % 24;
    let day = ((a - min) / 60 - hour) / 24;
    return (`${day} day(s) ${hour} hour(s) ${min} minute(s)`);
}

formatTime(12345);
