let input: string = "Let's take LeetCode contest";

let output: string = reverseWords(input);

console.log(output);

function reverseWords(s: string): string {
  return s
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
