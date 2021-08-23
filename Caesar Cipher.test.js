const caesarCipher = require('./Caesar Cipher');

test('caesarCipher', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz',1)).toBe('bcdefghijklmnopqrstuvwxyza');
})