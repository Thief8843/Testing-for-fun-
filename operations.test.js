const {add,subtract,divide,multiply} = require('./operations');

test('add',()=>{

    expect(add(1,2)).toBe(3);
})

test('subtract',()=>{
    expect(subtract(1,2)).toBe(-1);
})

test('divide',()=>{
    expect(divide(4,2)).toBe(2);

})

test('multiply',()=>{
    expect(multiply(4,2)).toBe(8);
})