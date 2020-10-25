const additionalWord = {
    "0": "",
    "1": "",
    "2": "hundred",
    "3": "thousand",
}

const readableNumber = {
    "0": {
        single: '',
        penult: '',
        afterOne: 'ten'
    },
    '1': {
        single: 'one',
        penult: '',
        afterOne: 'eleven',
    },
    '2': {
        single: 'two',
        penult: 'twenty',
        afterOne: 'twelve'
    },
    '3': {
        single: 'three',
        penult: 'thirty',
        afterOne: 'thirteen'
    },
    '4': {
        single: 'four',
        penult: 'forty',
        afterOne: 'fourteen'
    },
    '5': {
        single: 'five',
        penult: 'fifty',
        afterOne: 'fifteen'
    },
    '6': {
        single: 'six',
        penult: 'sixty',
        afterOne: 'sixteen'
    },
    '7': {
        single: 'seven',
        penult: 'seventy',
        afterOne: 'seventeen'
    },
    '8': {
        single: 'eight',
        penult: 'eighty',
        afterOne: 'eighteen'
    },
    '9': {
        single: 'nine',
        penult: 'ninety',
        afterOne: 'nineteen'
    },
};

module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }

    return number
        .toString()
        .split('')
        .map((element, index, numbers) => {
            let type = "single";
            if (index === numbers.length - 2) {
                type = "penult";
            }
            if (index === numbers.length - 1 && numbers[numbers.length - 2] === "1") {
                type = "afterOne";
            }

            const readNumber = readableNumber[element][type];
            const addWord = additionalWord[(numbers.length - 1 - index).toString()];
            return `${readNumber} ${addWord}`
        })
        .join(' ')
        .replace(/\s\s+/g, ' ').trim();
}
