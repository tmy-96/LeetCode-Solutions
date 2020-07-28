let input = ["flower","flow","flight"]
let output = longestCommonPrefix(input)

console.log(output)

function longestCommonPrefix(strs: string[]): string {
    if (strs.length <= 0 || strs.includes("")) {
        return "";
    } else if (strs.length === 1) {
        return strs[0];
    }

    let output = strs[0];

    for (let i = 1; i < strs.length; i++) {

        for (let j = 0; j < output.length; j++) {
            if (output[j] != strs[i][j] || !strs[i][j]) {
                // console.log(output.substring(0,j));
                output = output.substring(0, j);
                break;
            }
        }
    }

    return output;
}