const express    = require('express'),
      app        = express(),
      port       = process.env.PORT || 8080,
      bodyParser = require('body-parser');

const beerRoutes = require('./routes/beers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello from the Beers API! Try uploading a beer with Postman!');
});

app.use('/api/beers', beerRoutes);

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
});