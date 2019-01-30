const expect = require('expect');
const Joi    = require('joi');

const exposer = require('../index')(['./fixtures']);

describe('expose', () => {
  it('should return an object', () => {
    const exampleModel = Joi.object().keys({
      fixtures: Joi.object().keys({
        'deep-example': Joi.object().keys({
          'deep-example1': Joi.object().keys({
            deepExample1a: Joi.string(),
            deepExample1b: Joi.string()
          }),
          'sub-deep-example': Joi.object().keys({
            'sub-deep-example1': Joi.object().keys({
              subDeepExample1a: Joi.string(),
              subDeepExample1b: Joi.string()
            })
          }),
        }),
        example1: Joi.object().keys({
          example1a: Joi.string(),
          example1b: Joi.string(),
        }),
        example2: Joi.object().keys({
          example2a: Joi.string(),
          example2b: Joi.string(),
        }),
        example3: Joi.object().keys({
          example3a: Joi.string(),
          example3b: Joi.string(),
        }),
        goodexample: Joi.object().keys({
          goodexample1: Joi.object().keys({
            getExample: Joi.required(),
          }),
          goodexample2: Joi.object().keys({
            getFullName: Joi.required()
          })
        })
      }),
    });

    const validation = Joi.validate(exposer, exampleModel);

    expect(validation.error).toBeNull();
  });
});
