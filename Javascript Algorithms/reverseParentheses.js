//https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6

const removeParentheses = (s) => s.replace(/\(|\)/g, "");
const reverseString = (s) => s.split("").reverse().join("");

const solution = (input) => {
  const regex = /\([a-z]+?\)/g;
  while (regex.test(input)) {
    const matchs = input.match(regex);
    for (const match of matchs) {
      const replace = reverseString(removeParentheses(match));
      input = input.replaceAll(match, replace);
    }
  }
  return removeParentheses(input)
};
