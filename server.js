// ------------- REQUIREMENTS ------------- //

const express = require('express');
const app = express();
const methodOverride = require('method-override');
const PORT = 4000;

// ------------- CONTROLLERS ------------- //


//config views
app.set('view engine', 'ejs');


// ------------- MIDDLEWARE ------------- //

app.use(express.static(`${__dirname}/public`));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${new Date().toLocaleTimeString()}`);
    next();
    });

// ------------- ROUTES ------------- //

// Home (Root) Route
app.get('/', (req, res) => {
    res.render('index');
    });



// ------------- SERVER LISTENER ------------- //

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));