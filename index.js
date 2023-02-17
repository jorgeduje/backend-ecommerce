const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
require('dotenv');

const {
  errorHandler,
  logErrors,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();

// PARA PODER OBTENER EL BODY EN JSON
app.use(express.json());

// const whitelist = ['http://localhost:3000', 'http://localhost:5173'];
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('no permitido'));
//     }
//   },
// };
app.use(cors());
routerApi(app);

app.get('/', (req, res) => {
  res.send('Hola a mi server');
});

// SIEMPRE DESPUES DEL ROUTING
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
