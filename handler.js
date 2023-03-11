'use strict';

async function sizes(event) {
  const data = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Datos recibidos - OK 💯',
        input: `Groups: ${data.groups}`,
      },
      null,
      2
    ),
  };
}

module.exports = { sizes };
