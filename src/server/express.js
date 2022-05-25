const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const person = require('./models/schemas/Person');

const app = express();

app.use(logger);

app.use(express.static(path.join(__dirname, '../..', 'build')));
app.use(express.static(path.join(__dirname, '../..', 'public')));
// app.use((req, res, next) => {
//   res,sendFile(path.join(__dirname, "..", "build", "index.html"))
// });

// app.get("/", (req, res) =>  {
//   res.sendFile(path.join(__dirname, 'public/home.html'));
// });

app.get(process.env.REACT_APP_PERSONS_API, async (req, res) => { 
  const persons = await person.findAllPersons.clone().catch(function(err){ console.log(err)});
  res.send(persons);
});

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}.`));
