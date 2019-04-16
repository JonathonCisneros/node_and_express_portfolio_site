const express = require('express');
const { data } = require('./data.json');

const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');

app.use(mainRoutes);
app.use('/about', aboutRoutes);


app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});
