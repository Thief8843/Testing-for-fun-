function caesarCipher(string, k) {
  const stringSplit = string.split('');
  const sum = [];
  const result = [];
  for (let i = 0; i < stringSplit.length; i++) {
    stringSplit[i] = stringSplit[i].charCodeAt(0) - 97;

    sum[i] = stringSplit[i] + k;

    if (sum[i] > 25) {
      result[i] = String.fromCharCode(sum[i] - 26 + 97);
    } else {
      result[i] = String.fromCharCode(sum[i] + 97);
    }
  }
  return result.join('');
}

module.exports = caesarCipher;
