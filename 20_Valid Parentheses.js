var input = "((";

const pair = {
    "{": "}",
    "[": "]",
    "(": ")",
};

var isValid = function (s) {
    if (s.length % 2) return false;
    let temp = [];

    for (let i = 0; i < s.length; i++) {
        if (pair[s[i]]) {
            temp.push(s[i]);
            console.log(temp);
        } else if (s[i] == pair[temp[temp.length - 1]]) {
            temp.pop();
        } else {
            return false;
        }
    }

    return temp.length == 0;
};

output = isValid(input);
console.log(output);
