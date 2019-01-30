const expect = require('expect');
const path = require('path');
const exposer = require('../index')([path.join(__dirname, 'fixtures')]);

console.log(exposer);

describe('expose', () => {
  it('should return an object', () => {
    expect(exposer).toHaveProperty('fixtures', {
      'deep-example': {
        'sub-deep-example': {
          'sub-deep-example1': {
            subDeepExample1a: 'sub_deep_a',
            subDeepExample1b: 'sub_deep_b'
          }
        },
        'deep-example1': {
          deepExample1a: 'deep_a',
          deepExample1b: 'deep_b'
        }
      },
      example1: { example1a: 'a', example1b: 'b' },
      example2: { example2a: 'a2', example2b: 'b2' },
      example3: { example3a: 'a3', example3b: 'b3' }
    });
  });
});
