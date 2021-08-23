const capitalize = require('./capitalize');

test('capitalize', () =>{
    expect(capitalize('abc')).toBe('Abc');
})