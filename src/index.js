module.exports = function check(str, bracketsConfig) {
  let result = true;
  for (let i = 0; i < str; i++) {
    bracketsConfig.forEach(element => {
      if (element.includes(str[i])) {
        result = true;
      } else {
        result = false;
      }
    });
  }
  return result
}
