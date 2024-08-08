module.exports = function toReadable(number) {
    const units = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    }
    const firstTen = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    }
    const tens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    }

    let hundred = Math.floor(number / 100);
    let ten = Math.floor((number - hundred * 100) / 10);
    let unit = number - hundred * 100 - ten * 10;
    let str = '';
    if (units[number]) return units[number];
    if (hundred) {
        str = units[hundred] + ' hundred';
    }
    if (ten > 1) {
        str += ' ';
        str += tens[ten];
    }
    if (ten === 1) {
        let index = ten * 10 + unit;
        str += ' ';
        str += firstTen[index];
        return str.trim();
    } else
    if (unit) {
        str += ' ';
        str += units[unit];
    }
    return str.trim();
}
