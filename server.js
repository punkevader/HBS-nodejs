const express = require('express');
const app = express();
const hbs = require('hbs');
const { render } = require('express/lib/response');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');
//registrar un helper
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Pagina web | Hector ',
        nombre: "Hector",
        //anio: new Date().getFullYear()
    });
});

app.get('/acerca', (req, res) => {
    res.render('acerca', {
        titulo: "Acerca"
    });
});

app.listen(3000, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});