'use strict';

const {getBusSizes} = require('./services/sizes.service');

const sizes = async (event) => {
  let response;
  try {
    const sizes = getBusSizes(JSON.parse(event.body).groups);
    response = {
      statusCode: 200,
      body: JSON.stringify(
        {
          sizes: sizes
        },
        null,
        2
      ),
    };

  } catch (error) {
    console.error('Error:', error);
    response = {
      statusCode: 400,
      body: JSON.stringify(
        {
          error: error.message
        },
        null,
        2
      ),
    };
  }
  return response;
};

module.exports = {sizes}