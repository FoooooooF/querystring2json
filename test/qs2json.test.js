import {parse} from '../src/qs2json';

test('querystring to json (parse)', () => {
  expect(parse("a=1 &a=2&b=2&c=3&d=123&e=true"))
  .toEqual({ a: [ '1', '2' ], b: '2', c: '3', d: '123', e: 'true' });
})