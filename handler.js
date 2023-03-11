'use strict';

module.exports.getBusSizes = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          sizes: 'Example',
        },
        null,
        2
      ),
    };
};
