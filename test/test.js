const expect  = require('expect');
const path    = require('path');
const exposer = require('../index')([path.join(__dirname, 'fixtures')]);

describe('expose', () => {
  it('should return an object', () => {
    expect(exposer).toHaveProperty('deep-example', {
      deepExemple1a: 'deep_a',
      deepExemple1b: 'deep_b'
    });

    expect(exposer).toHaveProperty('fixtures', {
      exemple1a: 'a',
      exemple1b: 'b',
      exemple2a: 'a2',
      exemple2b: 'b2',
      exemple3a: 'a3',
      exemple3b: '3b'
    });
  });
});