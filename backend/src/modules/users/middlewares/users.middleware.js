const { celebrate, Segments, Joi } = require('celebrate');
const { verify } = require('jsonwebtoken');
module.exports = {
  verifyPayloadForCreation() {
    return celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6),
      },
    });
  },

  verifyEmailToForgotPassword() {
    return celebrate({
      [Segments.BODY]: {
        email: Joi.string().email().required(),
      },
    });
  },

  verifyPayloadForLogin() {
    return celebrate({
      [Segments.BODY]: {
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6),
      },
    });
  },
};
