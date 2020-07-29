var strStr = function (haystack, needle) {
    return haystack.search(needle);
};

var input = {
    haystack: "hello",
    neddle: "2",
};

var output = strStr(input.haystack, input.neddle);
console.log(output);
