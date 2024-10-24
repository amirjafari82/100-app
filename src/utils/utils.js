export function formatTime(date) {
    return new Intl.DateTimeFormat("en", {
        month: "short",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(date);
}

export function getRandomCode(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
}

export function cardFormat(x) {
    return x.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "-");
}

export function phoneFormat(x) {
    return x.toString().replace(/\B(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
}
