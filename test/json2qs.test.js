import {
    stringify
} from '../src/json2qs';

test('json to querystring  (stringify)', () => {
    expect(stringify({
            a: ['1', '2'],
            b: '2',
            c: '3',
            d: '123',
            e: 'true'
        }))
        .toBe("a=1&a=2&b=2&c=3&d=123&e=true");
})

test('error:param include object', () => {
    function getStringify(){
        stringify({
            a: ['1', '2'],
            b: '2',
            c: '3',
            d: '123',
            e: 'true',
            f: {
                a: 1,
                b: 2
            }
        })
    }
    expect(getStringify) .toThrow("param object can't include obejct");
})



test('error:param is not an obejct', () => {
    function getStringify1(){
        stringify("123")
    }
    expect(getStringify1) .toThrow("param must be an object");
})