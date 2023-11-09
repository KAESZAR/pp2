
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port:'3306',
  user: 'root',
  password: 'Developer2403',
  database: 'sis_reservas'
});

connection.connect(function(err) {
  if (err) {
    console.error('Error al conectarse a la base de datos:', err);
    return;
  }

  console.log('¡Conectado a la base de datos!');
});

connection.end();